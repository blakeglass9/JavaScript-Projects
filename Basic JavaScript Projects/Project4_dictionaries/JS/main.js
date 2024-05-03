// Create a dictionary using JavaScript objects
var dictionary = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
  };
  
  // Function to display a value from the dictionary
  function displayValue() {
    // Get a random key from the dictionary
    var keys = Object.keys(dictionary);
    var randomKey = keys[Math.floor(Math.random() * keys.length)];
  
    // Get the corresponding value for the random key
    var value = dictionary[randomKey];
  
    // Display the value in the paragraph with id "dictionary"
    document.getElementById("dictionary").innerHTML = "Key: " + randomKey + ", Value: " + value;
  }
  