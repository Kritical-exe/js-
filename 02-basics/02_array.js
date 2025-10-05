const marvel = ["Thor","Iron","Spider",]
const dc = ["Bat","Shazam","Wonder"]

// marvel.push(dc) // adds the whole array as one element, changes original array
// console.log(marvel)
// console.log(marvel[3][1])

// marvel.concat(dc)  // adds elements separately, does not change original array
// console.log(marvel)

const allHeros = [...marvel,...dc]
// console.log(allHeros)

const another_array =  [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array)

const useable_array = another_array.flat(Infinity) //flat() flattens nested arrays into one simple array.
console.log(useable_array)



console.log(Array.isArray("Kritika")) //checks if it is array
console.log(Array.from("Kritika")) //converts to array
console.log(Array.from({name: "Kritika"})) //interesting case:returns [] because the object is neither iterable nor has a length


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)) //convert set of elements to array