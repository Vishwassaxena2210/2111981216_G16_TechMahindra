// function two(){
// return 2;
// }

// console.log(1);

// console.log(two());

// setInterval(()=>{
//     console.log(3);
    
// },3000)

// function four(){
//     return 4;
//     }

// console.log(four());
// setInterval(()=>{
//     console.log(5);
//     },5000)

// console.log(6);

    // for(var i=1;i<=6;i++){
    //     function a1(){
    //         setTimeout(()=>{
    //             console.log(i);
    //         },1000);
    //     }
    //      }

    // function z() {
    //     var b=7;
    //     function x() {
    //         var a=9;
    //         function y() {
                
    //             console.log(a,b);
    //         }
            
    //         y();
    //     }
    //     x();
    // }
    
    // z();


    //Important case : closures

    
//     function students(){
//         var count=0;
//         function incre(){
//             count++;
//             console.log(count);
//         }
        
//         incre();
//         incre();
//         incre();
       
//     }
   
//    students();
  
// function students(){
//     var count=0;
//    return function incre(){
//         count++;
//         console.log(count);
//        }
//     }
// var i=students(); 

// i();i();





   function counter(){
    var count=0;
    this.i=function(){
        count++;
        console.log(count);
    }
    this.d=function(){
        count--;
        console.log(count);
        
    }
   }
   var c1=new counter();
   c1.i();
   c1.i();
   c1.d();
   
   
  
  
   
   

  