
/**
 *  input: a number 
 *  output: array of arrays
 * 
 *  Test Cases: 
 *  0 => []
 *  1 => [ [1] ]
 *  2 => [ [1], [1, 1] ]
 *  3 => [ [1], [1, 1], [1, 1, 1] ]
 * 
 *  Logic: 
 * 
 *  create an empty array 
 *  
 *  loop until we are at input num
 *    create an empty subArray
 *      
 *      loop until length of subArray is equal to the current num 
 *          push 1 onto the subArr
 * 
 *   push subArr to result 
 * 
 * 
 *  return our result array
 * 
 */

export function pyramid(n: number) {      // n: 2
    // your code here
    const result = [];                    // [ [1], [1,1] ]

    for (let i = 0; i < n; i++) {         // 2 < 2
        let subArr = [];                  // [1, 1]

        for (let j = 0; j <= i; j++) {   // 2 <= 1
            subArr.push(1);          
        }

        result.push(subArr);
    }

    return result;
}