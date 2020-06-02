// This is where we are capturing the element (in HTML file) so we have refrence to it here
let generateBtn = document.querySelector("#generate");

// Adding event listener to have the 'writepassword' function run when button is clicked
generateBtn.addEventListener("click", writePassword);

//These are my array variables
const abcLowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const abcUpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbolArray = ["~", "{", "|", "}", "`", "_", "^", "[", "]", "@", "?", ">", "<", "=", ";", ":", "/", ".", "-", ",", "+", "*", "(", ")", "&", "%", "$", "#"];


// This is where we will begin our password generator function
//Need to add empty string for the new generated password
//Add empty array to push all constant variables into
function writePassword() {
  let newPassword = [];
  let passwordCharacters = [];
  let passwordLength = prompt("Enter number of desired characters for password")
  let num1 = parseInt (passwordLength);
  if (num1) { //If user answers this is a string if a user doesnt answer it's null 
    if (confirm("Click 'Okay' if would you like to include lowercase letters")) {
      //Here I want to merge the two arrays (lower case array and the empty array) 
      passwordCharacters.push.apply(passwordCharacters, abcLowerArray);
    }

    if (confirm("Click 'Okay' if you would like to add UPPERCASE letters")) {
      passwordCharacters.push.apply(passwordCharacters, abcUpperArray);
    }

    if (confirm("Click 'Okay' if you would you like to add numbers (#'s)")) {
      passwordCharacters.push.apply(passwordCharacters, numberArray);
    }

    if (confirm("Click 'Okay' if you would you like to add special characters ($%*#)")) {
      passwordCharacters.push.apply(passwordCharacters, symbolArray);
    }
    console.log(typeof num1);

    for (let i = 0; i <num1; i++) {
      let genRand = Math.floor(Math.random(passwordCharacters.length));
      newPassword.push(passwordCharacters[genRand]);
      console.log(passwordCharacters[genRand])
      //password characters are added to the empty string
    }
  }
  console.log(newPassword);
}

  //this is where we need to figure out how to print password to screen after we convert the array of numbers to a string. 
  //let realNewPassword = newPassword.toString()
  //let passwordText = document.querySelector("#password");
  //passwordText.value = newPassword;








