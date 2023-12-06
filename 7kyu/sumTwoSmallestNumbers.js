function sumTwoSmallestNumbers(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of numbers) {
        if (num < smallest) {
            secondSmallest = smallest
            smallest = num;
        } else if (num < secondSmallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest + smallest;
}