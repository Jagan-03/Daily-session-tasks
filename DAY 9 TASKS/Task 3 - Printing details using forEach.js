let xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parsing the response into readable JSON format
    let countryDetails = JSON.parse(this.response);

    // Looping through the countryDetails and printing each country's details
    countryDetails.forEach((country) => {
      console.log(`Name : ${country.name}, Capital : ${country.capital}, Flag : ${country.flag}`);
    });
    
  } else {
    console.log(xhr.responseText);
  }
};

// Creating a GET request
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// Sending the request to the API
xhr.send();
