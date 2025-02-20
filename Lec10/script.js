// console.log("hello");

// const myPromise1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("fetched data from 1");
//     },2000)
// });

// const myPromise2=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("fetched data from 2");
//     },1000)
// });
// const myPromise3=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("fetched data from 3");
//     },1000)
// });

// const myPromise4=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject("fetched data from 4");
//     },1000)
// });
// //promise.all(): if any one is rejected it does not move ahead
// const datafromall=Promise.any([myPromise1,myPromise2,myPromise3,myPromise4])
// console.log(datafromall);
///////////////////////////
// const MPromise=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("resolve done")
//     },4000)
// })
// console.log("hello1");

// function techM(){
//     const p=MPromise;
//     console.log(p);
    
// }
// techM();
// console.log("hello3");
// async function helloTM(){
//     console.log("hello TM");
    
// }
// const data=helloTM()
// console.log(data);
// data.then((res)=>{
//     return res;
// })

// const projectSubmit=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("submission done")
//     },5000);
// })
// function projectEvaluation(){
//     const projectfile=projectSubmit;
//     console.log(projectfile);
// }
// projectEvaluation();
//////////////////////////////

async function fetchApiData(){
    try{
    const data= (await fetch("https://api.chucknorris.io/jokes/categories")).json()

    return data;

    }catch(err){
        console.log(err);
        
    }
}
const finaldata=fetchApiData();
finaldata.then((data)=>{
    console.log(data);
    
})
