const http = require('http')
const fs = require('fs');
const { join } = require('path');

const videoPath = join(__dirname, "1_Puesta_en_marcha_entorno_desarrollo_Onesait.mp4");

const server = http.createServer(function(req, res) {
  const stream = fs.createReadStream(videoPath);
  res.setHeader("content-type", "video/mp4");
  stream.pipe(res);
})
server.listen(3000, "127.0.0.1", () => console.log("Servidor iniciado"))