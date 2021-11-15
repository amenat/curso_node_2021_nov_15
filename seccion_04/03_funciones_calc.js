

export function suma(a, b) {
    if (typeof a === "string") a = parseFloat(a);
    if (!b) return a;
    if (typeof b === "string") b = parseFloat(b);
    return a + b;
}

export const suma_arrow = (a, b) => a + b;

export const suma_multi_v1 = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === "string") args[i] = parseFloat(args[i]);
        result += args[i];
    }
    return result;
};

export const suma_multi_v2 = (...args) => {
    let result = 0;
    args.forEach((arg) => {
        result += arg;
    });
    return result;
};

export const suma_multi_v3 = (...args) => args.reduce((acc, current) => {
    acc += current;
    return acc;
}, 0);




