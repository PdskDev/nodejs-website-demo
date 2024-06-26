var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var port = 3000;

var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(port);
console.log(`Server is running at port ${port}`);
