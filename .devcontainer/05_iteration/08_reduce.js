const myNums=[1,2,3]

// const myTotal= myNums.reduce(function(acc, currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc+currVal
    
// },0)

//using arrow fun

const myTotal=myNums.reduce( (acc,currVal)=>acc+currVal,0)

// console.log(myTotal);

const shoppingCart=[
    {
        itemName: "js",
        price:2999
    },
    {
        itemName: "python",
        price:999
    },
    {
        itemName: "mobile",
        price:5999
    },
    {
        itemName: "data science",
        price:3999
    },
]

const priceToPay=shoppingCart.reduce( (acc,item)=>acc+item.price,0)

console.log(priceToPay);

