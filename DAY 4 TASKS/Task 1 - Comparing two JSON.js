// Two JSON with same Properties but different order
let obj1 = {
    name : "Person 1",
    age : 5
}
let obj2 = {
    age : 5,
    name : "Person 1"
}

// Comparison using dot notation
console.log(obj1.name === obj2.name); //returns true
console.log(obj1.age === obj2.age); // return true

// Comparison using bracket notation
console.log(obj1["name"] === obj2["name"]); //returns true
console.log(obj1["age"] === obj2["age"]); // return true

// Using dot operator in loop
for(let prop in obj1){
    console.log(obj1.prop === obj2.prop); //returns true
} 

