/* // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */

var num = ["0123456789"];
var special = ["!#$%&'()*+,-./:;<>=?@[]^_{}~"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var promptArray = [];
var passwordArray = [];

alert ("What follows is a series of prompts for password criteria.")

function validation(){
  for (var i = 0; i < promptArray.length; i++) {
    alert("You have selected the following as Criteria..." + promptArray[i]);
  }
}


if (confirm("would you like to include password length as criteria?")) {
  promptArray.push("\nPassword Length"); 
  var length = prompt("Please choose a number no less than 8 and no more that 128.");
  validation();
}

if (confirm("would you like to include lowercase letters as criteria?")) {
  passwordArray.push(lowercase);
  promptArray.push("\nLowercase Letters");
  validation();
}

if (confirm("would you like to include uppercase letters as criteria?")) {
  passwordArray.push(uppercase);
  promptArray.push("\nUpercase Letters"); 
  validation();
}

if (confirm("would you like to include numbers as criteria?")) {
  passwordArray.push(num);
  promptArray.push("\nNumbers"); 
  validation();
}

if (confirm("would you like to include special characters as criteria?")) {
  passwordArray.push(special);
  promptArray.push("\nSpecial Characters");
  validation();
}

var password = "";
var length;

  for (var i = 0; i < length; ++i) {
      password += passwordArray.charAt(Math.floor(Math.random() * passwordArray.length));
  }
  
alert(password);






