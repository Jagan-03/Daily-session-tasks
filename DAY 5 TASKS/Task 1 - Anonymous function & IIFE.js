// a. Printing all the odd numbers in the array.
(function(arr){
    arr.forEach(ele => {
        if(ele % 2 !== 0){
            console.log(ele);
        }
    })
})([1, 2, 3, 4, 5]); // returns 1 3 5

// b. Converting all the strings in the array to toUpperCase.
(function(arr){
    let captalized = arr.map(ele => {
        return ele = ele.toUpperCase();
    })
    console.log(captalized);
})(["a", "b", "c", "d", "e"]); // returns ["A", "B", "C", "D", "E"]

// c. Finding the sum of all the numbers in the array.
(function(arr){
    let sum = 0;
    arr.forEach(ele => {
        sum += ele;
    })
    console.log(sum);
})([10, 20, 30, 40, 50]); // returns 150

// d. Printing all the prime numbers in the array.
(function(arr){
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
})([2, 3, 4, 5, 6, 7, 8, 9]); // returns [2, 3, 5, 7]

// e. Printing all the palindromes in an array.
(function(arr){
    let palindromes = [];
    arr.forEach(ele => {
        if(ele === ele.split("").reverse().join("")){
            palindromes.push(ele);
        }
    })
    console.log(palindromes);
})(["TENET", "GEEK", "WOW", "KAYAK", "GUVI"]); // returns ["TENET", "WOW", "KAYAK"]

// f. Returns the median of two sorted arrays of same size
(function(arr1, arr2){
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    if(arr1.length % 2 === 0){
        console.log("Array 1: ", arr1[(arr1.length / 2)-1], arr1[arr1.length / 2]);
        console.log("Array 2: ", arr2[(arr2.length / 2)-1], arr2[arr2.length / 2]);
    } else {
        console.log("Array 1: ", arr1[Math.floor(arr1.length / 2)]);
        console.log("Array 2: ", arr2[Math.floor(arr2.length / 2)]);
    }
})([1, 2, 3, 4, 5, 6], [6, 7, 8, 9, 10, 11]); // returns Array 1: 3 4 and Array 2: 8 9

// g. Removes all the duplicates from the array
(function(arr){
    // Method 1 : using Set 
    // let unique = [...new Set(arr)];
    // console.log(unique);

    // Method 2 : using For loop
    let unique = [];
    let count = {}; 
    for(let i = 0; i < arr.length; i++){
        count[arr[i]] = 1;
    }
    for(key in count){
        unique.push(+key);
    }
    console.log(unique);
})([1, 1, 2, 3, 3, 3, 4, 5]); // returns [1, 2, 3, 4, 5]

// h. Rotates the array k times.
(function(arr, k){
    for(let i = 0; i < k; i++){
        let ele = arr.pop();
        arr.unshift(ele);
    }
    console.log(arr);
})(["N", "M", "A", "N", "I", "R", "O"], 3); // returns ["I", "R", "O", "N", "M", "A", "N"]