/**
Logic: 

have an array to store result 

Need to loop through our iterable input 
  
  check current element if it is equal to the last element in stack
    if it is the same
      do nothing
    if it is different push onto the results array
      we push the current element onto the result 
  
  return result 
*/


let uniqueInOrder = function (iterable) {
    const uniqueResults = [];

    for (let el of iterable) {

        if (el !== uniqueResults[uniqueResults.length - 1]) {
            uniqueResults.push(el);
        }

    }

    return uniqueResults;
}