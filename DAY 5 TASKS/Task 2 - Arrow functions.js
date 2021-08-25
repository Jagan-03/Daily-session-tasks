// a. Printing all the odd numbers in the array.
let findOdd = (arr) => {
    arr.forEach(ele => {
        if(ele % 2 !== 0){
            console.log(ele);
        }
    })
}
findOdd([2, 5, 6, 7, 8, 4]); // returns 5 7

// b. Converting all the strings in the array to titleCase.
let convertToTitleCase = (str) => {
    let arr = []; 
    str.split(' ').forEach(word => {
        let d = word.split("");
        d[0] = d[0].toUpperCase();
        arr.push(d.join(""));
    });
    console.log(arr.join(" "));
}
convertToTitleCase("i am ironman"); // returns I Am Ironman

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
