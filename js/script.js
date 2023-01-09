// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var userSelection = {
  passwordLength : 0,
  lowerCase : false,
  upperCase : false,
  numericCharacters : false,
  specialCharacters : false
}

// Function to prompt user for password options
function getPasswordOptions() {
  var pwdLength = 0;
  do{
    var pwdLength = prompt ('Enter the password length required. Range between 10 and 64')
    try {
      userSelection.passwordLength = parseInt(pwdLength);  
    } catch (error) {
      alert ('Not a number');
    }
    userSelection.passwordLength = 0;
  }while((userSelection.passwordLength < 9 ) || (userSelection.passwordLength > 64));
  userSelection.lowerCase = confirm ('Would you like lowercase Characters ? Default is No.');
  userSelection.upperCase = confirm ('Would you like uppercase Characters ? Default is No.');
  userSelection.numericCharacters = confirm (' Would you like numberic characters ? Default is No.');
  userSelection.specialCharacters = confirm (' Would you like special characters ? Default is No.');
  var password = '';
  

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  console.log (userSelection);
 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);