const products = [
  { name: "Shirt", price: 20, quantity: 2 },
  { name: "Pants", price: 30, quantity: 1 },
  { name: "Shoes", price: 50, quantity: 1 },
  { name: "Hat", price: 10, quantity: 3 },
];

const getTotalCost = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(getTotalCost);
