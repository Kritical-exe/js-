const accountId = 144553
let accountEmail = "kritika@gmail.com"
var accountPassword = "12889"
accountCity = "Jaipur"
let accountState;

//accountId = 2// not allowed
accountEmail = "diva@gmail.com"
accountPassword = "23345"
accountCity = "Mumbai"
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
