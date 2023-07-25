"use strict"

/**
 * Goal: Take in string, return new string with all vowels gone 
 * 
 * input: string
 * output: string no vowels
 * 
 * Test Cases: 
 * Nice one awesome ===> Nc n wsm
 * 
 * Logic:
 *  array bank for vowels 
 *  get original string turn into a array
 *  have an empty array called results 
 * 
 * loop through the array (from a string)
 *      if current character is not a vowel 
 *          push this char onto result array
 * 
 * return result array and join and turn into a string 
 */

function disemvowel(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const stringToArr = string.split('');    
    const resultArr = [];                   // ['N','c',' ','n',' ','w','s','m']

    for (let char of stringToArr) {           
        let charLower = char.toLowerCase();   // m

        if (!vowels.includes(charLower)) {  
            resultArr.push(char);            // push m
        }
    }

    return resultArr.join('').toString();
}