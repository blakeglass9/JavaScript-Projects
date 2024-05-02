function updateElement() {
    // Get the element with id "output"
    var outputElement = document.getElementById("output");

    // Assign values to two variables
    var variable1 = "Hello";
    var variable2 = "world!";

    // Concatenate the variables
    var result = variable1 + " " + variable2;

    // Update the content of the output element
    outputElement.textContent = result;
}
