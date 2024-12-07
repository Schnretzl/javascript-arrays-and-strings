// 1. Exploring Array Manipulation in JavaScript
// Task 1: Adding and Removing Elements

let fruits = ['apple', 'banana', 'orange'];
fruits.push('cherry');
console.log("Push: ", fruits);
fruits.pop();
console.log("Pop: ", fruits);

// Task 2: Sorting Arrays

let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b);
console.log("Sorted: ", numbers);

// Task 3: Applying Array Methods

let doubled = numbers.map(x => x * 2)
console.log("Map: ", doubled);
let filtered = numbers.filter(x => x % 2 !== 0);
console.log("Filter: ", filtered);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce: ", sum);

//----------------------------------------------------------------

// 2. Exploring String Manipulation in JavaScript
// Task 1: Obtaining String Length - Create a string with some text content. - Use the `length` property to obtain the length of the string.

let text = "Hello, World!";
console.log("Length: ", text.length);

// Task 2: Converting Cases - Create a string with mixed-case content. - Use the `toUpperCase` method to convert the string to uppercase. - Use the `toLowerCase` method to convert the string to lowercase. 

console.log("Uppercase: ", text.toUpperCase());
console.log("Lowercase: ", text.toLowerCase());

// Task 3: Extracting Substrings - Create a string with some text content. - Use the `substring` method to extract a substring from the original string.

let sentence = "The quick brown fox jumps over the lazy dog";
let substring = sentence.substring(10, 25);
console.log("Substring: ", substring);

// Task 4: Splitting Strings - Create a string containing multiple words separated by spaces. - Use the `split` method to split the string into an array of words based on the space delimiter.

console.log("Split: ", sentence.split(" "));