/**
 * Goal: return array of arrays with 
 * 
 * input: size(number)
 * output: array of arrays
 * 
 * Test Cases:
 * size = 1 => [[1]]
 * size = 4 => [[1, 2, 3, 4], [2, 4, 6, 8], [3, 6, 9, 12], [4, 8, 12, 16]]
 * 
 * Logic:
 * if size is 0 return empty array
 * 
 * have a variable set to be an empty array
 * 
 * first for loop which will be the base number that will be multiplied, break out of it when the num is < size + 1
 *      have a variable be empty array
 *      have a times by variable 
 *  
 *      for loop, which will be what we multiply the base number by, break out of it when subArray.length = size 
 *          push the product of base num * timesBy
 * 
 
 *          
 *   
 *  return result array
 */


export function multiplicationTable(size: number): number[][] {   // size : 2
    if (size === 0) return [[]];

    const result = [];                                          // []

    for (let i = 1; i <= size; i++) {
        let multiples: number[] = [];

        for (let j = 1; j <= size; j++) {
            multiples.push(j * i);
        }

        result.push(multiples);
    }

    return result
}