// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generatePassword = () => {
    let generatedPassword;
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
        } 
    };
    lengthCheck();
    
    lowercase = confirm(`Would you like to include lowercase characters? Select "OK" for yes, "Cancel" for no.`);

    return generatedPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
