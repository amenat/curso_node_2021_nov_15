import { suma, suma_multi_v1 } from "./03_funciones_calc.js";


export const suma_clb = (...args0) => {
    const [options] = args0;
    console.log({ options });
    const { parent } = args0[1];
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

};



