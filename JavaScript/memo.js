function memoizeFactorial() {
    const cache = {}; //{5:120,6:720}
    return function (n) {
        if (n in cache) {
            console.log('return values', n)
            return cache[n]; //120
        } else {
            if (n === 0 || n === 1) {
                cache[n] = 1;
            } else {
                cache[n] = n * memoizeFactorial()(n - 1);
            }
            console.log(cache)
            return cache[n];
        }
    };
}

const factorial = memoizeFactorial();

console.log(factorial(5)); // Returns 120 (computed and cached)
console.log(factorial(6)); // Returns 720 (computed and cached)
console.log(factorial(5)); // Returns 720 (computed and cached)
// console.log(factorial(5));