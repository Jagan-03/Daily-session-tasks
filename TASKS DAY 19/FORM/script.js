
let getList = () => {
    
    let table = document.getElementById("show");
    if(localStorage.getItem("myList")){

        let list = localStorage.getItem("myList").split("-");
        for(let i = 0; i < list.length; i++){
            if(list[i]){
                let row = table.insertRow(-1);
                let fname = row.insertCell(0).innerHTML = JSON.parse(list[i]).fname;
                let lname = row.insertCell(1).innerHTML = JSON.parse(list[i]).lname;
                let address = row.insertCell(2).innerHTML = JSON.parse(list[i]).address;
                let pincode = row.insertCell(3).innerHTML = JSON.parse(list[i]).pincode;
                let gender = row.insertCell(4).innerHTML = JSON.parse(list[i]).gender;
                let food = row.insertCell(5).innerHTML = JSON.parse(list[i]).food;
                food.colspan = 3;
                let state = row.insertCell(6).innerHTML = JSON.parse(list[i]).state;
                let country = row.insertCell(7).innerHTML = JSON.parse(list[i]).country;
            }
        }
    }
    
}

let AddRow = () => {
    let inputs = document.querySelectorAll("input");
    let foodOptions = document.getElementsByClassName("food");
    let selectedFoods = [];
    for(let i = 0; i < foodOptions.length; i++) {
        if(foodOptions[i].checked) {
            selectedFoods.push(foodOptions[i].name);
        }
    }
    if(selectedFoods.length < 2){
        alert("Please select atleast two food options");
    } else {
    // Adding new values to the list
    if(!localStorage.myList) localStorage.myList = "";
    localStorage.myList += `{"fname" : "${inputs[0].value}","lname" : "${inputs[1].value}","address" : "${inputs[2].value}","pincode" : "${inputs[3].value}","gender" : "${inputs[4].checked ? inputs[4].value : inputs[5].value}","food" : "${selectedFoods}","state" : "${inputs[11].value}","country" : "${inputs[12].value}"}-`;
    // Adding the values in the list to the table
    let table = document.getElementById("show");
    let list = localStorage.getItem("myList").split("-");
    for(let i = list.length-2; i < list.length; i++){
        if(list[i]){
            let row = table.insertRow(-1);
            let fname = row.insertCell(0).innerHTML = JSON.parse(list[i]).fname;
            let lname = row.insertCell(1).innerHTML = JSON.parse(list[i]).lname;
            let address = row.insertCell(2).innerHTML = JSON.parse(list[i]).address;
            let pincode = row.insertCell(3).innerHTML = JSON.parse(list[i]).pincode;
            let gender = row.insertCell(4).innerHTML = JSON.parse(list[i]).gender;
            let food = row.insertCell(5).innerHTML = JSON.parse(list[i]).food;
            food.colspan = 3;
            let state = row.insertCell(6).innerHTML = JSON.parse(list[i]).state;
            let country = row.insertCell(7).innerHTML = JSON.parse(list[i]).country;
        }
    }
    inputs.forEach(input => {
        if(input.type !== "radio"){
            input.value = "";
            input.checked = false;
        } else {
            if(input.value === "Male") input.checked = true;
            else input.checked = false;
        }
    });
}
}
