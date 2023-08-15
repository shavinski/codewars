/**
 * input: arr of nums
 * output: string 
 * 
 * Test Cases:
 * Array will always be 10 length 
 * Guaranteed only numbers 
 * 
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => "(123) 456-7890"
 * 
 * Logic:
 * 
 * create a variable to store first part of number 
 * create a variable to store second part of number 
 * create a variable to store third part of number 
 * 
 * loop through the number array
 *      check if first part of number length is not 3 
 *          push num into first portion 
 *      check if second part of number length is not 3 
 *          push num into second portion 
 *      check if third part of the number lenght is not 4 
 *          push num into third portion 
 * 
 * 
 * create a variable and join together first portion array
 * create a variable and join together second portion array
 * create a variable and join together third portion array
 * 
 * return template literal with number format 
 *        
 */


export function createPhoneNumber(numbers: number[]): string {
    const firstPortion:number[] = [];
    const secondPortion:number[] = [];
    const thirdPortion:number[] = [];

    for(let num of numbers) {
        if (firstPortion.length !== 3) {
            firstPortion.push(num);
        } else if (secondPortion.length !== 3) {
            secondPortion.push(num);
        } else {
            thirdPortion.push(num);
        }
    }

    const firstToString:string = firstPortion.join('');
    const secondToString:string = secondPortion.join('');
    const thirdToString:string = thirdPortion.join('');

    return `(${firstToString}) ${secondToString}-${thirdToString}`
}