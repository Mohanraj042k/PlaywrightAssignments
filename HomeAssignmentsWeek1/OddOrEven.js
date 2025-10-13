//let number = 22
//Getting input from the user
const prompt = require("prompt-sync")()
let numberString = prompt("Enter the number:")
const number = parseInt(numberString)
if(number%2==0){
    console.log("Even")
}else if(number%2!=0){
    console.log("odd")
}
console.log(typeof(number))