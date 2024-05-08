// Concatenation function
function concatenateStrings() {
    let str1 = "Hello";
    let str2 = "World";
    let result = str1.concat(" ", str2);
    document.getElementById("concatResult").innerText = result;
  }
  
  // Slice function
  function sliceString() {
    let str = "Hello, World!";
    let result = str.slice(7, 12);
    document.getElementById("sliceResult").innerText = result;
  }
  
  // toString function
  function numberToString() {
    let num = 12345;
    let result = num.toString();
    document.getElementById("toStringResult").innerText = result;
  }
  
  // toPrecision function
  function precisionNumber() {
    let num = 3.14159265359;
    let result = num.toPrecision(5);
    document.getElementById("precisionResult").innerText = result;
  }
  