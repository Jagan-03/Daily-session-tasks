let getData = async () => {
  try {
    let url = "https://covid-api.mmediagroup.fr/v1/cases";
    let data = await fetch(url);
    return data.json();
  } catch (error) {
    console.error(error);
  }
};

let loadCovidData = async () => {
  let covidData = await getData();
  // Getting hold of the main table body
  let tableBody = document.getElementById("countryDetails");
  // Looping throught the covidData and creating new row for each country
  for (let country in covidData) {
    let newRow = tableBody.insertRow(-1);
    newRow.insertCell(-1).innerText = covidData[country].All["country"];
    newRow.insertCell(-1).innerText = covidData[country].All["capital_city"];
    newRow.insertCell(-1).innerText = covidData[country].All["continent"];
    newRow.insertCell(-1).innerText = covidData[country].All["location"];
    newRow.insertCell(-1).innerText = covidData[country].All["population"];
    newRow.insertCell(-1).innerText = covidData[country].All["confirmed"];
    newRow.insertCell(-1).innerText = covidData[country].All["deaths"];
    newRow.insertCell(-1).innerText = covidData[country].All["recovered"];
  }
};

let onSearch = () => {
    // Getting hold of the search input
    let searchdata = document.getElementById("search-input").value;
    let filter = searchdata.toUpperCase();
    // Getting hold of the table body to filter the searched country
    let table = document
      .getElementById("countryDetails")
      .getElementsByTagName("tr");
    // Looping through all the country name and hiding the row which does not contain the search input
      for(let i = 0; i < table.length; i++){
        let countryName = table[i].children[0].innerHTML; 
        if (countryName.toUpperCase().indexOf(filter) > -1) table[i].style.display = "";
        else table[i].style.display = "none";
      }
  }