/**
  have a object to contain the key values to keep track of counts
  have a variable to track occurances 
  
  loop through text 
    see if this exist in the object 
      case insensitive, change into lowercase 
      if it doesnt exist add it 
      if it does add one 
      
  loop through object
    check each value that is greater than one
      if it is 
        add to our tracker 
        
  return tracker 
*/

function duplicateCount(text) {
    //...
    const letterCache = {};
    let duplicates = 0;

    for (let char of text) {
        const charLowerCase = char.toLowerCase();
        console.log(charLowerCase)

        if (charLowerCase in letterCache) {
            letterCache[charLowerCase] += 1;
        } else {
            letterCache[charLowerCase] = 1;
        }
    }

    console.log(letterCache)
    for (let key in letterCache) {
        if (letterCache[key] > 1) duplicates++;
    }

    return duplicates;
}