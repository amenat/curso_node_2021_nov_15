const http = require("http");
const fs = require("fs");
const { join } = require('path');


const videoPath = join(__dirname, "matrix1.mp4");

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(videoPath);
    res.setHeader("content-type", "video/mp4");
    stream.pipe(res);
});


server.listen(8080, "127.0.0.1", () => console.log("Servidor iniciado"));
