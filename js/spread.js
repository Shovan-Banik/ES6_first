const max=Math.max(1,24,2,242425,6262)
// console.log(max);
const numbers=[32,43,54,24];
const big=Math.max(...numbers);
// console.log(big);
const number2=[...numbers];
const number3=[144,200,...numbers,203,303]
numbers.push(100);
number2.push(50);
console.log(numbers);
console.log(number2);

console.log(number3);

