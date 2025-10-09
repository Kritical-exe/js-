

function sayMyName() {
    console.log("K")
    console.log("R")
    console.log("I")
    console.log("T")
    console.log("I")
    console.log("K")
    console.log("A")
}

sayMyName()



// function addTwoNum(num1,num2){
//     console.log(num1+num2)
// }


function addTwoNum(num1, num2) {
    // result = num1+num2   // return sends the value out of the function so it can be used later
    // return result
    return num1 + num2
}
const result = addTwoNum(9, 2)  // call function and store returned value in 'result'
console.log(result)



function logInUser(username = "sammy") {

    if (!username) { // if username is falsy (empty, null, undefined), ask user to enter

        console.log("Please enter a username")

        return // exits the function immediately, no value returned
    }
    return `${username} just logged in`

}
console.log(logInUser("Kritika"))
//   console.log(logInUser()) //gives : undefined just logged in