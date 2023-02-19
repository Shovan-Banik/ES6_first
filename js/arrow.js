// function declaration 
function sum(a,b){
    return a+b;
}
// function expression with function name
const add=function sum(a,b){
    return a+b;
}
// function expression with function name
const sub=function(a,b){
    return a-b;
}
// arrow function
const mul=(a,b)=>a*b;
const result=mul(5,6);
console.log(result);
