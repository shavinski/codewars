export function alphanumeric(string: string): boolean {
    if (string.length < 1) return false;

    for (let char of string) {
        if (!valid(char)) {
            return false;
        }
    }

    return true;
}


function valid(char: string): boolean {
    if (char >= 'a' && char <= 'z' ||
        char >= 'A' && char <= 'Z' ||
        char >= '0' && char <= '9') {
        return true;
    }

    return false;
}