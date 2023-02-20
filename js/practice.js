/* 
problem:1
const sum=(num1,num2,num3)=>num1+num2+num3;
const result=sum(20,30,50);
console.log(result);
 */


/* problem:2
const multipleLine=`I am a web developer
I love to code
I love to eat kacci biriyani
`
console.log(multipleLine); */


/* problem:3
const add=(num1=0,num2=10)=>num1+num2;
const result=add(10);
console.log(result); */

// problem:4
// const friendNameLength=(friends)=>{
//      let newFriend=[];
//     for(let friend of friends){
//         if(friend.length%2==0){
//             newFriend.push(friend);
//         }
//     }
//     return newFriend;
// }
// const friends=['abul','babul','peba','boba','mirza'];
// const result=friendNameLength(friends);
// console.log(result);

// problem:5
// const doMath=(numbersArray)=>{
//     let newArray=[];
//     let sum=0;
//     let avg=0;
//     for(let number of numbersArray){
//         const value=number*number;
//         newArray.push(value);
//         sum=sum+value;
//     }
//     avg=sum/newArray.length;
//     return avg;
// }
// const numbers=[2,3,5];
// const result=doMath(numbers);
// console.log(result.toFixed(2));


const maximum=(array1,array2)=>{
    let newArray=[...array1,...array2];
    const big=Math.max(...newArray);
    return big;
}
const firstArray=[10,20,30];
const secondArray=[40,50,60];
const result=maximum(firstArray,secondArray);
console.log(result);




