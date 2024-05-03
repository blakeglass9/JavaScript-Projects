function updateElement() {
    // Get the element with id "output"
    var outputElement = document.getElementById("output");

    // Assign values to two variables
    var sent1 = "Hello";
    var sent2 = "world!";

   // Concatenate the two variables using +=
    sent1 += sent2;

    // Update the content of the output element
    outputElement.textContent = result;
}
