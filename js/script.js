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


//UserSelection Object to control password criteria
var userSelection = {
  passwordLength : 0,
  lowerCase : false,
  lowerCaseCharCount : 0,
  upperCase : false,
  upperCaseCharCount : 0,
  numericCharacters : false,
  numericCharCount : 0,
  specialCharacters : false,
  specialCharCount: 0
}

// Function to prompt user for password options
function getPasswordOptions() {
  var pwdLength = 0;
  //prompt user till a valid entry between 10 and 64 is entered.
  do{
    var pwdLength = prompt ('Enter the password length required. Range between 10 and 64')
    //check for a number entry
    if (!(isNaN(pwdLength))){
      userSelection.passwordLength = parseInt(pwdLength);  
    }
  }while((userSelection.passwordLength < 9 ) || (userSelection.passwordLength > 64));
  
  //Prompt user till atleast one criteria must be selected
  do {
    alert('Select atleast one of the following -- lowerCase, UpperCase, numeric Characters or special Characters');
    userSelection.lowerCase = confirm ('Would you like lowercase Characters ? Default is No.');
    userSelection.upperCase = confirm ('Would you like uppercase Characters ? Default is No.');
    userSelection.numericCharacters = confirm (' Would you like numberic characters ? Default is No.');
    userSelection.specialCharacters = confirm (' Would you like special characters ? Default is No.');
  }while (!((userSelection.lowerCase)||(userSelection.upperCase)||(userSelection.numericCharacters)||(userSelection.specialCharacters)))
}

//Function to asign random character limits to the different criteria
function calculateRandomCharCount() {
  
  //Set the total charactger count to a variable to deduct from
  var totalCharCount = userSelection.passwordLength;
  
  //Reserve atleast one space for character type criterion selected
  if (userSelection.lowerCase){
    totalCharCount = totalCharCount - 1;
    userSelection.lowerCaseCharCount = 1;
  }
  if (userSelection.upperCase){
    totalCharCount = totalCharCount  - 1;
    userSelection.upperCaseCharCount = 1;
  }
  if (userSelection.specialCharacters){
    totalCharCount =totalCharCount -1;
    userSelection.specialCharCount = 1;
  }
  if (userSelection.numericCharacters){
    totalCharCount = totalCharCount - 1;
    userSelection.numericCharCount = 1;
  }
  //Assign char limit based on criteria  
  do{
  //Set lower case Char limit
  if (userSelection.lowerCase){
    var randomCharCount = 0;
    randomCharCount = Math.floor((Math.random() * totalCharCount)+1);
    alert(`Random number from 1 to ${totalCharCount} is ${randomCharCount}`);
    userSelection.lowerCaseCharCount = userSelection.lowerCaseCharCount + randomCharCount;
    totalCharCount = totalCharCount - randomCharCount;
   }
  
  //Set upper case Char limit
  if ((userSelection.upperCase)&&(totalCharCount>0)){
    var randomCharCount = 0;
    randomCharCount = Math.floor((Math.random() * totalCharCount)+1);
    alert(`Random number from 1 to ${totalCharCount} is ${randomCharCount}`);
    userSelection.upperCaseCharCount = userSelection.upperCaseCharCount + randomCharCount;
    totalCharCount = totalCharCount - randomCharCount;
  }
  
  //Set special  Char limit
  if ((userSelection.specialCharacters)&&(totalCharCount>0)){
    var randomCharCount = 0;
    randomCharCount = Math.floor((Math.random() * totalCharCount)+1);
    alert(`Random number from 1 to ${totalCharCount} is ${randomCharCount}`);
    userSelection.specialCharCount = userSelection.specialCharCount + randomCharCount;
    totalCharCount = totalCharCount - randomCharCount;
  }
  
  //Add remaining to Numeric Char Limit
  if ((userSelection.numericCharacters)&&(totalCharCount>0)){
    userSelection.numericCharCount = userSelection.numericCharCount + totalCharCount;
    totalCharCount = totalCharCount - userSelection.numericCharCount;
  }
alert (`Remaining Count : ${totalCharCount}`);
}while(totalCharCount>0);

}
  

// Function for getting a random element from an array
function getRandom(arr) {
  let x = Math.floor((Math.random() * arr.length));
  return arr[x];
}


// Function to generate password with user input
function generatePassword() {
  //Prompt for user criteria selection 
  getPasswordOptions();
  var pwd = '';
  var randomCharCount = 0;
  // Calculate char counts for criteria
  calculateRandomCharCount();
console.log(userSelection);
  //generate password
  for (i=1;i<userSelection.passwordLength+1;i++){
    //generate a random number to select random criteria from 1 - 4
    randomCharCount = Math.floor((Math.random() * 4));
alert(`Random Selection at position ${i} is ${randomCharCount}`) ;   
    switch (randomCharCount) {
      case 1://lowerCase characters
        if (userSelection.lowerCaseCharCount > 0){
          pwd = pwd + getRandom(lowerCasedCharacters);
          userSelection.lowerCaseCharCount = userSelection.lowerCaseCharCount - 1;
        }else{
          //restore selection 
          i=i-1;
        }
        break;
       case 2: //upperCase Characters
        if (userSelection.upperCaseCharCount > 0){
          pwd = pwd + getRandom(upperCasedCharacters);
          userSelection.upperCaseCharCount = userSelection.upperCaseCharCount - 1;
        }else{
          //restore selection 
          i=i-1;
        }
        break;
      case 3: //special Character
        if (userSelection.specialCharCount > 0){
          pwd = pwd + getRandom(specialCharacters);
          userSelection.specialCharCount= userSelection.specialCharCount - 1;
        }else{
          //restore selection 
          i=i-1;
        }
        break;
      default: //Numeric Character
        if (userSelection.numericCharCount > 0){
          pwd = pwd + getRandom(numericCharacters);
          userSelection.numericCharCount = userSelection.numericCharCount - 1;
        }else{
          //restore selection 
          i=i-1;
        }
        break;
    }
  }
  console.log (userSelection);
  console.log(pwd);
 return pwd;
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