//Singleton
//object.create

//object literals

const mySym = Symbol("Key1")


const JsUser = {
    name : "kritika",
    "full name":"Kritika Shrivastava",
    [mySym] : "myKey1",//use [] when referring to symbols
    age : 17,
    location :"Gwalior",
    email :"@Kritikagmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday","Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "@kritikagoogle.com"// = overrides the value of email
console.log(JsUser.email)
Object.freeze(JsUser) // Object.freeze() stops any changes to an object
JsUser.email = "@kritikamicro.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log('Hello JS user')
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())