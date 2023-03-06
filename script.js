// 1. Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.

// ```jsx
// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]
// ```
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// const oddArr = arr.map((data)=>data%2===0?data+1:data);
// console.log(oddArr)
//2. Get the names in an array for only those who have a cycle.
// Your output should be: ['Tanay', 'Tanvi']
// const family = [
//   {
//     name    : 'Tanay',
//     haveCycle : true
//   },
//   {
//     name     : 'Akanksha',
//     haveCycle : false
//   },
//   {
//     name     : 'Tanvi',
//     haveCycle : true
//   },
// 	{
//     name     : 'Kanak',
//     haveCycle : false
//   }
// ];
// const getName = family.reduce((acc,curr)=>{
//   if(curr.haveCycle){
//     return [...acc,curr.name]
//   }
//   return acc;
// },[])
// console.log(getName)
// 3. Given an array. ****Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

// ```jsx
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be: [2, 6, 8, 4]
// ```
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// // const newArr = arr.filter((data)=>{
// //   if(data%2===0 && data<=8){
// //     return data;
// //   }
// // })

// console.log(newArr)
// 8. Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

// ```jsx
// const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}
// ```

// const arr = ["You", "all", "are", "rockstars"];

// const newArr = arr.reduce((acc,curr,ind)=>{
//   // console.log(curr)
//   // console.log(ind)
//   return {...acc,[ind]:curr}
// },{});
// console.log(newArr)
// 11. Given an array. Write a function to join all elements of the array with a hyphen in between them.

// ```jsx
// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red
// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
// const splitArr = arr.join("-")
// console.log(splitArr)

// 15. Flatten an array without using flat().
// const input = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'e'],
//     ['e', 'd', 'f'],
//   ];
// const newArr = input.reduce((acc,curr,ind)=>{
//   // console.log(curr.ind)
//   // console.log(ind)
//   return [...acc, ...curr]
// },[])
// console.log(newArr)
/*****************************/
// * Return an object where each property is the name of the an ice cream flavor and each value is an integer that is the total count of that flavor.
// * Store the returned data in a new iceCreamTotals variable.

// const data = [
//     { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
//     { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
//     { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
//     { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
//     { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
//     { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
// ];
// const iceCreamTotals = data.reduce((acc,curr)=>{
//   curr.favoriteIceCreams.map((iceCreamType)=>{
//     if(acc[iceCreamType]){
//       acc[iceCreamType] = ++acc[iceCreamType]
//     }else{
//       acc[iceCreamType]=1
//     }
//   })
//   return acc;
// },{})
// console.log(iceCreamTotals)
/*************************************/

// const arr = [
//   { id: 1, amount: 100 },
//   { id: 1, amount: 100 },
//   { id: 1, amount: 100 },
//   { id: 2, amount: 100 },
//   { id: 2, amount: 100 },
// ];

// const totalAmount = (a, b) => {
//   const index = a.findIndex((item) => item.id === b.id);
//   if (index === -1) {
//     return [...a, b];
//   } else {
//     a[index].amount = a[index].amount + b.amount;
//     return [...a];
//   }
// };

// console.log(arr.reduce(totalAmount, []));
