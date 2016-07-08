DB.connect('news');

var insertPromise = ~location.search.indexOf("init=true") ? insertBaqendNews() : DB.ready();

insertPromise.then(function() {
    ['wirtschaft', 'politik', 'kultur'].forEach(function(streamId) {
        DB.Stream.load(streamId, function(stream) {
            stream.news.forEach(function(news) {
                // loads the news object and creates the image url
                var loadNews = DB.News.load(news.id).then(function(e) {
                    e.img = new DB.File(e.img).url;
                    return e;
                });
                render(stream.titel, loadNews);
            });
        });
    });
});
