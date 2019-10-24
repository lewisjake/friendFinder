// npm packages that allow the program to function
var express = require("express");
var bodyPaser = require("body-parser");
var path = require("path");

// tell node we are using express
var app = express();

// set-up port
var PORT = process.env.PORT || 3030;

// set-up express to handle data parsing
app.use(bodyPaser.urlencoded({ extended: true}));
app.use(bodyPaser.json());
app.use(bodyPaser.text());
app.use(express.static(path.join(__dirname, './app/public')));

// add routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// start listening on PORT
app.listen(PORT, function() {
    console.log('Friend Finder app is listening on PORT: ' + PORT);
  });
