//1. Function Decleration
// Can be called BEFORE being initialized
sayHello("Sakhia")

function sayHello(name) {
    console.log("Welcome " + name)
}



//2. Function Expression  
const sayHello2 = function(name){
    console.log("Welcome " + name)
}

sayHello2('Sakhia')

//3. Functions includes Objects, but Objects !include Functions, you cant call them

sayHello2.key = "hey"

console.log(sayHello2)



//4. Store Array of functions 

let array = [sayHello, sayHello2,]
console.log(array)
//invoking array
array[1]("sakhia")
//invoking storing functions return
let array2 = [sayHello(), sayHello2()]
console.log(array2)
//Execute all functions with for loop
for(const func of array){
    func('Sakhia')
}


