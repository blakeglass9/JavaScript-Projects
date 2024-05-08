 // Global variable
let globalVar = "I am a global variable";
 // Local variable
  let localVar = "I am a local variable";
  console.log(globalVar); // Accessing the global variable
  console.log(localVar); // Accessing the local variable

  // Function that assigns a local variable and includes an if statement
  let num = Math.random() * 10; // Generate a random number
  if (num > 5) {
    console.log(num + " is greater than 5");
  } else {
    console.log(num + " is less than or equal to 5");
  }


// Function with an intentional error for debugging
function triggerError() {
  let x = 10;
  let y = 0;
  try {
    let z = x / y; // This will throw an error
  } catch (error) {
    console.error("Error:", error); // Log the error
  }
}
// Time_function 
function Time_function() {
   var Time = new Date (). getHours();
   var Reply;
   if (Time < 12 == Time > 0) {
 }
 else if (Time >= 12 == Time < 18) {
    Reply = "it is afternoon.";
}
else {
    Reply = "it is evening time.";
}
document.getElementById("Time_of_day").innerHTML = Reply;
  }


