//Immediately Invoked Function Expression(IIFE)

(function welcome(){//named iife
    console.log(`DB CONNECTED`);
    
})();//use IIFE for avoid global scope pollution and immediately function invoked

( (name)=>{//unknow iife with parameter
    console.log(`DB CONNECTED TWO ${name}`)
})("sammy")