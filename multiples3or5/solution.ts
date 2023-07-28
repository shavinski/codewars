
/**
 * Goal return sum of all multiples of 3 or 5 below the number passed in
 * 
 * input: number 
 * output: number (sum)
 * 
 * Test Cases:
 * if negative input return 0
 * input => -1, should return 0
 * input => 10, should return => 3 + 5 + 6 + 9 => 23
 * input => 15, should return => 15 + 12 + 10 + 9 + 6 + 5 + 3 => 60 
 * 
 * Logic:
 * guard statement if num is negative return 0
 * 
 * keep track of sum using variable, set to 0
 * 
 * we will loop until we hit the input number and then exit 
 *  if current number is divisble by 3 or 5     
 *      add to our current sum 
 * 
 * return sum
 */


function solution(number: number) {
    if (number < 0) return 0;

    let sum:number = 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

export default solution;