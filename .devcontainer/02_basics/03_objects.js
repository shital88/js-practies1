//singleton
//Object literals

const mySym=Symbol("kay1")
const jsUser={
    name:"Samy Zen",
    "full name":"Samy Zen Frog",
    [mySym]:"myKey1",
    age:18,
    location:"Pune",
    email: "samy@yahoo.com",
    isLoggedIn: false,
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email="samy@gamil.com"
// Object.freeze(jsUser)
jsUser.email="samy@microsoft.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello JS user");
    
}
jsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())