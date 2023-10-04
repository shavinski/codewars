
/**
 * Goal is to return complementary DNA strand
 * 
 * A and T (complementary)
 * C and G (complementary)
 * 
 * input: string which is a DNA strand
 * output: string which is the complementary strand
 * 
 * Test Cases:
 * AAAA => TTTT
 * ATTGC TAACG
 * 
 * Logic:
 * loop through string 
 *  if current character is A 
 *      turn into T
 *  if current character is T
 *      turn into A
 *  if current character is C
 *      turn into G
 * if current character is G
 *      turn into C
 * 
 * return the new string
 * 
 */


function DNAStrand(dna: string) {
    let compDNA:Array<string> = [];

    for (let i = 0; i < dna.length; i++) {
        if(dna[i] === 'A') compDNA.push('T');
        if(dna[i] === 'T') compDNA.push('A');
        if(dna[i] === 'C') compDNA.push('G');
        if(dna[i] === 'G') compDNA.push('C');
    }

    return compDNA.join('');
}

export default DNAStrand;