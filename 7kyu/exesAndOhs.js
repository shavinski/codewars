function XO(str) {
    //code here
    if (!str.includes('x') && !str.includes('o')) return true;
    const cache = {};

    for (let char of str) {
        let letterLowerCase = char.toLowerCase();
        cache[letterLowerCase] = cache[letterLowerCase] + 1 || 1;
    }

    console.log('cache', cache)
    console.log('str', str)
    return cache['x'] === cache['o'];
}