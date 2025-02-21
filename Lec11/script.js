// let student1={
//     fname:"Sahil",
//     lname:"Gupta",
//     // getResult:function(){
//     //     console.log(this.fname+" "+"passed");
//     // }
// }
// console.log(student1.fname+" "+student1.lname);
// // student1.getResult();
// function getResult(className){
//         console.log(this.fname+" "+"passed and from");
//     }

// let student2={
//     fname:"vishwas",
//     lname:"saxena",
//     // getResult:function(){
//     //     console.log(this.fname+" "+"passed");
//     // }
// }
// const s1=getResult.call(student2,"g16")
// let student1 = {
//   fname: "Sahil",
//   lname: "Gupta",
//   getResult: function () {
//     console.log(this.fname + " " + "passed");
//   },
// };
// console.log(student1.fname + " " + student1.lname);
// student1.getResult();

// let student2 = {
//     firstName: 'Vishwas',
//     lastName: 'Saxena'
// }

// let getName = function getName(classStudent){
//     console.log(this.firstName +" "+ this.lastName)
// }

// // _________________________________________________________________________________________________________________-

// console.log("_CURRYING")

// // What is eventBubbling and eventCapturing?

// // eventBubbling

// console.log(
//     "_"
//   );
  
//   const grandparent = document.getElementById("grandparent");
//   const parent = document.getElementById("parent");
//   const child = document.getElementById("child");
  
//   grandparent.addEventListener("click", () => {
//     console.log("grandparent cicked");
//   });
//   parent.addEventListener("click", () => {
//     console.log("parent cicked");
//   });
//   child.addEventListener("click", () => {
//     console.log("chld cicked");
//   });
  
//   // href.
  
//   addEventListener("cick", () => {
//     window.location.href = e.target.id;
//     console.log(object);
//   });
document.getElementById("searchbox").addEventListener("input", debouncingfunction);
let whichcall=0;
function fetchdata(){
    console.log("fetching api",whichcall++);
    
}
function debouncingfunction(){

    setTimeout(fetchdata,2000)

}