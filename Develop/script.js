// variables with arrays 
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charArr = ["`","~","!","@","#","$","%","^","&","*","(",")","_","-","+","=","[","]","{","}","|",";",":","'","?","<",">"];
var numArr = ["0","1","2","3","4","5","6","7","8","9"];
var characterLength ;
var choiceArr = [];
var basket = "";

  // generator button with add event listener 
  var generateBtn = document.querySelector("#generate");

  generateBtn.addEventListener("click", writePassword);
  // Write password to the #password input
  function writePassword() {
      var passwordNew = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = passwordNew;
  } 
    // generate password function with for loop
    function generatePassword() {
      basket = "";
      choiceArr = [];
      getPrompts();
      for (i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        var randomChar = choiceArr[randomIndex];
        basket += randomChar;
        }
        return basket;
  }

    // Character Length
  function getPrompts() {
    choiceArr = [];

    characterLength = parseInt(prompt("Select character length between 8-128."));

    if(isNaN(characterLength) || characterLength >= 129 || characterLength <= 7){
      window.alert("Incorrect amount of characters. Please select different amount.");
      return false;
    }
    else if(characterLength >= 8 || characterLength <= 128){
      window.alert("This password will include " + characterLength + " characters.");
    }
    
    var upperCaseArr = window.confirm("Would you like to include uppercase letters?");
    if (upperCaseArr){
    window.alert("Uppercase letters included.");
    } else if(!upperCaseArr){
      window.alert("Zero uppercase letters included.");
    }
var lowerCaseArr = window.confirm("Would you like to include lowercase letters?");
    if (lowerCaseArr){
    window.alert("Lowercase letters included.");
    } else if(!lowerCaseArr){
    window.alert("Zero lowercase letters included.");
    }
var charArr = window.confirm("Would you like to include special characters?");
    if (charArr){
    window.alert("Special characters will be included.");
    }else if(!charArr){
    window.alert("Zero characters will be included.");
    }
var numArr = window.confirm("Would you like to include numbers?");
    if (numArr){
      window.alert("Numbers will be included.");
    }else if(!numArr){
      window.alert("Zero numbers will be included.");
    }
  if (!upperCaseArr && !lowerCaseArr && !charArr && !numArr){
  window.alert("One or more of the previous options must be included with in your password.");
  return false;
  }
};