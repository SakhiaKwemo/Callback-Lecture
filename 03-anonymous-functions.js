// function secondFunction() {
//     console.log("I am the second function")
// }

function firstFunction(callback) {
    console.log("I am the first function")
    callback()
}

firstFunction(function() {
    console.log("I am the second function")
})