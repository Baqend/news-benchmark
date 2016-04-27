var $body = $('body');
var newsTempl = $('#js_news').text();
var render = function(stream, newsPromise) {
  var $container = $body.find('.js_' + stream.toLowerCase());
  $container.find('.js_streamname').html(stream);
  var $el = $(newsTempl);
  $container.append($el);
  newsPromise.then(function(news) {
    var img = news.img.indexOf('http') == 0? news.img: news.img;
    $el.find('.js_date').html(news.date);
    $el.find('.js_tag').html(news.tag);
    $el.find('.js_short').html(news.short);
    $el.find('.js_headline').html(news.headline);
    $el.find('.js_image').append($('<img src="' + img + '">'));
    $el.removeClass('hideAnimation');
  });
};
