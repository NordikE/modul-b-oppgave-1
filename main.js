/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

let petName = "Emma";
let ownerName = "Erik";
console.log(petName + " gets walked by " + ownerName);

let names = [ownerName, petName];
console.log(names);

let creatureA = [petName, 2010, "dog"];
let creatureB = [ownerName, 1977, "human"];

const ageA = 2023 - creatureA[1];
console.log(ageA);
const ageB = 2023 - creatureB[1];
console.log(ageB);

console.log("------------");

let firstNum = 3;
let secondNum = 4;

console.log("The initial numbers are " + firstNum + " and " + secondNum);

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

let numSum = firstNum + secondNum;
let numDiff = firstNum - secondNum;
console.log(numSum + " is the sum of " + firstNum + " and " + secondNum);
let numProd = firstNum * secondNum;
console.log(numProd);
let numFrac = firstNum / secondNum;
console.log(numFrac);

++firstNum;
console.log(firstNum + " has been incrememnted by one");

firstNum = --firstNum;
console.log(firstNum + " has been decreased by one");

firstNum += numProd;
console.log(firstNum + " has been increased by " + numProd);

firstNum -= numFrac;
console.log(firstNum + " has been drecreased by " + numFrac);

secondNum += firstNum;
console.log(secondNum + " has been increased by " + firstNum);

let checkNums = firstNum > 3.5;
console.log(checkNums);

if (firstNum > 3.5) {
  console.log(firstNum + " is greater than 3.5");
} else {
  console.log(firstNum + " is smaller than 3.5");
}

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

console.log("---------");

let userName = "Erik";
let userAge = 46;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "www.snus.com";

let NotOldEnough = userAge <= 18;

if (userName == "") {
  console.log("Please fill in your username");
}

if (NotOldEnough) {
  console.log("You are not old enough!");
}

if (userIsBlocked) {
  console.log("You are blocked!");
}

if (userName == "" || NotOldEnough || userIsBlocked) {
  userIsLoggedIn = false;
} else {
  userIsLoggedIn = true;
}

if (userIsLoggedIn) {
  console.log("Please come in!");
} else {
  console.log("You can not pass!");
}

//your code here

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/
console.log("----------");

const userMale = true;
let userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);

const userGender = "non-binary";
switch (userGender) {
  case "male":
    userTitle = "Mr.";
    break;
  case "female":
    userTitle = "Mrs.";
    break;
  case "non-binary":
    userTitle = "Other";
    break;
}

console.log(userTitle);

//your code here
