// Task №3
// Implement a function that returns only unique words in the string, all words are separated only by space. The order of the returned words is not important.
//
//     Test examples:
//     getUniqueWords(“easy come easy go”) -> “easy come go”
// getUniqueWords(“first things first”) -> “first things”
// getUniqueWords(“”) -> “”

const getUniqueWords = (str) => {
    let words = str.split(' ');
    let uniWords = new Set;
    for (let word of words) {
        uniWords.add(word);
    }
    return ([...uniWords].join(' '));
};

console.log(getUniqueWords(`easy come easy go`));
console.log(getUniqueWords(`first things first`));
console.log(getUniqueWords(``));
console.log(getUniqueWords(`:) right coder should code the right code :)`));
