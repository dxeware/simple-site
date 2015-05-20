var express = require("express");
var random = require("./random-color");
var jokes = require("./jokes");
var petinfo = require("./pets");
var app = express();
var path = require("path");
var port = process.env.PORT || 3000;

app.use( express.static(path.join(__dirname, "app")));

app.listen(port, function() {
  console.log('app server started on port', port);
});

app.get("/", function (req, res) {
  res.send("rocking code fellows!");
});

app.get("/color", function (req, res) {
  res.send(random());
});

app.get('/jokes', function (req, res) {
  res.json(jokes);
});

app.get('/petinfo', function (req, res) {
  res.json(petinfo);
});
