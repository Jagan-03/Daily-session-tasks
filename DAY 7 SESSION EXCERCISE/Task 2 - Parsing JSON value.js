let obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
    let newArr = [];
    Object.keys(obj).forEach((key) => newArr.push(obj[key])); // Pushes the values of all the keys into newArr
    return newArr;    
}
console.log(printAllValues(obj)); 

/*
Output : 
["RajiniKanth", 33, false]
*/