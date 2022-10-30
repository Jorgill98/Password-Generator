// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
  
  while (true) { var userInput = window.prompt("How long would you like your password")

    if (userInput === null) {
      return
    }

   var passwordLenghth = parseInt(userInput)

   if (isNaN(passwordLenghth)) {
   window.alert("That isn't a number")
    }else if (passwordLenghth < 8 || passwordLenghth > 128) {
    window.alert("Password lenghth must be between 8 and 128 numbers")
    return
    } else {
    break
    }
  }

 

  
  var userWantsNumbers = window.confirm("Do you want numbers in your password?")
  var userWantsSymbols = window.confirm("Do you want symbols in your password?")
  var userWantsLowercase = window.confirm("Do you want lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Do you want uppercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "@", "#", "$", "%","^","&","*",]
  var lowercaselist = ["a", "b" ,"c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"]
  var uppercaselist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "R", "S","T" ,"U","V","W","X", "Y", "Z"]
  var optionsCart = []

 


  if (userWantsNumbers === true) {
    optionsCart.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
  }

  
  if (userWantsUppercase === true){
    optionsCart.push(uppercaselist)
  }
  
  if (userWantsLowercase === true){
    optionsCart.push(lowercaselist)
  }
  
  
  var generatePassword =""
  for (var i = 0; i < passwordLenghth; i++) {
    var randomlist = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomlist)
    generatePassword += randomChar
  }

  return generatePassword
}


// Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      if(!password) return

      if (password) {
        passwordText.value +password;
      }
    }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
