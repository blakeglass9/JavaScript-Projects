// Define a variable
var myVariable = 42;

// Use document.write() and typeof to display the data type of the variable
document.write("The data type of myVariable is: " + typeof myVariable + "<br>");

// Write an expression combining a string and a number
var myString = "The answer is: ";
document.write(myString + myVariable + "<br>");

// Define two variables for comparison
var num1 = 5;
var num2 = 10;

// Use various operators and display the results
document.write("num1 == num2: " + (num1 == num2) + "<br>"); // Equal to operator (false)
document.write("num1 === num2: " + (num1 === num2) + "<br>"); // Strict equal to operator (false)
document.write("num1 > num2: " + (num1 > num2) + "<br>"); // Greater than operator (false)
document.write("num1 < num2: " + (num1 < num2) + "<br>"); // Less than operator (true)
document.write("num1 && num2: " + (num1 && num2) + "<br>"); // Logical AND operator (10)
document.write("num1 || num2: " + (num1 || num2) + "<br>"); // Logical OR operator (5)
document.write("!num1: " + (!num1) + "<br>"); // Logical NOT operator (false)
