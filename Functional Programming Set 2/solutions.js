// // Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.
// const people = [
//   { name: "Raj", age: 28 },
//   { name: "Swapnil", age: 42 },
//   { name: "Anushka", age: 35 },
// ];

// // Your code here
// const newArr = people.map((data) => data.name);
// console.log(newArr); // Output: ['Raj', 'Swapnil', 'Anushka']

// 2. Given an array, write an ES6 function to return a new array with all the elements multiplied by 5.

// const numbers = [1, 2, 3, 4];
// // Your code here
// const newArr = numbers.map((data) => data * 5);
// console.log(newArr); // Output: [5, 10, 15, 20]

// Given employee’s data, write an ES6 function which greets them with a personalized message for onboarding.
// const employeeData = [
//   { name: "ram", dept: "marketer" },
//   { name: "Radha", dept: "SDE" },
//   { name: "shyam", dept: "finance professional" },
// ];

// // Your code here

// const newArr = employeeData.map(
//   (data) => `Hi ${data.name} we are glad to have you as a ${data.dept}`
// );
// console.log(newArr);
// // Output: ['Hi ram we are glad to have you as a marketing', 'Hi Radha we are glad to have you as a SDE', 'Hi shyam we are glad to have you as a finance professional']
// Write an ES6 function that takes an array of objects representing books and returns an array with only the titles of each book.
// const books = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
//   { title: "To Kill a Mockingbird", author: "Harper Lee" },
//   { title: "1984", author: "George Orwell" },
//   { title: "Pride and Prejudice", author: "Jane Austen" },
// ];

// // Your code here

// const titles = books.map((data) => data.title);

// console.log(titles); // Output: ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'Pride and Prejudice']
// Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.
// const studentName = [
//   "Ram",
//   "Anjali",
//   "Arpit",
//   "Bhanu Kumar",
//   "Jaya",
//   "Ankit",
//   "shayam",
// ];
// // Your code here
// const studentNames = studentName.filter((data) => data[0] === "A");

// console.log(studentNames);
// // Output: ["Anjali", "Arpit", "Ankit"]
// Write an ES6 function which filters out the products which have a price greater than 40.
const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
// // Your code here
// const getProducts = productData.filter((data) => data.price > 40);

// console.log(getProducts);
// // Output: [{prodName: 'Dairy Milk Silk', price: 70}, {prodName: 'Mars', price: 50}]
// Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.
// const numbers = [1, 2, 3, 21, 14, 7];
// // Your code here
// const isDivisibleBy7 = numbers.find((data) => data % 7 === 0);

// console.log(isDivisibleBy7);
// // Output: 21
