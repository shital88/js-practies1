let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString('en-IN'));
// console.log(typeof myDate);


// let createDate=new Date(2023, 0, 21)
//let createDate=new Date(2023, 0, 21, 4 , 50)
let createDate=new Date("2023-01-15")

//console.log(createDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
//console.log(newDate);
//console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday: "long",
})






