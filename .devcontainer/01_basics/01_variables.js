const accountId = 144553
let accountEmail="shital@gmail.com"
var accountPassword="12345"
accountCity="Pune"
let accountState;
//accountId=2// not allowed

accountEmail="sh@gamail.com"
accountPassword0="11456"
accountCity="satara"


console.log(accountId);

/*
    prefer not use var
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])