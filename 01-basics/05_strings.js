const name= "kritika"
const repoCount = 50

//console.log(name + repoCount +"Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Kritika-ks-com')
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('s'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)// slice(-8,4): -8 → 10-8=2 (start at 'i'), end=4 (exclusive) → chars[2..3] = "it"
console.log(anotherString)

const newStringOne = "    kritika    "
console.log( newStringOne)
console.log( newStringOne.trim())

const url = "https://kritika.com/kritika%20shrivastava"
console.log(url.replace('%20','-'))
console.log(url.includes('shampoo'))

console.log(gameName.split('-'))