
function createCounter() {
    let count = 0; 

    function increment() {
        count++;
        console.log(count);
    }

    function decrement() {
        count--;
        console.log(count);
    }

   

    return { increment, decrement};
}

// Testing the counter
const counter = createCounter();

counter.increment(); 
counter.increment(); 
counter.decrement(); 

