/** 
 * REPLIT Coding Challenge for Job
 * 
  Goal: write a OT validation function 
  stale: string for file components  starting file 
  latest: string for latest file components  
  otjson: JSON string containing the operations 

  SHould validate the sequence of operations, when applied to stale contents, produces the latest contents, if not return false

  Logic:
  skip, you dont do anything, set the count to be the index we are working at 
    do nothing but set the cursor to the count 
  delete, want to delete the count(index) but delete everything forwards
    splice the string from the count to the end of the string 
  insert, want to insert whatever string at this count(index)
    splice the string and insert the new string inside 
*/

function isValid(stale, latest, otjson) {
    let cursorPosition = 0;
    let jsonToPojo = JSON.parse(otjson);
    let staleToArr = stale.split('');

    if (jsonToPojo.length === 0) return true;

    for (let i = 0; i < jsonToPojo.length; i++) {
        let count = jsonToPojo[i].count
        let operation = jsonToPojo[i].op
        let word = jsonToPojo[i].chars

        if (operation === 'skip') {
            if ((count + cursorPosition) > staleToArr.length) return 'false, skip past end';
            cursorPosition += count;
        }
        if (operation === 'delete') {
            if ((count + cursorPosition) > staleToArr.length) return 'false, delete past end';
            staleToArr.splice(cursorPosition, count)
        }
        if (operation === 'insert') {
            if ((count + cursorPosition) > staleToArr.length) return false;
            staleToArr.splice(cursorPosition, 0, word)
            cursorPosition += word.length - 1;
        }
    }


    return staleToArr.join('') === latest
}

export default isValid;