Parse.initialize("KcOmxezYu9FbY7qss2aIvhfwW89RTsY98mZn6LE9", "NftTH1LiZ1FSBBv8Gjk7lfacFSnP7l60bNid8IBv");

var streamQuery = new Parse.Query("Stream");
var newsQuery = new Parse.Query("News");
['pxWppj9niE', 'bruA5Oc3dY', '07xVFWkeML'].forEach(function(streamId) {
  streamQuery.get(streamId).then(function(stream) {
    stream.get('news').forEach(function(news) {
      render(stream.get('titel'), newsQuery.get(news.id).then(function(news) {
        return {
          tag: news.get('tag'),
          date: news.get('date'),
          img: news.get('img'),
          headline: news.get('headline'),
          short: news.get('short')
        };
      }));
    });
  });
});


