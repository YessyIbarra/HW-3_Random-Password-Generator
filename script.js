// This is where we are capturing the element (in HTML file) so we have refrence to it here
let generateBtn = document.querySelector("#generate");

// Adding event listener to have the 'writepassword' function run when button is clicked
generateBtn.addEventListener("click", writePassword);
//These are my array variables
const abcLowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v", "w", "x","y","z"];
const abcUpperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V", "W", "X","Y","Z"];
const numberArray = ["0","1","2","3","4","5","6","7","8","9"];
const symbolArray = ["~","{","|","}","`","_","^","[","]","@","?",">","<","=",";",":","/",".","-",",","+","*","(",")","&","%","$","#"];


// This is where we will begin our password generator function
//Need to add empty string for the new generated password
//Add empty array to push all constant variables into
function writePassword() {
  let newPassword = "";
  let passwordCharacters = [];
  let passwordLength = prompt("Enter number of desired characters for password")
  if (passwordLength <8 || passwordLength>128) {
    alert("Password must be greater than 8 characters and less than 128 characters")
  }
  else {
    if (confirm("Click 'Okay' if would you like to include lowercase letters")) {
//Here I want to merge the two arrays (lower case array and the empty array) 
      Array.prototype.push.(passwordCharacters, abcLowerArray);
    }


    if (confirm("Click 'Okay' if you would like to add UPPERCASE letters")) {

    }

    if (confirm("Click 'Okay' if you would you like to add numbers (#'s)")) {

    }

    if (confirm("Click 'Okay' if you would you like to add special characters ($%*#)")) {


    }
  }
//this is where we will write the code to be executed -YI
  let password = generatePassword();



//this will print the password to screen -YI
  let passwordText = document.querySelector("#password");
  passwordText.value = password;

}



//## Acceptance Criteria

//```
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password - done 
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password

//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters

//WHEN prompted for character types to include in the password
//THEN I choose lowercase, 
//uppercase, 
//numeric, 
//and/or special characters  (I will probably use the || and && here)

//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered

//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
