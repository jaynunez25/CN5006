console.log("hello World");

const num1 = 2
const num2 = 4
// add two numbers 
const sum = num1 + num2;
//display the sum 
console.log ('The sum of' + num1 + 'and' + num2 + 'is:' + sum);

const prompt = require('prompt-sync')(); //this line is essential 
console.log ("starting")
const name = prompt ('enter your name:  ');
const surname = prompt ('enter your surname:  ');
console.log (`Hello, ${name} ${surname}` );
//program that checks if the number is positive, negative ir zero 
// input fromt the user 
const number = parseInt(prompt("Enter a number  "));

//check if the number is greater than 0 
if (number > 0) {
    console.log('the number is positive');
}

//check if number is 0 
else if (number == 0) {
    console.log('The number is zero')
}


