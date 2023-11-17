var generateBtn = document.querySelector("#generate");

let all = "";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!$%&()*+,-./:;<=>?@[\\]^_`{|}~";
const numbers = '0123456789';
const upperCase = lowerCase.toUpperCase();
let options = [lowerCase, upperCase, symbols, numbers];

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to generate the password based on user choices
function generatePassword() {
  let password = "";
  let passwordLength = Number(prompt("Password length (between 8 and 128 characters):"));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password contains too many characters, please pick an amount that fits the correct criteria.");
    return "";
  }

  let lowerCaseOption = confirm("Would you like your password to contain lowercase characters?");
  let upperCaseOption = confirm("How about uppercase?");
  let symbolsOption = confirm("Would you like to include symbols?");
  let numOption = confirm("And finally, would you like your password to contain numbers?");

  if (!lowerCaseOption && !upperCaseOption && !symbolsOption && !numOption) {
    alert("You MUST pick at least one special character.");
    return "";
  }

  if (lowerCaseOption) {
    all += lowerCase;
  }
  if (upperCaseOption) {
    all += upperCase;
  }
  if (symbolsOption) {
    all += symbols;
  }
  if (numOption) {
    all += numbers;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomizer = Math.floor(Math.random() * all.length);
    password += all.charAt(randomizer);
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);