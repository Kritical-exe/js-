// const tinderUser = new Object() // Created using constructor → Singleton object

const tinderUser = {} // Created using literal → Non-singleton 

tinderUser.id = "abc123"
tinderUser.name = "Jane"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "someone@gmail.com",
    username: {
        fullname: {
            firstname: "Kritika",
            lastname: "Shrivastava"
        }
    }
}
// console.log(regularUser.username)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"c",6:"d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) //{} is optional parameter

const obj3 = {...obj1,...obj2,...obj4} //spread operator
console.log(obj3)

const users = [
    {
        id:1,
        email:"k@gmail"
    },
    {
        id:1,
        email:"k@gmail"
    },
    {
        id:1,
        email:"k@gmail"
    },
    {
        id:1,
        email:"k@gmail"
    },
    {
        id:1,
        email:"k@gmail"
    },
    {
        id:1,
        email:"k@gmail"
    }
]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) //gives keys as array
console.log(Object.values(tinderUser))//gives values as array
console.log(Object.entries(tinderUser))//gives key-value pairs as nested arrays

console.log(tinderUser.hasOwnProperty('isLoggedIn'))