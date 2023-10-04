function divisors(integer) {
    if (integer < 1) return false;

    const factors = [];

    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            factors.push(i);
        }
    }

    return factors.length === 0 ? `${integer} is prime` : factors;
};