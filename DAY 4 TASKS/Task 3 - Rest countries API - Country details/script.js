let xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let countryDetails = JSON.parse(this.response);
    countryDetails.forEach(country => {
      let details = { 
        name : country.name, 
        region : country.region, 
        subregion : country.subregion, 
        population: country.population
      };
      console.log(details);
    });
  } else {
    console.log(xhr.responseText);
  }
};

// Creating a GET request
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// Sending the request to the API
xhr.send();