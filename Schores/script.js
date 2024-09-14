document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#player-table tbody");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const sportChecked = document.querySelector('[name="sport"]:checked');
    

   
        
    

    let playersData = []; // To store the original player data

    fetch("https://app.ownersbox.com/fsp/player/getPlayerList?sport=" + sportChecked.value)
        .then(response => response.json())
        .then(data => {
            playersData = data; // Store the original data
            renderTable(data);
            searchInput.addEventListener("input", handleSearch);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    function renderTable(data) {
        tableBody.innerHTML = ""; // Clear the table

        data.forEach(player => {
            const row = createPlayerRow(player);
            tableBody.appendChild(row);
        });
    }


    

    function createPlayerRow(player) {
        // Create and return a row element with player data
        const row = document.createElement("tr");
        row.id = 'playerNameRow';
        row.innerHTML = `
            <td style="width: 238px; text-align: left; padding-left: 16px;">${player.name || ''}</td>
            <td style="width: 56px;">${player.team || ''}</td>
            <td style="width: 63px;">${player.position || ''}</td>
            <td style="width: 65px;">${player.status || ''}</td>
            <td style="width: 137px;">${player.injuryDetails?.ext_desc || ''}</td>
            <td style="width: 230px;">${player.injuryDetails?.type || ''}</td>
            <td style="width: 109px;">${player.id || ''}</td>
            <td style="width: 143px;">${player.number || ''}</td>
            <td style="width: 54px;">${player.prevGame?.fpts || ''}</td>
            <td style="width: 57px;">${player.prevGame?.opp || ''}</td>
            
            <td>${player.heatInfo || ''}</td>
        `;
        return row;
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        const filteredPlayers = playersData.filter(player => player.name.toLowerCase().includes(query));

        tableBody.innerHTML = ""; // Clear the table
        searchResults.innerHTML = "";

        if (query.trim() === "") {
            renderTable(playersData);
        } else {
            renderSearchResults(filteredPlayers);
            searchResults.innerHTML = `<p>Showing ${filteredPlayers.length} results for '${query}'</p>`;
        }
    }

    function renderSearchResults(filteredPlayers) {
        filteredPlayers.forEach(player => {
            const playerRow = createPlayerRow(player);
            tableBody.appendChild(playerRow);
            

            if (Array.isArray(player.games)) {
                const headerRow = createHeaderRow();
                tableBody.appendChild(headerRow);

                player.games.forEach(game => {
                    
                    const gameRow = createGameRow(game);
                    tableBody.appendChild(gameRow);
                });
            }
        });
    }

   

    function createGameRow(game) {

        
        // Create and return a row element with game data
        const gameRow = document.createElement("tr");
        gameRow.id = 'bitch';
        
        gameRow.innerHTML = `
            
            <td style="box-shadow: inset 9px 0px 0 #343434, inset 11px 0px 0 #fff;" class="daterow">${game.date || ''}</td>
            <td class="daterow">${game.day || ''}</td>
            <td class="daterow">${game.game || ''}</td>
            <td class="daterow">${game.proj || ''}</td>
            <td class="daterow">${game.id || ''}</td>
            <td class="daterow">${game.gs || ''}</td>
            <td class="daterow">${game.oprk || ''}</td>
            <td class="daterow">${game.ts || ''}</td>
            <td class="daterow">${game.status || ''}</td>
            <td class="daterow">${game.info?.starter || ''}</td>
            <td style="background: #343434; border-right: 1px solid black;" class="daterow"></td>
        `;
        return gameRow;
        
    }

    function createHeaderRow() {
        // Add a sub-header row for the games by date rows.
        const headerRow = document.createElement("tr");
        headerRow.id = 'loser';
        headerRow.innerHTML = `
        
            <td style="border-bottom-left-radius: 5px; box-shadow: inset 7px 0px 0 #343434,-7px 0px 0 #343434;">Date</td>
            <td>Day</td>
            <td>Opp</td>
            <td>Proj</td>
            <td>Game ID</td>
            <td>GS</td>
            <td>Opp Rank</td>
            <td>TS</td>
            <td>Status</td>
            <td>Starter?</td>
            <td style="background: #343434; border-right: 1px solid black;"></td>
            
        `;
        return headerRow;
        
    }


});


document.addEventListener("change", function () {
    const tableBody = document.querySelector("#player-table tbody");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    var sportChecked = document.querySelector('[name="sport"]:checked');
   
        
    

    let playersData = []; // To store the original player data

    fetch("https://app.ownersbox.com/fsp/player/getPlayerList?sport=" + sportChecked.value)
        .then(response => response.json())
        .then(data => {
            playersData = data; // Store the original data
            renderTable(data);
            searchInput.addEventListener("input", handleSearch);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

    function renderTable(data) {
        tableBody.innerHTML = ""; // Clear the table

        data.forEach(player => {
            const row = createPlayerRow(player);
            tableBody.appendChild(row);
        });
    }


    

    function createPlayerRow(player) {
        // Create and return a row element with player data
        const row = document.createElement("tr");
        row.id = 'playerNameRow';
        row.innerHTML = `
            <td style="width: 238px; text-align: left; padding-left: 16px;">${player.name || ''}</td>
            <td style="width: 56px;">${player.team || ''}</td>
            <td style="width: 63px;">${player.position || ''}</td>
            <td style="width: 65px;">${player.status || ''}</td>
            <td style="width: 137px;">${player.injuryDetails?.ext_desc || ''}</td>
            <td style="width: 230px;">${player.injuryDetails?.type || ''}</td>
            <td style="width: 109px;">${player.id || ''}</td>
            <td style="width: 143px;">${player.number || ''}</td>
            <td style="width: 54px;">${player.prevGame?.fpts || ''}</td>
            <td style="width: 57px;">${player.prevGame?.opp || ''}</td>
            
            <td>${player.heatInfo || ''}</td>
        `;
        return row;
    }

    function handleSearch() {
        const query = searchInput.value.toLowerCase();
        const filteredPlayers = playersData.filter(player => player.name.toLowerCase().includes(query));

        tableBody.innerHTML = ""; // Clear the table
        searchResults.innerHTML = "";

        if (query.trim() === "") {
            renderTable(playersData);
        } else {
            renderSearchResults(filteredPlayers);
            searchResults.innerHTML = `<p>Showing ${filteredPlayers.length} results for '${query}'</p>`;
        }
    }

    function renderSearchResults(filteredPlayers) {
        filteredPlayers.forEach(player => {
            const playerRow = createPlayerRow(player);
            tableBody.appendChild(playerRow);
            

            if (Array.isArray(player.games)) {
                const headerRow = createHeaderRow();
                tableBody.appendChild(headerRow);

                player.games.forEach(game => {
                    
                    const gameRow = createGameRow(game);
                    tableBody.appendChild(gameRow);
                });
            }
        });
    }

   

    function createGameRow(game) {

        
        // Create and return a row element with game data
        const gameRow = document.createElement("tr");
        gameRow.id = 'bitch';
        
        gameRow.innerHTML = `
            
            <td style="box-shadow: inset 9px 0px 0 #343434, inset 11px 0px 0 #fff;" class="daterow">${game.date || ''}</td>
            <td class="daterow">${game.day || ''}</td>
            <td class="daterow">${game.game || ''}</td>
            <td class="daterow">${game.proj || ''}</td>
            <td class="daterow">${game.id || ''}</td>
            <td class="daterow">${game.gs || ''}</td>
            <td class="daterow">${game.oprk || ''}</td>
            <td class="daterow">${game.ts || ''}</td>
            <td class="daterow">${game.status || ''}</td>
            <td class="daterow">${game.info?.starter || ''}</td>
            <td style="background: #343434; border-right: 1px solid black;" class="daterow"></td>
        `;
        return gameRow;
        
    }

    function createHeaderRow() {
        // Add a sub-header row for the games by date rows.
        const headerRow = document.createElement("tr");
        headerRow.id = 'loser';
        headerRow.innerHTML = `
        
            <td style="border-bottom-left-radius: 5px; box-shadow: inset 7px 0px 0 #343434,-7px 0px 0 #343434;">Date</td>
            <td>Day</td>
            <td>Opp</td>
            <td>Proj</td>
            <td>Game ID</td>
            <td>GS</td>
            <td>Opp Rank</td>
            <td>TS</td>
            <td>Status</td>
            <td>Starter?</td>
            <td style="background: #343434; border-right: 1px solid black;"></td>
            
        `;
        return headerRow;
        
    }


});

// Assuming you have two elements with IDs "elementToClick" and "elementToToggle"

// Get a reference to the element to click
const elementToClick = document.getElementById("search-input");

// Get a reference to the element to add the class "on"
const elementToToggle = document.getElementById("elementToToggle");
const elementToToggle2 = document.getElementById("elementToToggle2");
const elementToToggle3 = document.getElementById("elementToToggle3");
const elementToToggle4 = document.getElementById("search-input");
const elementToToggle5 = document.getElementById("close");

// Add a click event listener to the element to click
elementToClick.addEventListener("click", function () {
  // Toggle the "on" class on the element to toggle
  elementToToggle.classList.add("on");
  elementToToggle2.classList.add("on");
  elementToToggle3.classList.add("on");
  elementToToggle4.classList.add("on");
  elementToToggle5.classList.add("on");
});


const elementCloseClick = document.getElementById("close");

const elementToRemove = document.getElementById("elementToToggle");
const elementToRemove2 = document.getElementById("elementToToggle2");
const elementToRemove3 = document.getElementById("elementToToggle3");
const elementToRemove4 = document.getElementById("search-input");

elementCloseClick.addEventListener("click", function () {
  // Toggle the "on" class on the element to toggle
  elementToRemove.classList.remove("on");
  elementToRemove2.classList.remove("on");
  elementToRemove3.classList.remove("on");
  elementToRemove4.classList.remove("on");
  elementCloseClick.classList.remove("on");

});


document.getElementById("newsfeed").onclick = function() {loadNews()};

function loadNews() {
  document.getElementById("rightcolumn").classList.add("on");
  document.getElementById("quickviewNews").classList.add("on");
  document.getElementById("newsfeed").classList.add("active");
  document.getElementById("provstatsfeed").classList.remove("active");
  document.getElementById("provStatus").classList.remove("on");
  
}

document.getElementById("hideNews").onclick = function() {closeNews()};

function closeNews() {
  document.getElementById("rightcolumn").classList.remove("on");
//   document.getElementById("quickviewNews").classList.remove("on");
}

document.getElementById("provstatsfeed").onclick = function() {loadStatus()};

function loadStatus() {
  document.getElementById("rightcolumn").classList.add("on");
  document.getElementById("provstatsfeed").classList.add("active");
  document.getElementById("newsfeed").classList.remove("active");
  
//   document.getElementById("update-info").classList.add("on");
  document.getElementById("quickviewNews").classList.remove("on");
  document.getElementById("provStatus").classList.add("on");
}


//Provider Last update


        // Sample JSON data
        const jsonData = {
          "news": {
            // ... (your JSON data)
            "articles": [
              {
                // ... (article details)
                "createDate": "2023-10-29T05:10:00Z"
              },
              // Add more articles here if needed
            ]
          }
        };
      
        // Get a reference to the element where you want to display the most recent "createdDate"
        const updateInfoElement = document.getElementById('update-info');
      
        // Function to find the most recent "createdDate" among the articles
        function findMostRecentCreateDate(articles) {
          let mostRecentDate = new Date(0); // Initialize with a very old date
          articles.forEach((article) => {
            const articleDate = new Date(article.createDate);
            if (articleDate > mostRecentDate) {
              mostRecentDate = articleDate;
            }
          });
          return mostRecentDate;
        }
      
        // Find the most recent "createdDate"
        const mostRecentDate = findMostRecentCreateDate(jsonData.news.articles);
      
        // Display the most recent "createdDate" in the HTML element
        updateInfoElement.innerHTML = `Last Update: ${mostRecentDate.toISOString()}`;
      


