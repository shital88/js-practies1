if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="sammy"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website)
    two()
}
// one()

if(true){
    const username="sammy"
    if(username==="sammy"){
        const website=" youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    

}
//console.log(username)


//++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++
function addone(num){
    return num+1
}
addone(5)

addTwo(5)//in that before decklaration is not possible called hoisting
const addTwo=function(num){
    return num+2
}
