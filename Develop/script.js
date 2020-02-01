// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword() {

var num = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";",";","<",">","=","?","@","[","]","^","_","{","}","~"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var promptArray = [];
var passwordArray = [];
var passwordLength;
var password1 = "";

  alert ("What follows is a series of prompts for password criteria.")

  function getRightNum () {
    passwordLength = parseInt(prompt("Please choose a number no less than 8 and no more that 128."));
    
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be no less than 8 and no more that 128.")
      return getRightNum();
    }
    
    else if (isNaN(passwordLength)){
      alert("Password must be a number.")
      return getRightNum();
  }
  
    return passwordLength;
  }

 

  getRightNum(); 
  
  console.log(passwordLength);
  console.log(typeof(passwordLength))

if (confirm("Would you like to include lowercase letters as criteria?")) {
  passwordArray.push(lowercase);
  promptArray.push("\nLowercase Letters"); 
  alert("You have selected the following as Criteria..." + promptArray);



}

if (confirm("Would you like to include uppercase letters as criteria?")) {
  passwordArray.push(uppercase);
  promptArray.push("\nUpercase Letters"); 
  alert("You have selected the following as Criteria..." + promptArray);

}

if (confirm("Would you like to include numbers as criteria?")) {
  passwordArray.push(num);
  promptArray.push("\nNumbers"); 
  alert("You have selected the following as Criteria..." + promptArray);

}

if (confirm("Would you like to include special characters as criteria?")) {
  passwordArray.push(special);
  promptArray.push("\nSpecial Characters");
  alert("You have selected the following as Criteria..." + promptArray);

}



  for (var i = 0; i < passwordLength; ++i) {
      var whichArray = (Math.floor(Math.random() * passwordArray.length)) 
      password1 = password1 + passwordArray[whichArray][Math.floor(Math.random() * passwordArray[whichArray].length)];
      console.log(password1)
  }
  return password1;
  
 
}




