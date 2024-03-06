const ronQuote = document.getElementById('ronQuote');
const harryPotterQuote = document.getElementById('harryPotterQuote');
const randomFact = document.getElementById('randomFact');
const today = dayjs();
const date = document.getElementById('date');
const time = document.getElementById('time');
const weather = document.getElementById('weather');
const workspace = document.getElementById('workspace');

date.textContent = 'Today is ' + today.format('MMMM D, YYYY');

function displayTime() {
    const currentTime = dayjs().format(' hh:mm:ss a');
    time.textContent = 'The Time is ' + currentTime;
}

setInterval(displayTime, 1000);

// WEATHER API
function getWeather(city, state, country) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "," + country + "&appid=9ee9271b9afcecf4a8ec627a8439aa7b&units=imperial")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            console.log(data.weather[0].main);
            console.log(data.main.temp);
            console.log(data.sys.sunrise);
            console.log(data.sys.sunset);
            const createElement = document.createElement('p');
            createElement.textContent = data.weather[0].main + 'the temperature is ' + data.main.temp + 'sunrise: ' + data.sys.sunrise + 'sunset ' + data.sys.sunset;
            weather.append(createElement);
        });
}

getWeather("irvine", "california", "usa");

//Ron Swanson quote API
function ronSwanson() {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const createElement = document.createElement('p');
            createElement.textContent = `"` + data + `"`;
            ronQuote.append(createElement);
        });
}

ronSwanson();

//Harry Potter Quotes API
function harryPotter() {
    fetch("https://api.portkey.uk/quote")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            const createElement = document.createElement('p');
            createElement.textContent = data.quote + data.speaker + data.story;
            harryPotterQuote.append(createElement);
        });
}

harryPotter();

//Random Facts API
function randomFactCard() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data.text);
            const createElement = document.createElement('p');
            createElement.textContent = [data.text];
            randomFact.append(createElement);
        });
}

randomFactCard();

function setBookmark(website) {
    const createNewSection = document.createElement('section');
    const createAElement = document.createElement('a');
    createNewSection.classList.add('card');
    createAElement.textContent = website;
    createAElement.href = website;
    createNewSection.append(createAElement);
    workspace.append(createNewSection);
}

// news API
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "pub_394864a477ec1ed1904cc024ec9c031746837";
  
  // Function to fetch news data based on user query
  function fetchNews(query) {
    const language = "en";
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}&language=${language}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = ''; // Clear previous results
        
        // Loop through the first three news items
        for (let i = 0; i < 3; i++) {
          const item = data.results[i];
          if (item && item.title && item.link) {
            // Create a card element
            const card = document.createElement("div");
            card.classList.add("card");

            // Create a title element
            const titleElement = document.createElement("h3");
            titleElement.textContent = item.title;

            // Create a link element
            const linkElement = document.createElement("a");
            linkElement.textContent = "Read more";
            linkElement.href = item.link;
            linkElement.target = "_blank"; // Open link in a new tab

            // Append title and link to the card
            card.appendChild(titleElement);
            card.appendChild(linkElement);

            // Append the card to the news container
            newsContainer.appendChild(card);
          }
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }
  
  // Event listener for search button click
  document.getElementById("search-btn").addEventListener("click", function() {
    const query = document.getElementById("query-input").value;
    if (query.trim() !== "") {
      fetchNews(query);
    } else {
      alert("Please enter a query.");
    }
  });
});
