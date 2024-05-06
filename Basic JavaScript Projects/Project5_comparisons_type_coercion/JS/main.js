// Define a dictionary object
let dictionary = {
    "apple": "A fruit",
    "banana": "Another fruit",
    "carrot": "A vegetable"
};

// Function to display a random key-value pair from the dictionary
function displayRandomPair() {
    // Get a random key from the dictionary
    let keys = Object.keys(dictionary);
    let randomKey = keys[Math.floor(Math.random() * keys.length)];

    // Get the value corresponding to the random key
    let value = dictionary[randomKey];

    // Remove the key from the dictionary
    delete dictionary[randomKey];

    // Display the key-value pair in an HTML element
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = randomKey + ": " + value;
}

// Display a random key-value pair when the page loads
displayRandomPair();
