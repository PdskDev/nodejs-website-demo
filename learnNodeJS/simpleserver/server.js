const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const { unescape } = require("querystring");
const mimeTypes = {
  html: "text/html",
  jpeg: "image/jpeg",
  jpg: "image/jpg",
  png: "image/png",
  js: "text/javascript",
  css: "text/css",
};

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(function (req, res) {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "text/plain");
  // res.end("Hello World\n");
  var uri = url.parse(req.url).pathname;
  var fileName = path.join(process.cwd(), unescape(uri));
  console.log("loading " + uri);
  var stats;

  try {
    stats = fs.lstatSync(fileName);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("404 Not Found\n");
    res.end();
    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
