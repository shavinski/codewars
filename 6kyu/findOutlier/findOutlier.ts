/**
 * Goal: Return the number which is an outlier in the array
 * 
 * input: array of numbers 
 * output: single outlier number
 * 
 * Test Cases: 
 * (guaranteed to have a length of at least 3)
 * 
 * [0, 1, 2]), 1
 * [1, 2, 3]), 2
 * [2, 6, 8, 10, 3]), 3
 * 
 * Logic:
 * Have an object for storage of odd and evens
 *      keys will be
 *          odd: [nums]
 *          even: [nums]
 * 
 * loop through integers array
 *      if is even
 *          push the number to the even array
 *      if is odd
 *          push the number to the odd array
 * 
 * return the first index of the array which has a length of one
 */

interface numStorage {
    odd: number[],
    even: number[]
}

function findOutlier(integers: number[]): number {
    const numStorage: numStorage = {
        odd: [],
        even: []
    }

    for (let num of integers) {
        if (num % 2 !== 0) {
            numStorage['odd'].push(num);
        }

        if (num % 2 === 0) {
            numStorage['even'].push(num);
        }
    }


    return numStorage['odd'].length === 1 ? numStorage['odd'][0] : numStorage['even'][0]
}

export default findOutlier