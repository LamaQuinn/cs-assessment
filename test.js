function sumZero(arr){

    for (let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===0){
                return true
            }
        }
    }
    return false
}
console.log(sumZero([1, 2, 3,-2])); //O(n^2)

function hasUniqueChars(word) {
    const charSet = {};
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (charSet[char]) {
            return false;
        }
        charSet[char] = true;
    }
    return true;
}

console.log(hasUniqueChars("Monday"));  // O(n)
console.log(hasUniqueChars("Moonday")); 


const isPangram = (sentence) => new Set(sentence.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); //O(n)
console.log(isPangram("I like cats, but not mice")); 


const findLongestWord = (words) => words.reduce((max, word) => Math.max(max, word.length), 0);
const words = ["hi", "hello", "longestword", "test"];
const longest = findLongestWord(words);
console.log(longest); //O(n)


