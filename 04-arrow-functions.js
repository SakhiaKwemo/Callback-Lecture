// function secondFunction() {
//     console.log("I am the second function")
// }

function firstFunction(callback) {
    console.log("I am the first function")
    callback("Sakhia", "Montreal")
}

//1. Multiple Arguments, you use this
//2. One Arguments -> remove parentheses
//3. One line return -> remove curly brackets
firstFunction(name => console.log(`My name is ${name}`))



