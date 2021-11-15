import { writeFileSync } from 'fs';
import { join } from 'path';
import { __filename, __dirname } from "./globals.js";


let data = "";

for (let i = 0; i < 1000000; i++) {
    data += "Line " + i + "\n";
}

writeFileSync(join(__dirname, "file.txt"), data, { encoding: "utf-8" });
