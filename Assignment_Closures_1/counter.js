
function createCounter() {
    let count = 0; 

    function increment() {
        count++;
        
    }

    function decrement() {
        count--;
        
    }

    function getCount() {
        return count;
    }

    return { increment, decrement, getCount };

    
}

// Testing the counter
const counter = createCounter();

counter.increment(); 
counter.increment(); 
counter.decrement(); 
console.log(counter.getCount());
