function memoizedFibonacci() {
    let storage = {}; 

    return function fib(n) {
        if (n <= 1) {
            return n;}
        if (storage[n]) {
            return storage[n]}; 
        storage[n] = fib(n - 1) + fib(n - 2);
            return storage[n];
    };
}

const fibonacci = memoizedFibonacci(); 


console.log(fibonacci(10)); 
console.log(fibonacci(12)); 
console.log(fibonacci(8));  
//8 will be fast as it is already stored

