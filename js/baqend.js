DB.connect('news');

var insertPromise = ~location.search.indexOf("init=true")? insertBaqendNews(): DB.ready();

insertPromise.then(function() {
  ['wirtschaft', 'politik', 'kultur'].forEach(function(streamId) {
    DB.Stream.load(streamId, function(stream) {
      stream.news.forEach(function(news) {
        render(stream.titel, DB.News.load(news.id));
      });
    });
  });
});