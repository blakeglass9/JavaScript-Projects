// Create a dictionary TERM 
function my_Dictionary () {
var dictionary = {
    "Fruit": "Apple",
    "Meat": "Steak",
    "Vegetable": "carrot",
    "Age": "1 million",
    "Sound": "Flip!"
  };
  delete dictionary.Sound;
  document.getElementById("Dictionary").innerHTML = dictionary.Sound;
}

  
 