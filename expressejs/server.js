var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', article: { title: 'Hello there!', body: 'The text!' } });
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
