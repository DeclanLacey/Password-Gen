const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let resultOne = document.getElementById("outputOne")
let resultTwo = document.getElementById("outputTwo")
let button = document.getElementById("button")
let passwordLength = 12



function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


button.addEventListener("click", function() {

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
        }
    return randomPassword
    
    }
const generatedPasswordOne = generateRandomPassword()
resultOne.textContent = generatedPasswordOne
})








button.addEventListener("click", function() {

function generateRandomPasswordTwo() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
        }
    return randomPassword
    
    }
const generatedPasswordTwo = generateRandomPasswordTwo()
resultTwo.textContent = generatedPasswordTwo
})




 


