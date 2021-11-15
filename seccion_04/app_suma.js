"use strict";

var commander_1 = require("commander");
function suma(a, b) {
    if (typeof a === "string")
        a = parseFloat(a);
    if (!b)
        return a;
    if (typeof b === "string")
        b = parseFloat(b);
    return a + b;
}
var suma_multi_v1 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < args.length; i++) {
        if (typeof args[i] === "string")
            args[i] = parseFloat(args[i]);
        result += args[i];
    }
    return result;
};
commander_1.program
    .command("suma")
    .aliases(["s"])
    .action(function (options, parent) {
    console.log({ options: options });
    var args = parent.args;
    var operation = args[0], numbers = args.slice(1);
    if (!["suma", "s"].some(function (op) { return operation === op; })) {
        console.log("Operación no soportada");
        return;
    }
    console.log({ numbers: numbers });
    if (numbers && numbers.length > 2) {
        console.log(suma_multi_v1.apply(void 0, numbers));
        return;
    }
    var result = suma(numbers[0], numbers[1]);
    console.log(result);
});
commander_1.program.parse();
