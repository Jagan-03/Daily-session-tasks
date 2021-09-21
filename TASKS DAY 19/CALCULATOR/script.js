// calculating functions
let calcFunctions = {
    "+" : (num1, num2) => +num1 + +num2,
    "-" : (num1, num2) => +num1 - +num2,
    "X" : (num1, num2) => +num1 * +num2,
    "/" : (num1, num2) => +num1 / +num2,
    "%" : (num1, num2) => +num1 % +num2
};

// Operations
let accumulator = "";
let current = "";
let operator = "";
let result = "";

// Element data
let keyElements = {
    row1 : {
        "AC" : ["delete-key", "btn", "btn-black", "flex-child", "text-center"],
        "⌫" : ["remove-key", "btn", "btn-black", "flex-child", "text-center"],
        "%" : ["btn", "btn-black", "flex-child", "op-key", "text-center"],
        "/" : ["btn", "btn-black", "flex-child", "op-key", "text-center"]
    },
    row2 : {
        "7" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "8" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "9" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "x" : ["btn", "btn-dark", "flex-child", "op-key", "text-center", "p-3"]
    },
    row3 : {
        "4" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "5" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "6" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "-" : ["btn", "btn-dark", "flex-child", "op-key", "text-center", "p-3"]
    },
    row4 : {
        "1" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "2" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "3" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "+" : ["btn", "btn-dark", "flex-child", "op-key", "text-center", "p-3"]
    },
    row5 : {
        "0" : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "." : ["btn", "btn-dark", "flex-child", "num-key", "text-center", "p-3"],
        "=" : ["btn", "btn-dark", "flex-child", "equal-key", "text-center", "p-3"]
    }
};
let memoryElements = {
    "M+" : ["btn", "btn-black", "flex-child", "text-center", "text-dark", "p-2", "bg-warning", "M+", "memory-key"],
    "M-" : ["btn", "btn-black", "flex-child", "text-center", "text-dark", "p-2", "bg-warning", "M-", "memory-key"],
    "MC" : ["btn", "btn-black", "flex-child", "text-center", "text-dark", "p-2", "bg-warning", "MC", "memory-key"]
};

// Creating elements
let updatePage = () => {
    // Updating tab 1
    let tab1 = document.getElementById("ex1-tabs-1");
    // Creating result display
    let display = document.createElement("div");
    display.classList.add("display", "d-flex", "flex-column", "justify-content-end", "align-items-end", "p-3");
    let syntax = document.createElement("div");
    syntax.setAttribute("id", "syntax");
    syntax.innerHTML = "0";
    let ans = document.createElement("div");
    ans.setAttribute("id", "ans");
    display.append(syntax, ans);
    // Appending display to tab1
    tab1.appendChild(display);
    // Creating calculator keys
    // Main keys cont
    let keys = document.createElement("div");
    keys.classList.add("keys", "d-flex", "flex-column", "bg-dark", "text-light", "m-0");
    // child key conts
    let childMemory = document.createElement("div");
    childMemory.classList.add("d-flex", "justify-content-evenly");
    for(let mem in memoryElements){
        let newBtn = document.createElement("button");
        newBtn.innerHTML = mem;
        newBtn.classList.add(...memoryElements[mem]);
        newBtn.setAttribute("type", "button");
        newBtn.setAttribute("id", mem);
        newBtn.setAttribute("disabled", "true");
        childMemory.appendChild(newBtn);
    }
    // Appending memory child to tab1
    tab1.appendChild(childMemory);
    for(let row in keyElements){
        let childKey = document.createElement("div");
        childKey.classList.add("d-flex", "justify-content-evenly");
        for(let key in keyElements[row]) {
            let newBtn = document.createElement("button");
            newBtn.setAttribute("type", "button");
            newBtn.classList.add(...keyElements[row][key]);
            newBtn.innerHTML = key;
            childKey.appendChild(newBtn);
        }
        tab1.appendChild(childKey);
    }


    // Adding event listeners

    // For number keys
    let numKeys = document.querySelectorAll(".num-key");
    numKeys.forEach((key) => {
        key.addEventListener("click", (event) => {
            let display = document.querySelector("#syntax");
            if(!operator){
                if(accumulator === result) {
                    accumulator = "";
                    let ans = document.querySelector("#ans");
                    ans.innerText = "";
                } 
                accumulator += event.target.innerText;
                display.innerText = accumulator;
            } else {
                current += event.target.innerText;
                display.innerText = `${accumulator}  ${operator}  ${current}`;
            }
            result = "";
            memDisable(true);
        });
    });

    // For operator keys
    let opKeys = document.querySelectorAll(".op-key");
    opKeys.forEach((key) => {
        key.addEventListener("click", (event) => {
            if(!accumulator) accumulator = "0";
            operator = event.target.innerText;
            let display = document.querySelector("#syntax");
            display.innerText = `${accumulator}  ${operator}`;
        });
    });

    // Equal key
    let equalKey = document.querySelector(".equal-key");
    equalKey.addEventListener("click", (event) => {
        if(accumulator && operator && current){
            let ans = document.querySelector("#ans");
            result = calcFunctions[operator](accumulator, current);
            ans.innerText = result;
            accumulator = result;
            memDisable(false);
            current = "";
            operator = "";
        } else {
            ans.innerText = result;
        }
        
    })

    // All clear key
    let deleteKey = document.querySelector(".delete-key");
    deleteKey.addEventListener("click", (event) => {
        let ans = document.querySelector("#ans");
        ans.innerText = "";
        let display = document.querySelector("#syntax");
        display.innerText = "0";
        accumulator = "";
        operator = "";
        current = "";
        memDisable(true);
    });

    // Back space key
    let removeKey = document.querySelector(".remove-key");
    removeKey.addEventListener("click", (event) => {
        if(!operator) accumulator = accumulator.slice(0, -1);
        else current = current.slice(0, -1);
        if(!accumulator) accumulator = "";
        let display = document.querySelector("#syntax");
        display.innerText = `${accumulator}  ${operator}  ${current}`;
    });

    // Memory keys
    document.getElementById("memory-value").innerText = localStorage.value;
    let memDisable = (data) => {
        let memKeys = document.querySelectorAll(".memory-key");
        for(let i = 0; i < memKeys.length; i++) {
            if(!data) memKeys[i].removeAttribute("disabled");
            else memKeys[i].setAttribute("disabled", "true");
        }
    };
    let memKeys = document.querySelectorAll(".memory-key");
    localStorage.value = localStorage.getItem("value");
    memKeys.forEach(key => {
        key.addEventListener("click", (event) => {
            if(event.target.id === "M+"){
                localStorage.value = +localStorage.value + +result;
            } else if(event.target.id === "M-"){
                localStorage.value = +localStorage.value - +result;
            } else {
                localStorage.value = 0;
            }
            document.getElementById("memory-value").innerText = localStorage.value;
        })
    })

    // KeyboardEvent
    document.addEventListener("keydown", (event) => {
        if(!isNaN(event.key)){
            let display = document.querySelector("#syntax");
            if(!operator){
                if(accumulator === result) {
                    accumulator = "";
                    let ans = document.querySelector("#ans");
                    ans.innerText = "";
                } 
                accumulator += event.key;
                display.innerText = accumulator;
            } else {
                current += event.key;
                display.innerText = `${accumulator}  ${operator}  ${current}`;
            }
            result = "";
        } else {
            alert("Only Numbers are allowed");
        }
    })
}


