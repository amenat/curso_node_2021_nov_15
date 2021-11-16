const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const { EventEmitter } = require("events");


const filePath = path.join(__dirname, "..", "seccion_02", "index.html");
const logFilePath = path.join(__dirname, "log.txt");
const logEvent = new EventEmitter();

logEvent.on("request", (json) => {

    fs.appendFileSync(logFilePath, `${json}\n`, { encoding: "utf-8" })

});

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    let html = fs.readFileSync(filePath, { encoding: "utf-8" });

    if (Object.keys(parsedUrl.query).length) {
        const json = JSON.stringify(parsedUrl.query);
        logEvent.emit("request", json);
    }

    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(html);
});




server.listen(8080, "127.0.0.1", () => {
    console.log("Servidor iniciado");
})

