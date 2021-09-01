let xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parsing the response into readable JSON format
    let countryDetails = JSON.parse(this.response);

    // Calculating the total population using reduce function
    let totalPopulation = countryDetails.reduce((prevValue, currValue) => {
      return prevValue + currValue.population;
    }, 0); // 0 is the initial value for population

    // Prints the total population
    console.log(`The total population is ${totalPopulation}`);

  } else {
    console.log(xhr.responseText);
  }
};

// Creating a GET request
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// Sending the request to the API
xhr.send();
