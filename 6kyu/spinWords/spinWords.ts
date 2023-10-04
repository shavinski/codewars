"use strict"

/**
 * Goal: reverse words that have length greater than 5 
 * 
 * input: long string of words
 * output: long string of words and potential flipped words 
 * 
 * Test Cases:
 * "Welcome" => "emocleW"
 * "Hey fellow warriors" => "Hey wollef sroirraw"
 * 
 * Logic:
 * need to get the string, turn into an array of strings 
 * have a new empty array to hold strings 
 * 
 *  loop through our array of strings
 *     variable called reverse, is an array
 * 
 *     if current word length in loop is greater than or equal to 5
 *       loop backwards through this string and create a new word 
 *       push the backwards letters into reverse array 
 * 
 *     if reverse variable is not empty array
 *          push this onto our result array and join the array
 *          make reverse an empty array again 
 * 
 *     push the current string onto result array 
 * 
 * after loop completes 
 * return our new array and join the strings together with a space 
 *     
 */

function spinWords(string:string) { // "Welcome"
    const result:Array<string> = [];                   // ["emocleW"]
    const words:Array<string> = string.split(' ');      // ['Welcome']

    for (let word of words) {           // ["Welcome"]
        let reversedWord:Array<string> = [];          // ["e", "m", "o", "c", "l", "e", "W"]
 
        if (word.length >= 5) {
            for (let i = word.length - 1; i >= 0; i--) {
                reversedWord.push(word[i])
            }
        }

        if (reversedWord.length > 0) {        // true
            result.push(reversedWord.join(''));  // "emocleW"
            reversedWord = [];                   
        } else {
            result.push(word);
        }
    }

    return result.join(' ');
}

export default spinWords;
