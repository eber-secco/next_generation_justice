// CHALLENGE 2
/**
 * Function that takes a sentence and returns an object with word frequencies.
 * @param {string} sentence - The input sentence.
 * @returns {Object} An object where keys are words and values are their count.
 */
function wordCount(sentence) {
    let result = {}; // Object to store word counts
    let words = sentence.toLowerCase().split(/\s+/); // Convert to lowercase & split into words

    words.forEach(word => {
        result[word] = (result[word] || 0) + 1; // Increment word count
    });

    return result;
}

const sentence = "The apple tree and the mango tree";
console.log(wordCount(sentence));