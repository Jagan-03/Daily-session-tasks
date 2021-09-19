
// ---------------------------------scores.html---------------------------------

// Scores & fixtures
let matches = {
    "PREMIER LEAGUE" : [
        {
            team1 : "Newcastle United",
            team2 : "Leeds United",
            KickOff : "20:00" 
        }
    ],
    "SCOTTISH CUP" : [
        {
            team1 : "East Stirlingshire",
            team2 : "Fort William",
            KickOff : "19:45" 
        },
        {
            team1 : "Cumbernauld Colts",
            team2 : "Buckie Thistle",
            KickOff : "20:00" 
        }
    ],
    "SCOTTISH LEAGUE TWO" : [
        {
            team1 : "Edinburgh City",
            team2 : "Stirling Albion",
            KickOff : "19:45" 
        }
    ],
    "SPANISH LA LIGA" : [
        {
            team1 : "Celta Vigo",
            team2 : "Cádiz",
            KickOff : "20:00" 
        }
    ],
    "GERMAN BUNDESLIGA" : [
        {
            team1 : "Hertha Berlin",
            team2 : "SpVgg Greuther Fürth",
            KickOff : "19:30" 
        }
    ],
    "ITALIAN SERIE A" : [
        {
            team1 : "Sassuolo",
            team2 : "Torino",
            KickOff : "19:45" 
        }
    ],
    "TURKISH SUPER LIG" : [
        {
            team1 : "Altay",
            team2 : "Göztepe",
            KickOff : "18:00" 
        },
        {
            team1 : "Yeni Malatyaspor",
            team2 : "Fatih Karagümrük",
            KickOff : "18:00" 
        }
    ],
    "FRENCH LIGUE 1" : [
        {
            team1 : "Strasbourg",
            team2 : "Metz",
            KickOff : "20:00" 
        }
    ],
    "WOMEN'S INTERNATIONAL FRIENDLIES" : [
        {
            team1 : "Chile",
            team2 : "Uruguay Women",
            KickOff : "16:00" 
        },
        {
            team1 : "Brazil",
            team2 : "Argentina",
            KickOff : "20:00" 
        }
    ],
}
// Updating Scores and fixtures - page
let updateFixtures = () => {
    let mainCont = document.getElementsByClassName("scores-main-content")[0];
    for(let league in matches){
        // Header cont - league name
        let head = document.createElement("div");
        head.classList.add("col-lg-12", "text-dark", "text-center", "league-name", "pt-2");
        let headtext = document.createElement("h4");
        headtext.innerHTML = league;
        head.appendChild(headtext);
        mainCont.appendChild(head);
        // Match cont
        matches[league].forEach(match => {  
            // Match cont
            let matchCont = document.createElement("div");
            matchCont.classList.add("col-lg-12", "row", "m-0", "justify-content-center", "text-center", "text-dark", "bg-light", "p-3", "match-name");
            // Team 1 div
            let team1div = document.createElement("div");
            let team1 = document.createElement("p");
            team1.innerHTML = match.team1;
            team1.classList.add("p-0", "m-0");
            team1div.appendChild(team1);
            team1div.classList.add("col-sm-5", "mt-2", "text-md-end");
            // Team 2 div
            let team2div = document.createElement("div");
            let team2 = document.createElement("p");
            team2.innerHTML = match.team2;
            team2.classList.add("p-0", "m-0");
            team2div.appendChild(team2);
            team2div.classList.add("col-sm-5", "mt-2", "text-md-start");
            // Timing badge
            let timediv = document.createElement("div");
            let time = document.createElement("span");
            time.classList.add("badge", "text-dark", "pt-2");
            time.innerHTML = `KICK OFF - ${match.KickOff}`;
            timediv.appendChild(time);
            timediv.classList.add("col-sm-2", "mt-2");
            // Adding all the components to the parent div
            matchCont.append(team1div, timediv, team2div);
            mainCont.appendChild(matchCont);
        })
    }
}

// ---------------------------------tables.html---------------------------------

// Premier league table
let table = {
    "MANCHESTER UNITED" : {
        played : 4,
        won : 3,
        drawn : 1,
        lost : 0,
        for : 11,
        against : 3,
        GD : 8,
        points : 10,
        form : ["W", "D", "W", "W"],
    },
    "CHELSEA" : {
        played : 4,
        won : 3,
        drawn : 1,
        lost : 0,
        for : 9,
        against : 1,
        GD : 8,
        points : 10,
        form : ["W", "W", "D", "W"],
    },
    "LIVERPOOL" : {
        played : 4,
        won : 3,
        drawn : 1,
        lost : 0,
        for : 9,
        against : 1,
        GD : 8,
        points : 10,
        form : ["W", "W", "D", "W"],
    },
    "EVERTON" : {
        played : 4,
        won : 3,
        drawn : 1,
        lost : 0,
        for : 10,
        against : 4,
        GD : 6,
        points : 10,
        form : ["W", "D", "W", "W"],
    },
    "MANCHESTER CITY" : {
        played : 4,
        won : 3,
        drawn : 0,
        lost : 1,
        for : 11,
        against : 1,
        GD : 10,
        points : 9,
        form : ["L", "W", "W", "W"],
    },
    "BRIGHTON & HOVE ALBION" : {
        played : 4,
        won : 3,
        drawn : 0,
        lost : 1,
        for : 5,
        against : 3,
        GD : 2,
        points : 9,
        form : ["W", "W", "L", "W"],
    },
    "TOTTENHAM HOTSPUR" : {
        played : 4,
        won : 3,
        drawn : 0,
        lost : 1,
        for : 3,
        against : 3,
        GD : 0,
        points : 9,
        form : ["W", "W", "W", "L"],
    },
    "WEST HAM UNITED" : {
        played : 4,
        won : 2,
        drawn : 2,
        lost : 0,
        for : 10,
        against : 5,
        GD : 5,
        points : 8,
        form : ["W", "W", "D", "D"],
    },
    "LEICESTER CITY" : {
        played : 4,
        won : 2,
        drawn : 0,
        lost : 2,
        for : 4,
        against : 6,
        GD : -2,
        points : 6,
        form : ["W", "L", "W", "L"],
    },
    "BRENTFORD" : {
        played : 4,
        won : 1,
        drawn : 2,
        lost : 1,
        for : 3,
        against : 2,
        GD : 1,
        points : 5,
        form : ["W", "D", "D", "L"],
    },
    "CRYSTAL PALACE" : {
        played : 4,
        won : 1,
        drawn : 2,
        lost : 1,
        for : 5,
        against : 5,
        GD : 0,
        points : 5,
        form : ["L", "D", "D", "W"],
    },
    "ASTON VILLA" : {
        played : 4,
        won : 1,
        drawn : 1,
        lost : 2,
        for : 5,
        against : 7,
        GD : -2,
        points : 4,
        form : ["L", "W", "D", "L"],
    },
    "WOLVERHAMPTON WANDERES" : {
        played : 4,
        won : 1,
        drawn : 0,
        lost : 3,
        for : 2,
        against : 3,
        GD : -1,
        points : 3,
        form : ["L", "L", "L", "W"],
    },
    "SOUTHAMPTON" : {
        played : 4,
        won : 0,
        drawn : 3,
        lost : 1,
        for : 4,
        against : 6,
        GD : -2,
        points : 3,
        form : ["L", "D", "D", "D"],
    },
    "WATFORD" : {
        played : 4,
        won : 1,
        drawn : 0,
        lost : 3,
        for : 3,
        against : 7,
        GD : -4,
        points : 3,
        form : ["W", "L", "L", "L"],
    },
    "ARSENAL" : {
        played : 4,
        won : 1,
        drawn : 0,
        lost : 3,
        for : 1,
        against : 9,
        GD : -8,
        points : 3,
        form : ["L", "L", "L", "W"],
    },
    "LEEDS UNITED" : {
        played : 4,
        won : 0,
        drawn : 2,
        lost : 2,
        for : 4,
        against : 11,
        GD : -7,
        points : 2,
        form : ["L", "D", "D", "L"],
    },
    "BURNLEY" : {
        played : 4,
        won : 0,
        drawn : 1,
        lost : 3,
        for : 3,
        against : 8,
        GD : -5,
        points : 1,
        form : ["L", "L", "D", "L"],
    },
    "NEWCASTLE UNITED" : {
        played : 4,
        won : 0,
        drawn : 1,
        lost : 3,
        for : 5,
        against : 12,
        GD : -7,
        points : 1,
        form : ["L", "L", "D", "L"],
    },
    "NORWICH CITY" : {
        played : 4,
        won : 0,
        drawn : 0,
        lost : 4,
        for : 1,
        against : 11,
        GD : -10,
        points : 0,
        form : ["L", "L", "L", "L"],
    }
}
// Table positions
let p = 1;
// Updating the premier league table - table.html
let updateTable = () => {
    let mainTable = document.querySelector("#table");
    for(let team in table){
        // Inserting new row for the team
        let row = mainTable.insertRow(-1);
        // Creating & appending the table row head
        let headCell = document.createElement("th");
        headCell.setAttribute("scope", "row");
        headCell.innerHTML = p;
        headCell.classList.add("text-center");
        row.appendChild(headCell);
        // Inserting the team name
        let teamName = row.insertCell(-1);
        teamName.classList.add("fw-bold");
        teamName.innerHTML = team;
        // Inserting all the cells with values
        for(let stats in table[team]){
           let newCell =  row.insertCell(-1);
           newCell.classList.add("text-center");
           if(stats != "form") {
                newCell.innerHTML = table[team][stats];
           } 
           else {
               for(let i = 0; i < 4; i++){
                   let badge = document.createElement("span");
                   if(table[team][stats][i] === "W") badge.classList.add("badge", "bg-success", "pt-2", "ms-2");
                   else if(table[team][stats][i] === "L") badge.classList.add("badge", "bg-danger", "pt-2", "ms-2");
                   else badge.classList.add("badge", "bg-dark", "pt-2", "ms-2");
                   badge.innerHTML = table[team][stats][i];
                   newCell.appendChild(badge);
               }
           }
        }
        // Incrementing the position by 1
        p++;
    }
}

// ---------------------------------top-rated-players.html---------------------------------
// Top Rated Players
let players = [ 
    {
        name : "LIONEL MESSI",
        team : "Paris Saint German",
        rank : 1,
        img : "../img/top-rated-players/messi-4.jpg",
    },
    {
        name : "LEWANDOWSKI",
        team : "Bayern Munich",
        rank : 2,
        img : "../img/top-rated-players/lewa.jpg",

    },
    {
        name : "RONALDO",
        team : "Manchester United",
        rank : 3,
        img : "../img/top-rated-players/ronaldo.jpg",
    },
    {
        name : "DE BRUYNE",
        team : "Man City",
        rank : 4,
        img : "../img/top-rated-players/de-bruyne.jpg",
    },
    {
        name : "MBAPPE",
        team : "Paris Saint German",
        rank : 5,
        img : "../img/top-rated-players/mbappe.jpg",
    },
    {
        name : "NEYMAR JR",
        team : "Paris Saint German",
        rank : 6,
        img : "../img/top-rated-players/neymar.jpg",
    },
    {
        name : "OBLAK",
        team : "Atletico Madrid",
        rank : 7,
        img : "../img/top-rated-players/oblak.jpg",
    },
    {
        name : "KANE",
        team : "Totenham Hotspur",
        rank : 8,
        img : "../img/top-rated-players/kane.jpg",
    },
    {
        name : "KANTE",
        team : "Chelsea",
        rank : 9,
        img : "../img/top-rated-players/kante.jpg",
    },
    {
        name : "NEUER",
        team : "Bayern Munich",
        rank : 10,
        img : "../img/top-rated-players/nuer.png",
    },
    {
        name : "SALAH",
        team : "Liverpool",
        rank : 11,
        img : "../img/top-rated-players/salah.jpg",
    },
    {
        name : "BENZEMA",
        team : "Real Madrid",
        rank : 12,
        img : "../img/top-rated-players/benzema.jpg",
    },
]
// Updating players to the html page
let updatePlayers = () => {
    let mainPlayerCont = document.getElementById("player-cont");
    for(let i = 0; i < Math.ceil(players.length / 3); i++) {
        // Creating a new row
        let newRow = document.createElement("div");
        newRow.classList.add("row", "m-0");
        // Creating child divs
        for(let j = i * 3; j < (i * 3) + 3; j++){
            let newCol = document.createElement("div");
            newCol.classList.add("col-lg-4", "player-col", "d-flex", "justify-content-center", "mb-5");
            // Child elements for the col div
            let playerRank = document.createElement("h1");
            playerRank.classList.add("player-rank");
            playerRank.innerHTML = players[j].rank;
            let playerName = document.createElement("h4");
            playerName.classList.add("player-name");
            playerName.innerHTML = players[j].name;
            let playerImg = document.createElement("img");
            playerImg.setAttribute("src", players[j].img);
            playerImg.setAttribute("alt", players[j].name);
            playerImg.classList.add("img-fluid", "rounded", "player-img");
            // Appending the child elements to the div
            newCol.append(playerRank, playerName, playerImg);
            // Appending the div to th new Row
            newRow.appendChild(newCol);
        } 
        // Appending the new Row to the parent div
        mainPlayerCont.appendChild(newRow);
    }
}

// ---------------------------------top-scorers.html---------------------------------
let topScorers = [
    {
        name : "Michail Antonio",
        rank : 1,
        goals : 4,
        assist : 3,
        played : 4,
    },
    {
        name : "Bruno Fernandes",
        rank : 2,
        goals : 4,
        assist : 0,
        played : 4,
    },
    {
        name : "Mohamed Salah",
        rank : 3,
        goals : 3,
        assist : 2,
        played : 4,
    },
    {
        name : "Dominic Calvert-Lewin",
        rank : 4,
        goals : 3,
        assist : 0,
        played : 3,
    },
    {
        name : "Romelu Lukaku",
        rank : 5,
        goals : 3,
        assist : 0,
        played : 3,
    },
    {
        name : "Demarai Gray",
        rank : 6,
        goals : 3,
        assist : 0,
        played : 4,
    },
    {
        name : "Mason Greenwood",
        rank : 7,
        goals : 3,
        assist : 0,
        played : 4,
    },
    {
        name : "Saïd Benrahma",
        rank : 8,
        goals : 2,
        assist : 2,
        played : 4,
    },
    {
        name : "Allan Saint-Maximin",
        rank : 9,
        goals : 2,
        assist : 2,
        played : 5,
    },
    {
        name : "Conor Gallagher",
        rank : 10,
        goals : 2,
        assist : 1,
        played : 3,
    },
    {
        name : "Ferran Torres",
        rank : 11,
        goals : 2,
        assist : 1,
        played : 4,
    },
    {
        name : "Danny Ings",
        rank : 12,
        goals : 2,
        assist : 1,
        played : 4,
    },
    {
        name : "Jamie Vardy",
        rank : 13,
        goals : 2,
        assist : 1,
        played : 4,
    },
    {
        name : "Pablo Fornals",
        rank : 14,
        goals : 2,
        assist : 1,
        played : 4,
    },
    {
        name : "Odsonne Édouard",
        rank : 15,
        goals : 2,
        assist : 0,
        played : 1,
    },
    {
        name : "Cristiano Ronaldo",
        rank : 16,
        goals : 2,
        assist : 0,
        played : 1,
    },
    {
        name : "Callum Wilson",
        rank : 17,
        goals : 2,
        assist : 0,
        played : 3,
    },
    {
        name : "Son Heung-Min",
        rank : 18,
        goals : 2,
        assist : 0,
        played : 3,
    },
    {
        name : "Diogo Jota",
        rank : 19,
        goals : 2,
        assist : 0,
        played : 4,
    },
    {
        name : "Sadio Mané",
        rank : 20,
        goals : 2,
        assist : 0,
        played : 4,
    },
];
let topAssists = [
    {
        name : "Paul Pogba",
        rank : 1,
        assist : 7,
        goals : 0,
        played : 4,
    },
    {
        name : "Michail Antonio",
        rank : 2,
        assist : 3,
        goals : 4,
        played : 4,
    },
    {
        name : "Gabriel Jesus",
        rank : 3,
        assist : 3,
        goals : 1,
        played : 4,
    },
    {
        name : "Abdoulaye Doucouré",
        rank : 4,
        assist : 3,
        goals : 1,
        played : 4,
    },
    {
        name : "Mohamed Salah",
        rank : 5,
        assist : 2,
        goals : 3,
        played : 4,
    },
    {
        name : "Saïd Benrahma",
        rank : 6,
        assist : 2,
        goals : 2,
        played : 4,
    },
    {
        name : "Allan Saint-Maximin",
        rank : 7,
        assist : 2,
        goals : 2,
        played : 5,
    },
    {
        name : "Reece James",
        rank : 8,
        assist : 2,
        goals : 1,
        played : 3,
    },
    {
        name : "Andros Townsend",
        rank : 9,
        assist : 2,
        goals : 1,
        played : 4,
    },
    {
        name : "Mateo Kovacic",
        rank : 10,
        assist : 2,
        goals : 1,
        played : 4,
    },
    {
        name : "Patrick Bamford",
        rank : 11,
        assist : 2,
        goals : 1,
        played : 5,
    },
    {
        name : "Ricardo Pereira",
        rank : 12,
        assist : 2,
        goals : 0,
        played : 3,
    },
    {
        name : "Pascal Groß",
        rank : 13,
        assist : 2,
        goals : 0,
        played : 3,
    },
    {
        name : "Trent Alexander-Arnold",
        rank : 14,
        assist : 2,
        goals : 0,
        played : 4,
    },
    {
        name : "Conor Gallagher",
        rank : 15,
        assist : 1,
        goals : 2,
        played : 3,
    },
    {
        name : "Ferran Torres",
        rank : 16,
        assist : 1,
        goals : 2,
        played : 4,
    },
    {
        name : "Danny Ings",
        rank : 17,
        assist : 1,
        goals : 2,
        played : 4,
    },
    {
        name : "Jamie Vardy",
        rank : 18,
        assist : 1,
        goals : 2,
        played : 4,
    },
    {
        name : "Pablo Fornals",
        rank : 19,
        assist : 1,
        goals : 2,
        played : 4,
    },
    {
        name : "Riyad Mahrez",
        rank : 20,
        assist : 1,
        goals : 1,
        played : 3,
    },
];
// Updating top scorers to the page
let updateTopScorers = () => {
    let topscorersCont = document.getElementById("topScorers");
    let topassistCont = document.getElementById("topAssist");
    // Updating the top scorers table
    topScorers.forEach(player => {
        // Inserting a new row for each players
        let newRow = topscorersCont.insertRow(-1);
        // Creating player ranks
        let head = document.createElement("th");
        head.setAttribute("scope", "row");
        head.innerHTML = player.rank;
        // Creating player names
        let name = document.createElement("td");
        name.classList.add("text-start", "fw-bold");
        name.innerHTML = player.name;
        // Appending all the values to new row 
        newRow.append(head, name);
        newRow.insertCell(-1).innerHTML = player.goals;
        newRow.insertCell(-1).innerHTML = player.assist;
        newRow.insertCell(-1).innerHTML = player.played;
    });
    // Updating Top assist table
    topAssists.forEach(player => {
        // Inserting a new row for each players
        let newRow = topassistCont.insertRow(-1);
        // Creating player ranks
        let head = document.createElement("th");
        head.setAttribute("scope", "row");
        head.innerHTML = player.rank;
        // Creating player names
        let name = document.createElement("td");
        name.classList.add("text-start", "fw-bold");
        name.innerHTML = player.name;
        // Appending all the values to new row 
        newRow.append(head, name);
        newRow.insertCell(-1).innerHTML = player.assist;
        newRow.insertCell(-1).innerHTML = player.goals;
        newRow.insertCell(-1).innerHTML = player.played;
    });
    console.log(topassistCont);
}


// ---------------------------------transfers.html---------------------------------
let transfernews = {
    "16 September" : {
        "English Football League" : ["Jordan Cook [Unattached - Hartlepool] Free", "Mike Fondop [Unattached - Hartlepool] Free"]
    },
    "13 September" : {
        "English Football League" : ["Adlene Guedioura [Unattached - Sheffield United]", "Connor Wickham [Unattached - Preston]"]
    },
    "10 September" : {
        "Scottish Premiership" : ["Efe Ambrose [Unattached - St Johnstone]"],
        "English Football League" : ["Kieran Agard [Unattached - Plymouth]", "Ryan McLaughlin [Unattached - Morecambe]", "Joseph Olowu [Unattached - Doncaster]"]
    },
    "9 September" : {
        "Premier League" : ["Mathias Jorgensen [Unattached - Brentford]"]
    },
    "7 September" : {
        "Scottish Premiership" : ["Matt Millar [Newcastle Jets - St Mirren] Free", "Barry McKay [Swansea - Hearts] Free"],
        "English Football League" : ["Kean Bryan [Unattached - West Brom]", "Jake Eastwood [Sheffield United - Portsmouth] Emergency loan", "Stephen Henderson [Unattached - Charlton]", "Joel Lynch [Unattached - Crawley]"]
    },
    "6 September" : {
        "English Football League" : ["Joe Dodoo [Unattached - Doncaster]", "Pape Souare [Unattached - Charlton]"]
    },
    "4 September" : {
        "English Football League" : ["Glenn Whelan [Unattached - Bristol Rovers]"],
        "International" : ["Radamel Falcao [Galatasaray - Rayo Vallecano] Free"]
    }, 
    "3 September" : {
        "English Football League" : ["Danny Amos [Unattached - Port Vale] Free"],
        "Women's Super League" : ["Gemma Davison [Tottenham - Aston Villa] Free", "Tobin Heath [Unattached - Arsenal]"]
    },
    "2 September" : {
        "Premier League" : ["Tino Anjorin [Chelsea - Lokomotiv Moscow] Loan"],
        "English Football League" : ["Rodrigo Ely [Unattached - Nottingham Forest]", "Josh Hawkes [Sunderland - Tranmere] Loan", "Remy Vita [Bayern Munich - Barnsley] Loan"],
        "Women's Super League" : ["Filippa Angeldahl [BK Hacken - Manchester City] Undisclosed", "Emily Gielnik [Vittsjo GIK - Aston Villa] Undisclosed", "Arabella Suttie [Unattached - Birmingham]"]
    }
};
// Updating transfer new to the html page
let updateTransfers = () => {
    let newsCont = document.getElementById("transfers");
    for(let day in transfernews) {
        // creating heading container
        let headCont = document.createElement("div");
        headCont.classList.add("col-lg-12", "head-cont", "text-dark", "d-flex", "justify-content-center", "p-2");
        let heading = document.createElement("h1");
        heading.classList.add("p-0", "m-0", "heading");
        heading.innerHTML = day;
        // Appending the heading to headCont div
        headCont.appendChild(heading);
        // Appending the headCont to main div
        newsCont.append(headCont);

        for(let league in transfernews[day]) {
            // Creating container for league name
            let leagueCont = document.createElement("div");
            leagueCont.classList.add("col-lg-12", "head-cont", "text-light", "bg-dark", "d-flex", "p-2");
            let heading2 = document.createElement("h1");
            heading2.classList.add("p-0", "m-0", "heading");
            heading2.innerHTML = league;
            // Appending the heading to leagueCont div
            leagueCont.appendChild(heading2);
            // Appending the leagueCont to main div
            newsCont.append(leagueCont);

            // Creating a container for all transfer news
            let trans = document.createElement("div");
            trans.classList.add("bg-light", "p-3");
            let newsList = document.createElement("ul");
            transfernews[day][league].forEach(ele => {
                let listItem = document.createElement("li");
                listItem.classList.add("mb-2");
                listItem.innerHTML = ele;
                // Adding to the list
                newsList.appendChild(listItem);
            });
            trans.appendChild(newsList);
            // Appending the transCont to main div
            newsCont.append(trans);
        }
    }
    console.log(transfers);
}


// ---------------------------------all-teams.html---------------------------------

let teams = [
    {
        name : "Real Madrid",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"
    },
    {
        name : "Barcelona",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
    },
    {
        name : "Monaco",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/AS_Monaco_FC.svg/1200px-AS_Monaco_FC.svg.png"
    },
    {
        name : "PSG",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png"
    },
    {
        name : "Rennes",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Stade_Rennais_FC.svg/1200px-Stade_Rennais_FC.svg.png"
    },
    {
        name : "Bayer Leverkusen",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Bayer_04_Leverkusen_logo.svg/1200px-Bayer_04_Leverkusen_logo.svg.png"
    },
    {
        name : "Bayern Munich",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png"
    },
    {
        name : "Borussia Dortmund",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png"
    },
    {
        name : "Frankfurt",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Eintracht_Frankfurt_Logo.svg/1200px-Eintracht_Frankfurt_Logo.svg.png"
    },
    {
        name : "Hoffenheim",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Logo_TSG_Hoffenheim.svg/1200px-Logo_TSG_Hoffenheim.svg.png"
    },
    {
        name : "RB Leipzig",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/1200px-RB_Leipzig_2014_logo.svg.png"
    },
    {
        name : "Schalke",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/FC_Schalke_04_Logo.svg/1200px-FC_Schalke_04_Logo.svg.png"
    },
    {
        name : "AC Milan",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png"
    },
    {
        name : "Atalanta",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/AtalantaBC.svg/1200px-AtalantaBC.svg.png"
    },
    {
        name : "Inter Milan",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png"
    },
    {
        name : "Juventus",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/1200px-Juventus_FC_2017_icon_%28black%29.svg.png"
    },
    {
        name : "Lazio",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/1200px-S.S._Lazio_badge.svg.png"
    },
    {
        name : "Napoli",
        logo : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/SSC_Neapel.svg/1200px-SSC_Neapel.svg.png"
    },
    {
        name : "Roma",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/AS_Roma_logo_%282017%29.svg/1200px-AS_Roma_logo_%282017%29.svg.png"
    },
    {
        name : "Atletico Madrid",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png"
    },
];
let updateTeams = () => {
    let teamCont = document.getElementById("topteams");
    
    for(let i = 0; i < Math.ceil(teams.length/4); i++){
        // creating new Row
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        // Creating new child divs
        for(let j = i * 4; j < (i*4) + 4; j++){
            // creating new column for each team
            let newChild = document.createElement("div");
            newChild.classList.add("col-md-3", "mt-5", "d-flex", "flex-column", "align-items-center", "justify-content-between");
            // Creating team logo
            let logoCont = document.createElement("div");
            logoCont.classList.add("bg-light", "p-2", "h-100", "rounded", "d-flex", "justify-content-center", "align-items-center");
            let teamLogo = document.createElement("img");
            teamLogo.setAttribute("src", teams[j].logo);
            teamLogo.setAttribute("alt", teams[j].name);
            teamLogo.classList.add("img-fluid", "w-50");
            logoCont.appendChild(teamLogo);
            // Team name
            let teamName = document.createElement("h3");
            teamName.classList.add("text-light", "fs-4", "mt-3", "team-names");
            teamName.innerHTML = teams[j].name;
            // Appending the image and name to the new column
            newChild.append(logoCont, teamName);
            // Appending the newColumn to the row
            newRow.appendChild(newChild);
        }
        // Appending the new row to the main cont
        teamCont.appendChild(newRow);
    }
};

// ---------------------------------leagues.html---------------------------------
let leagues = [
    {
        name : "Premier League",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
    },
    {
        name : "Championship",
        logo : "/img/leagueLogos/efl.png"
    },
    {
        name : "National League",
        logo : "https://www.chorleyfc.com/wp-content/uploads/2019/01/vanaramanewsize.png"
    },
    {
        name : "League One",
        logo : "/img/leagueLogos/league1.png"
    },
    {
        name : "FA Cup",
        logo : "http://www.logo-designer.co/wp-content/uploads/2020/08/2020-the-fa-reveals-new-emirates-fa-cup-logo-design.png"
    },
    {
        name : "EFL Cup",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/EFL_%28Carabao%29_Cup_Logo.svg/1200px-EFL_%28Carabao%29_Cup_Logo.svg.png"
    },
    {
        name : "Scottish Premiership",
        logo : "https://i1.wp.com/scefl.com/wp-content/uploads/2020/05/scottish-premiership.jpg?resize=542%2C289&ssl=1"
    },
    {
        name : "league two",
        logo : "/img/leagueLogos/league2.jpg"
    },
    {
        name : "Champions League",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png"
    },
    {
        name : "Scottish Championship",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Scottish_Championship.svg/1200px-Scottish_Championship.svg.png"
    },
    {
        name : "Europa League",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Europa_League.svg/1200px-Europa_League.svg.png"
    },
    {
        name : "FIFA Men's World Cup",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/2022_FIFA_World_Cup.svg/1200px-2022_FIFA_World_Cup.svg.png"
    },
    {
        name : "Scottish Football",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Scottish_Professional_Football_League.svg/1200px-Scottish_Professional_Football_League.svg.png"
    },
    {
        name : "Scottish cup",
        logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStTHgRSGlCeogGHNqouxB0-m8YHSBgv2zTL-bxk7By9TymYDLOHiyqfvIhjjtfv6ArgE&usqp=CAU"
    },
    {
        name : "Scottish League One",
        logo : "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Scottish_League_1.svg/1200px-Scottish_League_1.svg.png"
    },
];
let updateLeague = () => {
    let leagueCont = document.getElementById("topLeagues");
    
    for(let i = 0; i < Math.ceil(teams.length/5); i++){
        // creating new Row
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        // Creating new child divs
        for(let j = i * 3; j < (i*3) + 3; j++){
            // creating new column for each league
            let newChild = document.createElement("div");
            newChild.classList.add("col-md-4", "mt-5", "d-flex", "flex-column", "align-items-center", "justify-content-between");
            // Creating league logo
            let logoCont = document.createElement("div");
            logoCont.classList.add("bg-light", "p-2", "h-100", "rounded", "d-flex", "justify-content-center", "align-items-center");
            let leagueLogo = document.createElement("img");
            leagueLogo.setAttribute("src", leagues[j].logo);
            leagueLogo.setAttribute("alt", leagues[j].name);
            leagueLogo.classList.add("img-fluid", "w-50");
            logoCont.appendChild(leagueLogo);
            // league name
            let leagueName = document.createElement("h3");
            leagueName.classList.add("text-light", "fs-4", "mt-3", "team-names");
            leagueName.innerHTML = leagues[j].name;
            // Appending the image and name to the new column
            newChild.append(logoCont, leagueName);
            // Appending the newColumn to the row
            newRow.appendChild(newChild);
        }
        // Appending the new row to the main cont
        leagueCont.appendChild(newRow);
    }
}