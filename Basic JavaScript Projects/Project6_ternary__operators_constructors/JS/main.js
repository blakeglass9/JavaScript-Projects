// Function using ternary operation to check if a number is even or odd
function checkNumber() {
    var userInput = document.getElementById("userInput").value;
    var result = (userInput % 2 === 0) ? "even" : "odd";
    displayResult(result);
}

// Function to display the result in the HTML element with id "result"
function displayResult(result) {
    document.getElementById("result").innerHTML = "The number is " + result + ".";
}

// Constructor function that uses the "new" and "this" keywords
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Function to display the results of the constructor function within an HTML element
function displayPerson() {
    var person = new Person("John", 30);
    document.getElementById("result").innerHTML = "Name: " + person.name + ", Age: " + person.age;
}

// Nested function example
function outerFunction() {
    var outerVariable = "I'm outer!";
    
    function innerFunction() {
        var innerVariable = "I'm inner!";
        console.log(outerVariable); // Access outer variable
        console.log(innerVariable); // Access inner variable
    }

    innerFunction(); // Call inner function
}

// Call displayPerson function to display the result
displayPerson();
