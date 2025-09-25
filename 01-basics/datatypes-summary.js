// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //object

let userEmail; //undefined

const id = Symbol('123')// symbol
const anotherId = Symbol('123') //symbol

console.log(id === anotherId) //false, Because Symbol() always creates a brand-new, unique primitive

// const bigNumber = 487589487590487456248956486548n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Hulk", "Shazam","Batman"] //object

let myObj = { //object
    name : "Kritika",
    age : 22,
}

const myFunction = function(){ //function
    console.log("Hello World")
}

console.log(typeof id) 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitve)

let myName = "KritikaShrivastava"

let anotherName = myName
anotherName = "Kritical-exe"

console.log(myName)
console.log(anotherName)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"

}
let userTwo = userOne
userTwo.email ="kritika@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)