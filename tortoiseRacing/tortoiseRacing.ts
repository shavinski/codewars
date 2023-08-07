/**
 * Goal: find out how long it takes for the racer to catch up 
 * 
 * input: v1: number(feet per hour), v2: number(feet per hour), g: number(head start) 
 * output: array [hours, minutes, seconds]
 * 
 * Test Cases: 
 * v1: 720, v2: 850, g: 70 => [0, 32, 18]
 * v1: 800 v2:750 => null (v1 must be slower)
 * 
 * Logic: 
 * guard statement to check v1 is less than v2
 * 
 * distance for v1 set to g(lead)
 * distance for v2 set to 0
 * array to keep track of hours minutes seconds 
 * 
 * while v1 position > v2 position
 *      add v1/60 = feet per second to v1 distance 
 *      v2/60 = feet per second  to v2 distance 
 *      
 *      if the time array at index 2 is not equal to sixty
 *          keep adding one everytime
 *      if time array at index 2 is equal to sixty 
 *          restart array at index 2 to 0 
 *          if array at index 1 is sixty
 *              restart array at index 1 to 0
 *              add one to array at index 0
 *      
 * return our array of time 
 */


export const race = (v1: number, v2: number, g: number) => {
    if (v1 >= v2) return null;

    const time = [0, 0, 0]
    let v1Distance: number = g;
    let v2Distance: number = 0;

    while (v2Distance < v1Distance) {

        
        if (time[2] !== 60) {
            time[2] += 1;
        };
        
        if (time[2] === 60) {
            time[2] = 0;
            time[1] += 1;
            time[1] += 1;
        }
        
        if (time[1] === 60) {
            time[1] = 0;
            time[0] += 1;
        }
        console.log('v1', v1Distance, 'v2', v2Distance);
        console.log('time', time);

        v1Distance += Math.floor((v1 / 60)/60);
        v2Distance += Math.floor((v2 / 60)/60);
    }

    return time;
} 