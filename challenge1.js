// CHALLENGE 1

/**
 * Function that takes an array of numbers and returns a new array
 * where each element is doubled, but only if the element is positive.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number[]} A new array with positive numbers doubled.
 */
function doublePositiveNumbers(numbers) {
    return numbers.map(num => num > 0 ? num * 2 : num);
}

const numbers = [1, -2, 3, 4, 5];
console.log(doublePositiveNumbers(numbers));