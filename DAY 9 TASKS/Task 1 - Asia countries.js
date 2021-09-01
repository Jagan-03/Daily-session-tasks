let xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parsing the response into readable JSON format
    let countryDetails = JSON.parse(this.response);

    // Getting all the countries in asia region using filter function
    let asiaRegion = countryDetails.filter((country) => {
      return country.region === "Asia";
    });

    // Prints the filtered array
    console.log(asiaRegion);
    
  } else {
    console.log(xhr.responseText);
  }
};

// Creating a GET request
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// Sending the request to the API
xhr.send();
