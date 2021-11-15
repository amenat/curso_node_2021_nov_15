import { readFile } from "fs";
import { join } from "path";
import { __dirname, __filename } from "./globals.js";

console.log("\n".repeat(2));

console.time("Archivo cargado");
console.time("Mensaje");

readFile(join(__dirname, "file.txt"), { encoding: "utf-8" }, (err, _data) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    console.timeEnd("Archivo cargado");
});

console.timeEnd("Mensaje");



