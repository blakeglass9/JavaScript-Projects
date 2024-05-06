// Create a dictionary TERM
var dictionary = {
    "Fruit": "Apple",
    "Meat": "Steak",
    "Vegetable": "carrot"
  };
  
  // Function to display a key value pair from the dictionary
  function displayKeyValuePair() {
    // Get a random key from the dictionary
    var keys = Object.keys(dictionary);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
  
    // Remove the key from the dictionary
    var value = dictionary[randomKey];
    delete dictionary[randomKey];
  
    // Display the key-value pair in the paragraph with id "dictionaryOutput"
    var outputElement = document.getElementById("dictionaryOutput");
    outputElement.textContent = "Key: " + randomKey + ", Value: " + value;
  }
  