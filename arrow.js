// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const add = (num1, num2) => num1 * num2;

const doMath = ( x, y ) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
} 


const result3 = doMath(7, 5);
console.log(result3);


const give5 = () => 5;
const result2 = give5();
console.log(result2); 

const result = add (5, 10);
console.log(result);