//1. Primitive Type as parameter

function sayHello(name) {
    console.log("Welcome " + name)
}


sayHello("Sakhia")


//2. Reference Type (Array) as parameter

let numbArray = [1,2,3]

function addArray(array) {
array.push(5)
}


addArray(numbArray)
console.log(numbArray)

//3. Reference Type (Function) as parameter = Callback

function secondFunction() {
    console.log("I am the second function")
}

function firstFunction(callback) {
    console.log("I am the first function")
    callback()
}


firstFunction(secondFunction)

//3. Nested Callbacks (Function) as parameter = Callback

function thirdFunction(callback) {
    console.log("I am the third function")
    callback()
}

thirdFunction(secondFunction)



//4. High Order accepts&returns one or more functions 

function fourthFunction(callback1, callback2) {
    console.log("I am the third function")
    callback1()
    callback2()
}

fourthFunction(secondFunction, thirdFunction)
