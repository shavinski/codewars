
/**
 * Goal: square each individual number and return the number of all squared numbers 
 * 
 * input: num
 * output: num 
 * 
 * Test Cases: 
 * 9119 => 811181
 * 765 => 493625
 * 
 * Logic:
 * need to convert our input number into a string
 * empty string that will hold the squared values as strings
 * 
 * loop through our numToString
 *  add the square of the number onto the string variable
 * 
 * return string convert to back to number
 */

function squareDigits(num:number) {
    const numToString:string = num.toString();
    let result:string = '';

    for (let num of numToString) {
        let value = Math.pow(Number(num), 2)
        result += value.toString();
    }

    return Number(result);
}

export default squareDigits;
