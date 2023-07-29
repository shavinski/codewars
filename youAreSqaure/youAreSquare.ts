/**
 * Goal: determine if an integral number is a square number
 * 
 * input: number 
 * output: number 
 * 
 * Test Cases: 
 * -1 => false
 *  0  =>  true
 *  3  =>  false
 *  4  =>  true
 *  25  =>  true
 *  26  =>  false
 *  
 * 
 * Logic:
 * sqaure root the number to see if we get an integer vs a non int and return 
 * 
 * Other Logic:
 * make a loop, go until we reach the input num
 *     if guard, 
 *          if the num * num is greater than input then return false
 *     else if 
 *         if num * num is equal to input, return true
 *     else 
 *      increase our loop
 *     
 */


export function isSquare(n: number): boolean {
    const root = Math.sqrt(n);
    return Number.isInteger(root);
};

export function isSquare2(n: number): boolean {
    for (let i = 0; i <= n; i++) {
        let squaredNum: number = i * i;
        if (squaredNum === n) return true;
        if (squaredNum > n) return false;
    }

    return false;
}
