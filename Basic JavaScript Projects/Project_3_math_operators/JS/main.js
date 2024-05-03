function addNumbers(num1, num2) {
    var result = num1 + num2;
    return result;
  }
  
  document.getElementById("Math").addEventListener("click", function() {
    var result = addNumbers(5, 3);
    document.getElementById("Math").textContent = "Result: " + result;
  });
  