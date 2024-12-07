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