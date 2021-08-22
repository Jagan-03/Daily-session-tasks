var objects = [
  { person: "Name-1", age: "2", company: "GUVI" },
  { person: "Name-2", age: "5", company: "GUVI geek" },
  { person: "Name-3", age: "8", company: "GUVI geek network" },
];

//using for & for in
for(let i = 0; i < objects.length; i++){
    for(let key in objects[i]){
        console.log(objects[i][key]);
    }
}

//using for of & for in
for(let obj of objects){
    for(let key in obj){
        console.log(obj[key]);
    }
}

//using forEach & for in
objects.forEach(object => {
    for(let key in object){
        console.log(object[key]);
    }
})
