//Primitive

//7 types: String, Number, boolean, null, undefined, symbol, BigInt


const score=100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

console.log(id===anotherId);

const BigInt=147852369874562n

//Referance Type (Non-Primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj={
    name: "shital",
    age: 31,
}

const myFunction = function(){
    console.log("Hello World")
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive), heap(non-primitive)

let myYoutubrname="hitesh"

let anotherName=myYoutubrname
anotherName="shital"

console.log(myYoutubrname);
console.log(anotherName);

let userOne={
    email:"shital@google.com",
    upi:"user@bl"
}
let userTwo=userOne

userTwo.email="shital@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
