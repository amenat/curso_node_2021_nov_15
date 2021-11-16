const http = require('http');
const fs = require("fs");
const path = require("path");
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url, true);
  
  const json = JSON.stringify(parsedUrl.query, null, 4);

  const filePath = path.join(__dirname, "..", "seccion_02", "index.html");
  let html = fs.readFileSync(filePath, { encoding: "utf-8" })

  html = html.replace("{{}}", json);

  fs.writeFileSync(filePath, html, { encoding: "utf-8" });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});