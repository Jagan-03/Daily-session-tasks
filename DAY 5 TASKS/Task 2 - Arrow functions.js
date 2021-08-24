// a. Printing all the odd numbers in the array.
let findOdd = (arr) => {
    arr.forEach(ele => {
        if(ele % 2 !== 0){
            console.log(ele);
        }
    })
}
findOdd([2, 5, 6, 7, 8, 4]); // returns 5 7

// b. Converting all the strings in the array to toUpperCase.
let convertToUpperCase = (arr) => {
    let captalized = arr.map(ele => {
        return ele = ele.toUpperCase();
    })
    console.log(captalized);
}
convertToUpperCase(["i", "r", "o", "n", "m", "a", "n"]); // returns ["I", "R", "O", "N", "M", "A", "N"]

// c. Finding the sum of all the numbers in the array.
let findSum = (arr) => {
    let sum = 0;
    arr.forEach(ele => {
        sum += ele;
    })
    console.log(sum);
}
findSum([1, 2, 3, 4, 5]); // returns 15

// d. Printing all the prime numbers in the array.
let findPrime = (arr) => {
    let primeNumbers = [];
    arr.forEach(ele => {
        let factors = [];
        for(let i = 1; i <= ele; i++){
            if(ele % i === 0){
                factors.push(i);
            }
        }
        if(factors.length <= 2){
            primeNumbers.push(ele);
        }
    })
    console.log(primeNumbers);
}
findPrime([3, 4, 5, 7, 9, 13, 6, 8]); // returns [3, 5, 7, 13]

// e. Printing all the palindromes in an array.
let findPalindromes = (arr) => {
    let palindromes = [];
    arr.forEach(ele => {
        if(ele === ele.split("").reverse().join("")){
            palindromes.push(ele);
        }
    })
    console.log(palindromes);
} 
findPalindromes(["ROTATOR", "ZEN", "POP", "NOON"]); // returns ["ROTATOR", "POP", "NOON"]