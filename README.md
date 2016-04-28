Baqend News Benchmark
================================

This is a simple news web application to compare the [Baqend](http://www.baqend.com) performance against the competitors [Parse](http://www.parse.com), [Apiomat](https://apiomat.com), [Azure Mobile Services](https://azure.microsoft.com) and [Kinvey](http://www.kinvey.com/)

## Description

The application loads three different stream objects. Each contains a title and a list of ten different news ids:

```json
{
	"title": "Wirtschaft",
	"news": ["/db/News/w1", "/db/News/w2", "/db/News/w3", "/db/News/w4", "/db/News/w5", "/db/News/w6", "/db/News/w7", "/db/News/w8", "/db/News/w9", "/db/News/w10"]
}
```

An news object is referenced by an id. It contains a headline, short text, image link and a date:

```json
{
	"id": "/db/News/w1",
	"headline": "Guter Rat zur Geldanlage ist selten",
	"short": "Honorarberatung ist in Deutschland endlich gesetzlich geregelt. Doch gibt es kaum Honorarberater. Und gut qualifizierte noch viel weniger.",
	"img": "geldanlage-honorarberatung-220x124.jpg",
	"date": "11. November 2014  07:15 Uhr"
}
```

## Usage

Clone this repository, install the node modules (```npm install```) and start the http server with ```grunt```. To change the used provider edit the comments and the end of the ```index.html```.

You can also use our hosted versions:

* [Baqend](http://news.app.baqend.com/v1/file/www/index.html)
* [Parse](http://newsq.parseapp.com/)
* [Azure Mobile Services](http://newsq.azurewebsites.net/)
* [Apiomat](https://baqendnews.s3.amazonaws.com/apiomat/index.html) *Static files deployed on AWS S3*
* [Kinvey](https://baqendnews.s3.amazonaws.com/kinvey/index.html) *Static files deployed on AWS S3*