/**
 * You live in the city of Cartesia where all roads are laid out in a perfect 
 * grid. You arrived ten minutes too early to an appointment, so you decided to 
 * take the opportunity to go for a short walk. The city provides its citizens 
 * with a Walk Generating App on their phones -- everytime you press the button 
 * it sends you an array of one-letter strings representing directions to walk 
 * (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter 
 * (direction) and you know it takes you one minute to traverse one city block, 
 * so create a function that will return true if the walk the app gives you will 
 * take you exactly ten minutes (you don't want to be early or late!) and will, 
 * of course, return you to your starting point. Return false otherwise.
 */

/**
 * Goal: determine if array allows for a "ten minute walk" and returns you to your original spot 
 * 
 * input: Array of strings 
 * output: boolean
 * 
 * Test Cases: 
 * ['n','s','n','s','n','s','n','s','n','s']), true
 * ['n','s','e','w','n','s','e','w','n','s']), true
 * ['n','n','n','s','n','s','n','s','n','s']), false
 * ['w','e','w','e','w','e','w','e','w','e','w','e']), false
 * ['w']), false
 * ['n','e','w','w','e','n','s','s'] true
 * 
 * Must be exactly ten minutes, each direction is one minute and you cannot 
 * repeat directions 
 * 
 * Logic:
 * guard statement to see if the array length is not equal to ten
 * 
 * tracking variable for up and down (north +1, south -1)
 * tracking variable for left and right (east +1, west -1)
 * 
 * loop through array of strings
 *      check if current index is equal to next index
 *          return false if true
 */

function isValidWalk(walk: string[]):boolean {
    if (walk.length !== 10) return false;

    let northSouthTracker = 0; // 0
    let eastWestTracker = 0; // 0

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') northSouthTracker++;
        if (walk[i] === 's') northSouthTracker--;
        if (walk[i] === 'e') eastWestTracker++;
        if (walk[i] === 'w') eastWestTracker--;
    }

    return northSouthTracker === 0 && eastWestTracker === 0;
}

export default isValidWalk;