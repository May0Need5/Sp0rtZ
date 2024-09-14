document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("#qv-table tbody");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const sportChecked = document.querySelector('[name="sport"]:checked');
    

   
        
    

    let playersData = []; // To store the original player data

    fetch("https://beta.ownersbox.com/pps-web/getQuickview2?limit=120")
        .then(response => response.json())
        .then(data => {
            newsData = data; // Store the original data
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
            <td style="">${player.sport || ''}</td>
            <td style="">${player.news.type || ''}</td>
            <td style="">${player.news.impact || ''}</td>

           
                   
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
            

            if (Array.isArray(player.player)) {
                const headerRow = createHeaderRow();
                tableBody.appendChild(headerRow);

                player.player.forEach(name => {
                    
                    const NameRow = createNameRow(name);
                    tableBody.appendChild(nameRow);
                });
            }
        });
    }

   

    function createNameRow(name) {

        
        // Create and return a row element with game data
        const nameRow = document.createElement("tr");
        nameRow.id = 'bitch';
        
        nameRow.innerHTML = `
            
           
            <td>${player.player.name || ''}</td>
           
        `;
        return NameRow;
        
    }

//     function createHeaderRow() {
//         // Add a sub-header row for the games by date rows.
//         const headerRow = document.createElement("tr");
//         headerRow.id = 'loser';
//         headerRow.innerHTML = `
        
//             <td style="border-bottom-left-radius: 5px; box-shadow: inset 7px 0px 0 #343434,-7px 0px 0 #343434;">Date</td>
//             <td>Day</td>
//             <td>Opp</td>
//             <td>Proj</td>
//             <td>Game ID</td>
//             <td>GS</td>
//             <td>Opp Rank</td>
//             <td>TS</td>
//             <td>Status</td>
//             <td>Starter?</td>
//             <td style="background: #343434; border-right: 1px solid black;"></td>
            
//         `;
//         return headerRow;
        
//     }


});