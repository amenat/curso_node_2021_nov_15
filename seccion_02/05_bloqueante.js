import { readFileSync } from "fs";
import { join } from "path";
import { __dirname, __filename } from "./globals.js";

console.log("\n".repeat(2));

console.time("Archivo cargado");
console.time("Mensaje");

readFileSync(join(__dirname, "file.txt"), { encoding: "utf-8" });

console.timeEnd("Archivo cargado");
console.timeEnd("Mensaje");



