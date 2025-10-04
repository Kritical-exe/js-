//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shazam","Batman","Hulk","Ironman"]

const myArr2 = new Array (1,2,3,4)

// console.log(myArr[1])

//Array Methods

// myArr.push(6)
myArr.push(8) //adds this value to array in last position
myArr.pop()  //removes the last value

myArr.unshift(9) //adds this value to array in first position
myArr.shift()//removes the first value

//  console.log(myArr.includes(9))
//  console.log(myArr.indexOf(3))

// console.log(myArr)


const newArr = myArr.join()

// console.log(newArr)
// console.log(typeof newArr)

// slice vs splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // slice(start, end-1) → copy part (doesn't change array)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // splice(start, count) → remove part (changes array)
console.log(myn2);
console.log("C ", myArr);

