let searchBox = document.getElementById("searchbox");
let resultsDiv = document.getElementById("results");

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

async function fetchJokes() {
    let searchValue = searchBox.value.trim().toLowerCase();
    resultsDiv.innerHTML = ""; // Clear previous results

    if (searchValue === "") {
        resultsDiv.innerHTML = "<p>Please enter a keyword to search.</p>";
        return;
    }

    try {
        let response = await fetch("https://api.chucknorris.io/jokes/search?query=" + searchValue);
        let data = await response.json();

        let filteredJokes = data.result.filter(data1 => data1.value.toLowerCase().includes(searchValue));

        if (filteredJokes.length === 0) {
            resultsDiv.innerHTML = "<p>No jokes found</p>";
            return;
        }

        resultsDiv.innerHTML = filteredJokes
            .map(data1 => `<p>${data1.value}</p>`)
        
    } catch (err) {
        console.log(err);
        resultsDiv.innerHTML = "<p>Failed to fetch data.</p>";
    }
}

// Attach debounced function to input event
searchBox.addEventListener("input", debounce(fetchJokes, 1000));
