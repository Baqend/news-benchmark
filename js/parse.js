Parse.initialize("9LwVbpuFds6zAGWaHVQeX5nXMuArPyPEP6rsabVH", "vMrAMxHt5eIfhdNfjpgxnooQ4FWDAKRv3W3LtNHL");
Parse.serverURL = "https://parseapi.back4app.com";

['BybRny5uMV', 'HEpKr8wCIk', 'CgqcIGbLHa'].forEach(function(streamId) {
  var streamQuery = new Parse.Query("Stream");
  streamQuery.get(streamId).then(function(stream) {
    stream.get('news').forEach(function(newsId) {
      var newsQuery = new Parse.Query("News");
      render(stream.get('titel'), newsQuery.get(newsId).then(function(news) {
        return {
          date: news.get('date'),
          img: news.get('img'),
          headline: news.get('headline'),
          short: news.get('short')
        };
      }));
    });
  });
});
