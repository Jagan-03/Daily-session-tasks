let getData = async () => {
    try {
        let url = "https://swapi.dev/api/films";
        // Sending request to the Api using fetch
        let data = await fetch(url);
        // returning the data in Json format
        return data.json();
    } catch (error) {
        console.error(error);
    }
}

// Details button attributes object
let buttonAttributes = [
    {
        "type" : "button",
        "data-mdb-toggle" : "collapse",
        "data-mdb-target" : "#collapse0",
        "aria-expanded" : "false",
        "aria-controls" : "collapse0"
    },
    {
        "type" : "button",
        "data-mdb-toggle" : "collapse",
        "data-mdb-target" : "#collapse1",
        "aria-expanded" : "false",
        "aria-controls" : "collapse1"
    },
    {
        "type" : "button",
        "data-mdb-toggle" : "collapse",
        "data-mdb-target" : "#collapse2",
        "aria-expanded" : "false",
        "aria-controls" : "collapse2"
    },
    {
        "type" : "button",
        "data-mdb-toggle" : "collapse",
        "data-mdb-target" : "#collapse3",
        "aria-expanded" : "false",
        "aria-controls" : "collapse3"
    },
    {
        "type" : "button",
        "data-mdb-toggle" : "collapse",
        "data-mdb-target" : "#collapse4",
        "aria-expanded" : "false",
        "aria-controls" : "collapse4"
    },
    {
        "type" : "button",
        "data-mdb-toggle" : "collapse",
        "data-mdb-target" : "#collapse5",
        "aria-expanded" : "false",
        "aria-controls" : "collapse5"
    }
] 


let displayData = async () => {
    let movies = await getData();
    // Getting hold of the main container where all the film containers is going to be appended
    let mainContainer = document.getElementById("films");
    movies.results.forEach((movie, index) => {
        // Creating a new film container for each movie
        let newFilm = document.createElement("div");
        newFilm.classList.add("container-fluid", "row", "film", "rounded", "mb-5");
        // Creating a container to hold the film details
        let filmDetails = document.createElement("div");
        filmDetails.classList.add("col-lg-6", "p-3", "mb-4");
        // Movie details childs
        let filmTitle = document.createElement("h3");
        filmTitle.classList.add("text-warning");
        filmTitle.innerText = `STAR WARS : ${movie.title}`; 
        let filmIntro = document.createElement("p");
        filmIntro.classList.add("text-white-50");
        filmIntro.innerText = movie.opening_crawl.replace(/(\r\n|\n|\r)/gm, "");
        // Creating a button to display the collapsed movie data
        let detailsButton = document.createElement("button");
        detailsButton.classList.add("btn", "btn-warning", "text-dark");
        // Setting button attributes for collapsing and expanding function
        for(let attribute in buttonAttributes[index]){
            detailsButton.setAttribute(attribute, buttonAttributes[index][attribute]); 
        };
        detailsButton.innerText = "Movie Details";
        // Creating the collapsed container which contains the movie details
        let collapsedCont = document.createElement("div");
        collapsedCont.classList.add("collapse", "mt-3");
        collapsedCont.setAttribute("id", `collapse${index}`);
        // Creating table for displaying movie details
        let detailsTable = document.createElement("table");
        detailsTable.classList.add("table", "table-sm");
        for(let detail in movie){
            if(detail === "director" || detail === "producer" || detail === "release_date" || detail === "episode_id"){
                let newTableRow = detailsTable.insertRow(-1);
                let head = document.createElement("th");
                head.innerText = detail.toUpperCase();
                newTableRow.appendChild(head);
                newTableRow.insertCell(-1).innerText = movie[detail];
            }
        }
        // Appending the detailsTable to collapsedCont
        collapsedCont.appendChild(detailsTable);
        // Appending all the child elements to the filmDetails container
        filmDetails.append(filmTitle, filmIntro, detailsButton, collapsedCont);

        // Creating image element for movie poster
        let moviePoster = document.createElement("img");
        moviePoster.src = `/images/${index}.jpg`;
        moviePoster.alt = movie.title;
        moviePoster.classList.add("img-fluid", "col-lg-6");

        // Appending the film details and movie poster to the new film container
        newFilm.append(filmDetails, moviePoster);

        // And finally appending the newFilm container to the main container
        mainContainer.appendChild(newFilm); 
    })
    console.log(movies.results);
}
