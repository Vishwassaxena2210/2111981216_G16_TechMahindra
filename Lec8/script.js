function x(){
    console.log("im x");
    
}
//higher order function
function y(args){
    console.log("im y");
    args();
}
y(x);

// data=[2,4,6,8,10];
// function double(data){
    
//     for(let i=0; i<data.length; i++){
//         data[i]=data[i]*2;
//     console.log(data[i]);
    
//     }
    
// }double(data);
//////////////////////////////////////
// data=[2,4,6,8,10];
// const calculate=function(data){
//     const output=[];
//     for(let i=0; i<data.length; i++){
//         output.push(data[i]*2);

//     }
// return output;
// }
// const calculate1=function(data){
//     const output1=[];
//     for(let i=0; i<data.length; i++){
// output1.push(data[i]/2);
//     }
//     return output1;
// }
// const calculate2=function(data){
//     const output1=[];
//     for(let i=0; i<data.length; i++){
// output1.push(data[i]+10);
//     }
//     return output1;
// }
// console.log(calculate(data));
// console.log(calculate1(data));
// console.log(calculate2(data));
data=[2,4,6,8,10];
function doubledata(insidedata){
    var ans=insidedata*2;
    return ans;
}
function halfdata(insidedata){
    var ans=insidedata/2;
    return ans;
}
function adddata(insidedata){
    var ans=insidedata+10;
    return ans;
}
// const calculate=function(data,callback){
//     console.log("we are inside calculate");
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(callback(data[i]));
//     }
//     return output;
// }
// console.log(calculate(data,doubledata));
// console.log(calculate(data,halfdata));
// console.log(calculate(data,adddata));
// console.log(data.map(doubledata));

// Array.prototype.dataCalculator= function(logic){
//     console.log("we are inside calculate");
//     var output=[];
//     for(let i=0;i<this.length;i++){
//         output.push(logic(this[i]));
     
//     }
//     return output;
// }
// console.log(data.dataCalculator(doubledata));

//
// arr=[2,9,16,42,71]; 
// function circumference(data){
//     var ans=(2*3.14*data).toFixed(2);
//     return ans;
// }
// function area(data){
//     var ans=(3.14*data*data).toFixed(2);
//     return ans;
// }
// console.log(arr.map(circumference));
// console.log(arr.map(area));
// arr1=[2,4,3,5,6,7]
// Array.prototype.even=function(){
//     return this.filter(function(num) {
//         return num % 2 === 0;
//     });
// }
// console.log(arr1.even());
const info=[
    {
        firstName:"a",
        lastName:"1",
        age:20
    },
    {
        firstName:"b",
        lastName:"2",
        age:21 
    },
    {
        firstName:"c",
        lastName:"3",
        age:22
    },
    {
        firstName:"d",
        lastName:"4",
        age:23
    }
]

const fullName = info.map((person) => {
   return person.firstName + " " + person.lastName
});
console.log(fullName);

const age1=info.filter((person)=>{
    return person.age>21;
})
console.log(age1);

