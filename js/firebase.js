
// <script src="https://www.gstatic.com/firebasejs/3.5.2/firebase.js"></script>
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAeSs0QCMXKNo11RFNlichwq2e9AYmCmI8",
    authDomain: "news-c6e59.firebaseapp.com",
    databaseURL: "https://news-c6e59.firebaseio.com",
    storageBucket: "news-c6e59.appspot.com",
    messagingSenderId: "135961273538"
};
firebase.initializeApp(config);

['kultur', 'wirtschaft', 'politik'].forEach(function(streamId) {
    firebase.database().ref(streamId).on('value', function (articleIds) {
        articleIds.val().forEach(function(articleId) {
            firebase.database().ref('news/' + articleId).on('value', function (article) {
                render(
                    streamId,
                    Promise.resolve({
                        tag: article.val().tag,
                        date: article.val().date,
                        img: article.val().img,
                        headline: article.val().headline,
                        short: article.val().short
                    })
                );
            });
        });
    });
});

