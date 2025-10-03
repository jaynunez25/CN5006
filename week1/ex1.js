//NEW EXERCISE 
const prompt = require('prompt-sync')();
console.log ("starting")
const number1  =  parseInt(prompt('enter your first number :  '));
const number2 =  parseInt (prompt('enter your second number:  '));
const op = prompt('pls enter the operation you want to perform (+ - / *): ');

// conditional 

if (op == '+') 
{console.log(number1 + number2)

}
 
else if (op =='-') {
    console.log(number1 - number2)
}

else if (op =='/') {
        console.log(number1 / number2)
    }

else {
    console.log(number1 * number2);

};