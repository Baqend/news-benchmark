var er = function(error) {
    console.error('error', error);
};

var cb = {
    success: function(response) {
        console.log('Saved: ' + JSON.stringify(response));
    },
    error: function(error) {
        console.error('error', error);
    }
};

function all(promises) {
    var results = [];
    return promises.reduce(function(left, right) {
        return left.then(function(result) {
            results.push(result);
            return right;
        }, er);
    }).then(function(last) {
        results.push(last);
        return results;
    }, er);
}

function connect() {
    var promise = Kinvey.init({
        appKey: 'kid_ZJ4PB6ANU',
        appSecret: '6b1f6499bac743b0a731905772cc4338'
    }).then(function(activeUser) {
        if (null === activeUser) {
            console.log('User created');
            return Kinvey.User.create();
        }
    }).then(null, er);
    return promise;
}


function insert() {
    var promises = [
        Kinvey.DataStore.save('streams', wirtschaft, cb),
        Kinvey.DataStore.save('streams', politik, cb),
        Kinvey.DataStore.save('streams', kultur, cb)
    ];
    allnews.forEach(function(elem) {
        var query = new Kinvey.Query();
        query.equalTo('_filename', elem.img);
        var promise = Kinvey.File.find(query, cb);
        promises.push(promise.then(function(response) {
            elem.img = response[0]._downloadURL;
            return Kinvey.DataStore.save('news', elem, cb);
        }, er));
    });
    return all(promises);
}

function load(rubrik) {
    return Kinvey.DataStore.get("streams", rubrik).then(function(obj) {
        var promises = [];
        obj.news.forEach(function(id) {
            promises.push(Kinvey.DataStore.get("news", id));
        });
        return all(promises);
    });
}

connect().then(function() {
    ['wirtschaft', 'politik', 'kultur'].forEach(function(streamId) {
        Kinvey.DataStore.get("streams", streamId).then(function(stream) {
            stream.news.forEach(function(id) {
                render(stream.titel, Kinvey.DataStore.get("news", id));
            });
        });
    });
});
