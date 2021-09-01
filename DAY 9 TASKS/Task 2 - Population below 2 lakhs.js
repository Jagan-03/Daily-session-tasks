let xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parsing the response into readable JSON format
    let countryDetails = JSON.parse(this.response);

    // Getting all the countries which have population below 2 lakhs using filter function
    let below2L = countryDetails.filter((country) => {
      return country.population < 200000;
    });

    // Prints the filtered array
    console.log(below2L);

  } else {
    console.log(xhr.responseText);
  }
};

// Creating a GET request
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// Sending the request to the API
xhr.send();
