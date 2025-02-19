// const arr=[1,2,3,4,5,6]
// var sum=0;
// const ans=arr.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;
    
// },0)
// console.log(ans);
// const users=[
//     {fname:"a" , lname:"1" , age:20},
//     {fname:"b" , lname:"2" , age:21},
//     {fname:"c" , lname:"3" , age:22},
//     {fname:"d" , lname:"4" , age:23},
//     {fname:"e" , lname:"5" , age:24}
// ]

// const ans=users.reduce(function(acc,curr){
//     if(!acc[curr.age]) {
//         acc[curr.age]=1;
//     }
//     else{
//         acc[curr.age]++;
//     }
//     return acc;
// },{})
// console.log(ans);

// dataMap=[1,2,3,4,5]
// var max=0;
// const ans1=dataMap.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc=curr
//     }
//     return acc;
// },0)
// console.log(ans1);
////////////////////////////////////////////////////////////////////////
/*
callback :
reached_restraunt(() => {
    table_finding(() => {
        menu_discover(() => {
            price_check(() => {
                starter_order(() => {
                    main_course(() => {
                        dessert(() => {
                            pay_bill();
                        });
                    });
                });
            });
        });
    });
});

//promise was introduced to ignore this messy code
a asynchronous functions is attached to main function
states of promise: pending , reject , fulfilled


*/
// const myPromise=new Promise(resolve,reject){
//     if(1:30>time>2:30){
//         resolve("Successfully reached");
//     }
//     reject("cant reached");
// }

// const githubData=fetch("https://api.github.com/users/pratiyushray");
// console.log(githubData);
/////////////////////////////////////////

const cart=[]
function createOrder(cart){
    const mypromise=new Promise(function(resolve,reject){
        if(cart.length>0){
            console.log("order created");
            resolve("12345")
        }
        else{
            const err= new Error("order failed");
            reject(err.message)
        }
    });
    return mypromise;
    
}
function orderPayment(orderId){
    console.log("order payment done",orderId);
    
}
function orderSummary(orderId){
    console.log("order summary done");
    
}
function updateWallet(orderId){
    console.log("wallet updated");
    
}
console.log(createOrder(cart));
// .then(payment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet)

createOrder(cart)
.then(function (orderId){
    return orderPayment(orderId);
})
.then(function (orderId){
    return orderSummary(orderId);
})
.then(function(orderId){
    return updateWallet();
})
.catch((err)=>{
    console.log("error occured");
})
