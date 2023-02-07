export const arraysToObject = (keys, values) => {
    const obj = {};

    keys.forEach((element, index) => {
        obj[element] = values[index];
    });

    return obj;
}
