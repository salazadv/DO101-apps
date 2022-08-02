var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Hello Brazil! Hello Brasilia - DF!\n');
});

app.get('/october', function(req, res) {
  res.send('Welcome October! Welcome R I C H A R D !');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

