// Addition function
function performAddition() {
    var result = 10 + 5;
    document.getElementById("additionResult").textContent = "Result: " + result;
  }
  
  // Subtraction function
  function performSubtraction() {
    var result = 10 - 5;
    document.getElementById("subtractionResult").textContent = "Result: " + result;
  }
  
  // Multiplication function
  function performMultiplication() {
    var result = 10 * 5;
    document.getElementById("multiplicationResult").textContent = "Result: " + result;
  }
  
  // Modulus function
  function performModulus() {
    var result = 10 % 3;
    document.getElementById("modulusResult").textContent = "Result: " + result;
  }
  
  // Increment function
  function performIncrement() {
    var i = 5;
    i++;
    document.getElementById("incrementResult").textContent = "Result: " + i;
  }
  
  // Decrement function
  function performDecrement() {
    var i = 5;
    i--;
    document.getElementById("decrementResult").textContent = "Result: " + i;
  }
  
  // Math.random() function
  function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
    document.getElementById("randomResult").textContent = "Random Number: " + randomNumber;
  }
  
  // Event listeners for each button
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("additionBtn").addEventListener("click", performAddition);
    document.getElementById("subtractionBtn").addEventListener("click", performSubtraction);
    document.getElementById("multiplicationBtn").addEventListener("click", performMultiplication);
    document.getElementById("modulusBtn").addEventListener("click", performModulus);
    document.getElementById("incrementBtn").addEventListener("click", performIncrement);
    document.getElementById("decrementBtn").addEventListener("click", performDecrement);
    document.getElementById("randomBtn").addEventListener("click", generateRandomNumber);
  });
  