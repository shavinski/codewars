function getCount(str) {
    let vowelCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];


    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            vowelCount++;
        }
    }

    return vowelCount;
}