let xhr = new XMLHttpRequest();

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parsing the response into readable JSON format
    let countryDetails = JSON.parse(this.response);

    //Using filter function to loop through the country details to check if the country uses USD
    let countriesUsingUSD = countryDetails.filter((country) => {
      let usesUSD = false;
      // Using map function to check if the currencies includes USD
      country.currencies.map((currency) => {
        if (currency.code === "USD") usesUSD = true;
      });
      // Returning the country details if it uses USD
      if (usesUSD) return country;
    });

    // Printing the filtered country details which uses USD
    console.log(countriesUsingUSD);

  } else {
    console.log(xhr.responseText);
  }
};

// Creating a GET request
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
// Sending the request to the API
xhr.send();
