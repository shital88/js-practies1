function myName(){
    console.log("S");
    console.log("A");
    console.log("M");
    console.log("M");
    console.log("Y");

    
}
//myName()            //basic function call
// myName                //function refarance

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// const result=addTwoNumber(3,4)
// console.log(result);   //result print undefined


function addTwoNumber(num1,num2){
    // let result= (num1+num2);
    // return result
    // console.log("hi");
    return num1+ num2
    
}
const result=addTwoNumber(3,4)
//console.log("Result: ",result);   

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Sammy"))

//console.log(loginUserMessage())

function calculateCartPrice(val1,va2,...num1){//rest parameter
    return num1;
}
// console.log(calculateCartPrice(200,400,500,600))


//object return value infunction
const user={
    username:"sammy",
    price:600
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`)

}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

//array return value in function

const myNewArray=[200, 400, 600 , 450]

function returnSecoundVlue(getArray){
    return getArray[1]
}
console.log(returnSecoundVlue(myNewArray));
