// reverse a string and check if it’s a palindrome using loops and conditional statements. 

// let originalWord = "madam"
let originalWord = "hello"


let convert = originalWord.split("")

let reversedWord = ""

//for()

for(let i=originalWord.length-1; i>=0; i--){
    reversedWord = reversedWord + originalWord.charAt(i)
}
console.log(`Reversed Word: ${reversedWord}`)

if(reversedWord === originalWord){
    console.log("It’s a palindrome!")
}else{
    console.log("Not a palindrome!")
}