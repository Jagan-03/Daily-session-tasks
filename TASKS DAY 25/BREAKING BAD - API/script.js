// Getting the data from The API using Async and await
let getData = async () => {
  const url = "https://breakingbadapi.com/api/characters?limit=10&offset=0";
  try {
    let data = await fetch(url);
    // Returning the Data in Json format
    return data.json();
  } catch (err) {
    console.error(err);
  }
};

let updatePage = async () => {
  // Creating DOM elements for the characters

  // Getting hold of the main Container where the data is displayed
  let charactersContainer = document.getElementById("characters-container");
  // Calling the getData()(line-2) function to retrieve the information from the API
  let allCharacters = await getData();
  
  allCharacters.forEach((character, index) => {
    // Creating container for each characters to hold the information
    let newCont = document.createElement("div");
    newCont.setAttribute("id", `div${index}`);
    newCont.classList.add("characters");
    // Adding Character details using bootstrap cards
    // Creating Cardbody
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.setAttribute("id", `div${index}`);
    // Creating Card title
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.setAttribute("id", `div${index}`);
    cardTitle.innerText = character.name;
    // Creating character details using table
    let charTable = document.createElement("table");
    charTable.classList.add("table", "table-sm", "text-light");
    // Creating a new row for each character
    for(let detail in character){
      if(detail === "name" || detail === "birthday" || detail === "occupation" || detail === "nickname" || detail === "portrayed" || detail === "status"){
        let newRow = charTable.insertRow(-1);
        newRow.insertCell(-1).innerHTML = detail.toUpperCase();
        newRow.insertCell(-1).innerHTML = character[detail]; 
      }
    }
    // Appending character details to the card body
    cardBody.append(cardTitle, charTable);
    // Appending the card elements to the new Cont
    newCont.appendChild(cardBody);
    // Adding character image as background
    newCont.style.backgroundImage = `url(./images/${index}.jpg)`;
    // Appending the newCont to the main display cont
    charactersContainer.appendChild(newCont);
  });

  // Adding event listeners
  let characters = document.getElementsByClassName("characters");
  characters.forEach((character) => {
    // adding event listeners to all the character containers

    // ONCLICK EVENT
    character.addEventListener("click", (event) => {
      // Changing the width to 100% for the clicked container and changing the width to 0 to all the remaining containers
      characters.forEach((char) => {
        if (event.target.id === char.id) {
          char.style.width = char.style.width === "100%" ? "10%" : "100%";
          char.style.opacity = "1";
        } else {
          char.style.width = "10%";
        }
      });
      
      // Reducing  the marginRight of the card-title to show the character details
      // Initialy it was set to 100%
      document.getElementsByClassName("card-title").forEach(title => {
        if(event.target.id === title.id) {
          title.style.marginRight = title.style.marginRight === "5%" ? "100%" : "5%";
        } else {
          title.style.marginRight = "100%";
        }
      });

    });

    // ONHOVER EVENT
    // Changing the opacity on Mouse Hover
    character.addEventListener("mouseover", (event) => {
      character.style.opacity = "1";
    });
    character.addEventListener("mouseout", (event) => {
      if (character.style.width !== "100%") character.style.opacity = "50%";
    });
  });

  // KEYDOWN EVENT
  // Changing the width and opacity to the original state on pressing escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      characters.forEach((char) => {
        char.style.width = "10%";
        char.style.opacity = "50%";
      });
      // Changing the margin of card-title to the initial state
      document.getElementsByClassName("card-title").forEach(title => {
        title.style.marginRight = "100%";
      });
    }
  });
};
