#!/usr/bin/env node 

import { program } from "commander";
import { suma_clb } from './callbacks.js';



program
    .command("suma")
    .aliases(["s"])
    .action(suma_clb);



program.parse();



