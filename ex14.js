const input = require(`readline-sync`);
let num1 = input.questionInt("Enter a number: ");
let myArray = [];

if (num1 == 1) {
    let rndmNum = Math.floor(Math.random() * 50) + 1;
   myArray[num1 - 1] = rndmNum;
    console.log(rndmNum);
}else{
for (let i = 0; i < num1; i++) {
    let rndmNum1 = Math.floor(Math.random() * 50) + 1;
   myArray = rndmNum1;
    // console.log(rndmNum1);
    let numbers = [myArray];
numbers.sort((a, b) => (a - b));
// console.log(numbers);
console.log(`${numbers[0]} is lowest \n${numbers[num1 - 1]} is highest`);
return 0;
}
}


    