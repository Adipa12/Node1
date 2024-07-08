const crypto = require('crypto') // Import the crypto module

const args = process.argv.slice(2); // Get command line arguments

// Check if there are at least two arguments (operation and numbers)
if(args.length <1){
    console.log('Usage: node calcy.js <operation> [numbers...] ');
    process.exit(1);
}
const operation = args[0];
const numbers = args.slice(1).map(Number);

switch(operation){
    case 'add':
        if(numbers.length <2){
            console.log('Addition requires at least two numbers.');
        }
        else{
            console.log('Result: ',numbers.reduce((a,b)=> a+b ,0 ));
        }
        break;
    case 'sub':
        if(numbers.length <2){
            console.log('Subtraction requires at least two numbers.');
        }
        else{
            console.log('Result: ',numbers.reduce((a,b)=> a-b));
        }
        break;
    case 'mul':
        if (numbers.length < 2) {
            console.log('Multiplication requires at least two numbers.');
        }
        else{
            console.log('Result: ',numbers.reduce((a,b)=> a*b,1));
        }
        break;
    case 'divide':
        if (numbers.length < 2) {
            console.log('Division requires at least two numbers.');
        } else {
            console.log('Result:', numbers.reduce((a, b) => a / b));
        }
        break;
    case 'sin':
        if(numbers.length !==1){
            console.log('Sine function requires exactly one number.');
        }
        else{
            console.log('Result: ',Math.sin(numbers[0]));
        }
        break;
    case 'cos':
        if (numbers.length !== 1) {
            console.log('Cosine function requires exactly one number.');
        } else {
            console.log('Result:', Math.cos(numbers[0]));
        }
        break;
    case 'tan':
        if (numbers.length !== 1) {
            console.log('Tangent function requires exactly one number.');
        } else {
            console.log('Result:', Math.tan(numbers[0]));
        }
    break;  
    case 'random':
        if(numbers.length !==1){
            console.log('Provide length for random number generation.');
        } 
        else{
            const length = numbers[0];
            const randomValue = crypto.randomBytes(length).toString('binary');
            console.log('Random Value:', randomValue);
        }
        break;
        default :
        console.log('Invalid operation');
}

