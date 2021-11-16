const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");



const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    const json = JSON.stringify(parsedUrl.query, null, 4);

    const filePath = path.join(__dirname, "..", "seccion_02", "index.html");
    let html = fs.readFileSync(filePath, { encoding: "utf-8" });

    html = html.replace("{{}}", json);

    fs.writeFileSync(filePath, html, { encoding: "utf-8" });

    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(html);
});


server.listen(8080, "127.0.0.1", () => {
    console.log("Servidor iniciado");
})

