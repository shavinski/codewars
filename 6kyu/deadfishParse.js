// Return the output array, and ignore all non-op characters
function parse(data) {
    let value = 0;
    let result = [];

    for (let char of data) {
        if (char === "i") {
            value++;
        } else if (char === "d") {
            value--;
        } else if (char === "s") {
            value = value * value;
        } else if (char === "o") {
            result.push(value);
        }
    }

    return result;
} 