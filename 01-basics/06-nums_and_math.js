const score = 400
// console.log(score)

const balance = new Number('100')
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const anotherNumber = 122.8966
// console.log(anotherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.7))
console.log(Math.floor(5.9))//5
console.log(Math.ceil(3.2))//4
console.log(Math.max(3,5,6,9,2))
console.log(Math.min(3,5,6,9,2))
console.log(Math.random()) //gives any random value between 0 to 1
console.log(Math.floor(Math.random()*10) +1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)