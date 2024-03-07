document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed')
  const cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
      card.classList.add('is-hidden');
  });
  function showCard(cardId) {
    cards.forEach(function(card) {
        card.classList.add('is-hidden');
    });
    // Show the specified card
    const cardToShow = document.getElementById(cardId);
    if (cardToShow) {
        cardToShow.classList.remove('is-hidden');
    }
}
})
const ronQuote = document.getElementById('ronQuote');
const harryPotterQuote = document.getElementById('harryPotterQuote');
const randomFact = document.getElementById('randomFact');
const today = dayjs();

//variable for yesterdays date
const todayMinus = dayjs().subtract(1, 'day');
//use this for sports card
const yesterday = todayMinus.format('YYYY-MM-DD');
const date = document.getElementById('date');
const time = document.getElementById('time');
const weather = document.getElementById('weather');
const workspace = document.getElementById('workspace');
const riddle = document.getElementById('riddle')

date.textContent = 'Today is ' + today.format('MMMM D, YYYY');

function displayTime() {
  const currentTime = dayjs().format(' hh:mm:ss a');
  time.textContent = 'The Time is ' + currentTime;
}

setInterval(displayTime, 1000);

// WEATHER API
function getWeather(city, state, country) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "," + country + "&appid=9ee9271b9afcecf4a8ec627a8439aa7b&units=imperial")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
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
  document.getElementById("search-btn").addEventListener("click", function () {
    const query = document.getElementById("query-input").value;
    if (query.trim() !== "") {
      fetchNews(query);
    } else {
      alert("Please enter a query.");
    }
  });
});

// SPORTS API
const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "2eb6e48453a25b9ed67a39562fe656a3");
myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


//TODO: maybe ask for user input and display prior three scores from favorite team?
function getSports(date) {
  fetch("https://v1.basketball.api-sports.io/games?league=12&season=2023-2024&date=" + date, requestOptions)
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      //TODO: need to create a for loop for this lol
      const createNewSection0 = document.createElement('section')
      const createAwayTeam0 = document.createElement('h4')
      const createAwayScore0 = document.createElement('p')
      const createHomeTeam0 = document.createElement('h4')
      const createHomeScore0 = document.createElement('p')
      createNewSection0.classList.add('miniCards')
      createAwayTeam0.textContent = data.response[0].teams.away.name
      createAwayScore0.textContent = data.response[0].scores.away.total
      createNewSection0.append(createAwayTeam0)
      createNewSection0.append(createAwayScore0)
      createHomeTeam0.textContent = data.response[0].teams.home.name
      createHomeScore0.textContent = data.response[0].scores.home.total
      createNewSection0.append(createHomeTeam0)
      createNewSection0.append(createHomeScore0)
      nbaScores.append(createNewSection0)
      //seriously...
      const createNewSection1 = document.createElement('section')
      const createAwayTeam1 = document.createElement('h4')
      const createAwayScore1 = document.createElement('p')
      const createHomeTeam1 = document.createElement('h4')
      const createHomeScore1 = document.createElement('p')
      createNewSection1.classList.add('miniCards')
      createAwayTeam1.textContent = data.response[1].teams.away.name
      createAwayScore1.textContent = data.response[1].scores.away.total
      createNewSection1.append(createAwayTeam1)
      createNewSection1.append(createAwayScore1)
      createHomeTeam1.textContent = data.response[1].teams.home.name
      createHomeScore1.textContent = data.response[1].scores.home.total
      createNewSection1.append(createHomeTeam1)
      createNewSection1.append(createHomeScore1)
      nbaScores.append(createNewSection1)
      //this is ridiculous...
      const createNewSection2 = document.createElement('section')
      const createAwayTeam2 = document.createElement('h4')
      const createAwayScore2 = document.createElement('p')
      const createHomeTeam2 = document.createElement('h4')
      const createHomeScore2 = document.createElement('p')
      createNewSection2.classList.add('miniCards')
      createAwayTeam2.textContent = data.response[2].teams.away.name
      createAwayScore2.textContent = data.response[2].scores.away.total
      createNewSection2.append(createAwayTeam2)
      createNewSection2.append(createAwayScore2)
      createHomeTeam2.textContent = data.response[2].teams.home.name
      createHomeScore2.textContent = data.response[2].scores.home.total
      createNewSection2.append(createHomeTeam2)
      createNewSection2.append(createHomeScore2)
      nbaScores.append(createNewSection2)
    })
}
getSports(yesterday)

// riddle API
function riddleCard() {
  const apiKey = 'e//0Bd/EB6LkCS4euqvh5w==kbmISpXkV7swqkZO'
  fetch('https://api.api-ninjas.com/v1/riddles', {
    headers: {
      'X-Api-Key': apiKey,
    },
  })
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data)
      console.log(data[0].title)
      console.log(data[0].question)
      console.log(data[0].answer)
      const createElement = document.createElement('p')
      createElement.innerHTML = '<strong>Title: </strong> ' + data[0].title + '<strong><br>Question: </strong>' + data[0].question + '<strong><br>Answer: </strong> ' + data[0].answer;
      riddle.append(createElement)
    })

}
riddleCard();

// Dropdown menu function
function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
