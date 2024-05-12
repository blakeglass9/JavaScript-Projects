// Function that utilizes a while loop
function whileLoopFunction() {
    let i = 0;
    let result = '';
    while (i < 5) {
      result += i + ' ';
      i++;
    }
    return result;
  }
  
  // Function that utilizes a for loop
  function forLoopFunction() {
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += i + ' ';
    }
    return result;
  }
  
  // Function that utilizes an array
  function arrayFunction() {
    let array = ['apple', 'banana', 'cherry'];
    let result = '';
    for (let i = 0; i < array.length; i++) {
      result += array[i] + ' ';
    }
    return result;
  }
  
  // Creating an object using the "let" keyword
  let myObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'
  };
  
  // Displaying the output
  document.getElementById('output').innerHTML = `
    <p>While Loop Function: ${whileLoopFunction()}</p>
    <p>For Loop Function: ${forLoopFunction()}</p>
    <p>Array Function: ${arrayFunction()}</p>
    <p>Object: ${JSON.stringify(myObject)}</p>
  `;
  