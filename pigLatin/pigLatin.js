/**
Logic:

Turn the string into an array

loop through the array of words 
  for the word 
    remove the first character
    add ay to the end of the word

return the array and make it a string 
*/

function pigIt(str) {
    //Code here
    const words = str.split(' ');
    const regex = /[a-zA-Z]/

    for (let i = 0; i < words.length; i++) {

        let match = words[i].match(regex);

        if (match) {
            let wordArr = words[i].split('');
            const beginningLetter = wordArr.shift();

            wordArr.push(beginningLetter, 'a', 'y');
            words[i] = wordArr.join('');
        };

    }

    return words.join(' ');
}