console.log("hello");
// function a() {
//     console.log("first");
    
// }
// function b(a) {
    
// console.log("second");
    
// }
// b(a());
// function a(){
// var counter = 0;
//     document.getElementById("b1").addEventListener("click", () => {
//         counter++;
//         console.log("clicked 1st button");
//         console.log(counter);
        
        
//     });
// }
// function b(){
//     var c1=0;
//     document.getElementById("b2").addEventListener("click", () => {
//         c1++;
//         console.log("clicked 2nd button");
//         console.log(c1);
//     });
// }
// a();
// b();
/*How Closure Works Here
Clicking Button 1 (b1) will increment counter each time.
Clicking Button 2 (b2) will increment c1 each time.
Even though a() and b() have finished executing, counter and c1 persist, because the event listeners retain their scope.
*/
function reached_restraunt(callback) {
    console.log("reached");
    setTimeout(callback,1000);
    
}
function table_finding(callback) {
    console.log("table finding");
    setTimeout(callback,1000);
    
}
function menu_discover(callback) {
    console.log("menu discover");
    setTimeout(callback,1000);
}

function price_check(callback) {
    console.log("price check");
    setTimeout(callback,1000);
}
function starter_order(callback) {
    console.log("starter order");
    setTimeout(callback,1000);
}
function main_course(callback) {
    console.log("main course");
    setTimeout(callback,1000);
}
function dessert(callback) {
    console.log("dessert");
    setTimeout(callback,1000);
}
function pay_bill() {
    console.log("pay bill");
    
}
//chaining the callbacks : pyramid of doom(problem) => solution : promise
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