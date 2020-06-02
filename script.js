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
// Vision is to take all possible options and merge them into an empty array

//Begin Function
function writePassword() {
  let newPasswordArray = [];
  let passwordCharacters = [];
  let passwordLength = prompt("Enter number of desired characters for password")
  let num1 = parseInt (passwordLength);
  if (num1) { //If user answers this is a string if a user doesnt answer it's null 
    if (num1 < 8 || num1 > 128) {  
      alert("Just stop bro");
    }
    else{ 
    if (confirm("Click 'Okay' if would you like to include lowercase letters")) {

      passwordCharacters.push.apply(passwordCharacters, abcLowerArray); //Here I want to merge the two arrays (lower case array and the empty array) 
      console.log(passwordCharacters);
    }

    if (confirm("Click 'Okay' if you would like to add UPPERCASE letters")) {
      passwordCharacters.push.apply(passwordCharacters, abcUpperArray);
      console.log(passwordCharacters);
    }

    if (confirm("Click 'Okay' if you would you like to add numbers (#'s)")) {
      passwordCharacters.push.apply(passwordCharacters, numberArray);
      console.log(passwordCharacters);
    }

    if (confirm("Click 'Okay' if you would you like to add special characters ($%*#)")) {
      passwordCharacters.push.apply(passwordCharacters, symbolArray);
      console.log(passwordCharacters);
    }
    console.log(typeof num1);
    console.log(passwordCharacters);

    if (passwordCharacters.length===0) {
      alert("You must select at least 1 type of character for password");
    }
    //For Loor
    for (let i = 0; i <num1; i++) {
      let genRand = Math.floor(Math.random()*passwordCharacters.length);
      console.log(genRand);
      newPasswordArray.push(passwordCharacters[genRand]);
      console.log(passwordCharacters[genRand])
    }
  }
}
  console.log(newPasswordArray);
  let newPassword = newPasswordArray.join('');
  let passwordText = document.querySelector("#password");
  passwordText.value = newPassword;
}  


  








