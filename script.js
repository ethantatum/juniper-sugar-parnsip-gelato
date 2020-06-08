const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialCharactersArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "=", "/"];
let combinedArray = [];


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword = () => {
    let generatedPassword = [];
    let passwordLength;
    let lowercase;
    let uppercase;
    let numeric;
    let specialCharacters;

    lengthCheck = () => {
        passwordLength = prompt(`How many characters would you like in your password?`);
        if(passwordLength < 8 || passwordLength > 128) {
            alert(`Sorry, you need to select between 8 and 128 characters. Please try again.`);
            lengthCheck();
        } else {
            lowercasePrompt();
        }
    };
    lengthCheck();
    
    function lowercasePrompt() {
        lowercase = confirm(`Would you like to include lowercase characters? Select "OK" for yes, "Cancel" for no.`);
        if(lowercase) {
            combinedArray.push(lowercaseArray);
        }
        uppercasePrompt();
    };

    function uppercasePrompt ()  {
        uppercase = confirm(`Would you like to include uppercase characters? Select "OK" for yes, "Cancel" for no.`);
        if(uppercase) {
            combinedArray.push(uppercaseArray);
        }
        numericPrompt();
    };

    function numericPrompt () {
        numeric = confirm(`Would you like to include numbers? Select "OK" for yes, "Cancel" for no.`);
        if(numeric) {
            combinedArray.push(numericArray);
        }
        specialCharsPrompt();
    };

    function specialCharsPrompt () {
        specialCharacters = confirm(`Would you like to include special characters? Select "OK" for yes, "Cancel" for no.`);
        if(specialCharacters) {
            combinedArray.push(specialCharactersArray);
        }
        validator();
    };

    function validator () {
        if(combinedArray.length < 1) {
            alert(`Sorry, you must select at least one type of character to generate a password. Please try again.`);
            combinedArray = [];
            lengthCheck();
        } else {
            alert(`Let me create that password for you!`);
            console.log(combinedArray);
            combinedArray = combinedArray.flat();
            for(let i = 0; i < passwordLength; i++) {
                generatedPassword.push(combinedArray[Math.floor(Math.random() * combinedArray.length)]);
            };
            combinedArray = [];
        }
    };

    return generatedPassword.join("");
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
