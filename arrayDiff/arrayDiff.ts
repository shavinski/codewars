/**
 *  Goal: get rid of everything in array a that is in array b 
 * 
 * input: 
 * a => array of numbers
 * b => an array of numbers
 * output:
 * array of numbers 
 * 
 * Test Cases:
 * [1,2,3,3], [3] => [1,2]
 * [], [4,5] => []
 * [1,2], [3,4] => [1,2]
 * [1,2] [] => [1,2] 
 * 
 * Logic:
 * do our check to see if either a or b is empty
 *  if empty return a 
 * 
 * loop through a (filter)
 *  if current index is included in b 
 *      get rid of this index 
 * 
 * return the array
 * 
 */



export function arrayDiff(a: number[], b: number[]): number[] {
    if(a.length === 0 || b.length === 0) return a;

    const result:number[] = a.filter((num) => {
        if (!b.includes(num)) return true;
    })

    return result 
}


/**
 * Original answer below 
 * 
 * Background Info:
 * All the tests were working except in the case where I needed to keep a 0
 * 
 * Example:
 * a => [1,0,3]
 * b=> [1]
 * 
 * my outcome => [3] aka not correct
 * should be => [0,3]
 * 
 * The main issue:
 * Returning just the num was the issue 
 * Issue was that when returning a 0, javascript is returning a falsey value which
 * is not returned into the result array from the filter, only truthy values are returned  
 * 
 * Instead I should have returned true inside that statement because any conditional 
 * that is met and returned as true will be put inside the new array
 */

// export function arrayDiff(a: number[], b: number[]): number[] {
//     if(a.length === 0 || b.length === 0) return a

//     const result:number[] = a.filter((num) => {
//         if (!b.includes(num)) return num;
//     })

//     return result 
// }
