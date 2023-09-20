//task one
/*
var userNumber = +prompt('guse  a number ')
var roundNumber = Math.round(userNumber)
var floorNumber = Math.floor(userNumber)
var CeilNumber = Math.ceil(userNumber)
document.write("your number is "+userNumber+ ".<br>")
document.write("your number is "+userNumber+"after round number"+roundNumber+ ".<br>")
document.write("your number is "+userNumber+"after floor number"+ floorNumber+".<br>")
document.write("your number is "+userNumber+"after ceil  number"+ CeilNumber)
//task two
var userNumber = +prompt('guse  a number in point to check ')
var roundNumber = Math.round(userNumber)
var floorNumber = Math.floor(userNumber)
var CeilNumber = Math.ceil(userNumber)
userNumber = -userNumber
document.write("your number is "+userNumber+ ".<br>")
document.write("your number is "+userNumber+"  after round in negitive number : "+roundNumber+ ".<br>")
document.write("your number is "+userNumber+"  after floor in negitive number : "+ floorNumber+".<br>")
document.write("your number is "+userNumber+"  after ceil in negitive number : "+ CeilNumber)

//task three 
var absolute = 4
absolute = -4
document.write("absolute value is 4 is :"+absolute)
//TASK 4 
var rendomDic = Math.random()
document.write(rendomDic)
//task 5
// Generate a random number between 0 and 1
var randomValue = Math.random();

// Determine the result based on the random number
var coinResult = randomValue < 0.5 ? "Heads" : "Tails";

// Display the result in the browser
document.write("The result of the coin toss is: " + coinResult);
//task 6 
var rendomNum = Math.random();
var x = Math.floor(rendomNum*100)
document.write("RENDOM NUMBER 1 & BETWEEN 100 : "+x)
//TASK 7
// Ask the user for their weight
var userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
var weightRegex = /(\d+(\.\d+)?)/;
var match = userInput.match(weightRegex);

if (match) {
    var weight = parseFloat(match[0]);
    if (!isNaN(weight)) {
        document.write("Your weight is: " + weight + " kgs");
    } else {
        document.write("Invalid input. Please enter a valid weight.");
    }
} else {
    document.write("Invalid input. Please enter a valid weight.");
}

// //TASK 8enerate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user for input
var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's input matches the secret number
if (userInput === secretNumber) {
    document.write("Congratulations! You guessed the secret number: " + secretNumber);
} else {
    document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
}
*/