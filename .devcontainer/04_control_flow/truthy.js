// const userEmail=sammy@gmail.com

// if(userEmail){
//     console.log("user have an email");
    
// }
// else{
//     console.log("user don't have an aemail");
    
// }

//++++++++++++++++++++++++++++/falsy value+++++++++++++++++++++++++++

//false, 0, -0, BigInt 0n,"", null, undefined, NaN

//+++++++++++++++++++++++++truthy values++++++++++++++++++++++ 

//"0", 'false', " ", [],{},function(){},


//+++++++++++++++++check array is empty++++++++++++

// const myArray=[]

// if(myArray.length===0){
//     console.log("Array is Empty");
    
// }


//++++++++++++++++++++++++++check object is empty+++++++++++++++++++++++
const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator(??): null undefined

let val1;
//val1= 5 ?? 10
//val1=null ?? 10

//val1=undefined ?? 15

val1=null ?? 10 ??12

console.log(val1);

//terniary operator

//condition ? true :false

const iceTea =100
iceTea>=80? console.log("less than 80") :console.log("more than 80");


