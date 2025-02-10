/*
1> types of error messages
reference error , type error , syntax error 
2> all let , var and const are hoisted 
*/

// console.log(abc);
// sum(10,5);
// var abc=29;
// function sum(a,b) {
//     var ans=a+b;
//     return ans;
// }
// var major=sum(6,8);
// console.log(major);

//hositing

// console.log(a);
// var a=1;
// console.log(b);
// let b=2;

/*
this keyword: window object === this
lexical order : grand parent -> parent -> child(can access all from parent and grand parent)
TDZ : temporal dead zone 
console(a)                console(a)
var a=5;                  let a=5;
console(a)                console(a)
time between phase 1 and phase 2
*/ 

// var a=20;
// var b=30;
// var c=50;
// console.log(a);
// console.log(b);
// console.log(c);
// {
//     var a=5;
//     var b=4;
//     var c=18;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     {
//         var a=87;
//         var b=23;
//         var c=43;
//         console.log(a);
//         console.log(b);
//         console.log(c);
        
        
        
//     }
// }
var a=20;
var b=30;
var c=50;
console.log(a);
console.log(b);
console.log(c);
{
    let a=5;
    // var b=4;
    let c=18;
    console.log(a);
    console.log(b);
    console.log(c);
    {
        let a=87;
        let b=23;
        // var c=43;
        console.log(a);
        console.log(b);
        console.log(c);
    }
}
console.log(a);
console.log(b);
console.log(c);