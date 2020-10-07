// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

/*
  1. Prompt user for password length
    - use prompt() to ask password length
    - check whether it's between 8-128 characters 
      - If Valid go to Step 2.
      - If Invalid go to Step 1.

  2. Prompt user for types of characters (upper,lower,symbols,numbers)
    - use 4 confirm() to ask for types of characters 
    -stored in seperate variables. 
    - 

  3. Using their input we'd generate a random password.
    - 

    How do we generate a random password?
      - We have a string of values. These values are the ones that the user confirms.
      - Randomly select an index from string Math.floor(Math.random())
      - Store character in new string variable (password)
      - Repeat as many times as needed, (passwordLength) for loop

  4. return password
*/



function generatePassword() {
  alert('Welcome to the Password Generator');

  function askpasswordlength() {
    var pl = prompt('How many characters do you need in your password? (Please choose between 8 to 128 characters');
    return pl;


  }

  var passwordLength = askpasswordlength()

  while (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 to 128 characters!")
    passwordLength = askpasswordlength();

  };

  //if (passwordLength > 7 || passwordLength < 129) {
  var confirmNumber = confirm('Do you like to have number(s) in your password?');
  var confirmLowercase = confirm('Do you like to have lowercase letter(s) in your password?');
  var confirmUppercase = confirm('Do you like to have uppercase letter(s) in your password?')
  var confirmCharacter = confirm('Do you like to have symbol(s) in your password?');
  //}

  // user input to gather choices

  let generatedPassword = '';
  var choices = "";
  var symbol = '"~?!@#$%^&*()_+:}|<>,';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = '0123456789'
  if (confirmNumber === true) {
    choices = choices + number;
  }

  if (confirmLowercase === true) {
    choices = choices + lowercase;
  }

  if (confirmUppercase === true) {
    choices = choices + uppercase;
  }

  if (confirmCharacter === true) {
    choices = choices + symbol;
  }

  //return the password
  // step 1: turn the string choices into an array using the split method 
  // step 2: create a for loop that lasts as long as passwordlength (line 100)
  // step 3: create a randomized indexnumber 
  // step 4: push that value to a new array *var preProcessedArray=[]
  // step 5: figure how to combine an array and bring it back to a string. join method. 
  // step 6: put that string into the html - ref to element within html

// Add event listener to generate button

}
generateBtn.addEventListener("click", writePassword);

