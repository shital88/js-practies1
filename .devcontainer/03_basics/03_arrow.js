const user={
    usernme:"sammy",
    price:999,

    welcome: function(){
        // console.log(`${this.usernme}, welcomw to website`);
        // console.log(this);
        
        
    }
}
// user.welcome()
// user.usernme="hari"
// user.welcome()
// console.log(this)

//using function operate this
// function welcome(){
//     let username="sam"
//     console.log(this.username);    //this cannot use in normal function
    
// }
// welcome()


//using function expression
// const welcome=function(){
//     let username="sam"
//  console.log(this.username);
// }
// welcome()


const welcome=()=>{
    let username="sam"
 console.log(this.username);
}
// welcome()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const addTwo=(num1,num2)=>( num1+num2)//one line code(implicite return)

const addTwo=(num1,num2)=>( {username: "sam"})//object return




console.log(addTwo(3,4))