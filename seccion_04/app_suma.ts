import { program } from "commander";


function suma(a, b) {
    if (typeof a === "string") a = parseFloat(a);
    if (!b) return a;
    if (typeof b === "string") b = parseFloat(b);
    return a + b;
}

const suma_multi_v1 = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === "string") args[i] = parseFloat(args[i]);
        result += args[i];
    }
    return result;
};


program
    .command("suma")
    .aliases(["s"])
    .action((options: any, parent: any) => {
        console.log({ options });
        const { args } = parent;

        const [operation, ...numbers] = args;

        if (!["suma", "s"].some((op) => operation === op)) {
            console.log("Operación no soportada");
            return;
        }

        console.log({ numbers });

        if (numbers && numbers.length > 2) {
            console.log(
                suma_multi_v1(...numbers)
            );
            return;
        }

        const result = suma(numbers[0], numbers[1]);

        console.log(result);

    })
    ;



program.parse();



