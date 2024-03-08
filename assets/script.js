const ronQuote = document.getElementById('ronQuote');
const harryPotterQuote = document.getElementById('harryPotterQuote');
const randomFact = document.getElementById('randomFact');
const randomDog = document.getElementById('dogpicture');
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
const weatherSearch = document.getElementById('weatherSearch')
const weatherResults = document.getElementById('weatherResults')
const news = document.getElementById('query')
const newsCard = document.getElementById('news')
const nbaScoresCard = document.getElementById('nbaScoresCard')

    // Function to open the modal
    function openModal1() {
      document.getElementById("myModal1").style.display = "block";
  }
    function openModal2() {
      document.getElementById("myModal2").style.display = "block";
  }
    function openModal3() {
      document.getElementById("myModal3").style.display = "block";
  }
    function openModal4() {
      document.getElementById("myModal4").style.display = "block";
  }
    function openModal5() {
      document.getElementById("myModal5").style.display = "block";
  }
    function openModal6() {
      document.getElementById("myModal6").style.display = "block";
  }
    function openModal7() {
      document.getElementById("myModal7").style.display = "block";
  }
function openModal8() {
      document.getElementById("myModal8").style.display = "block";
  }
  
  // function to close the modal
    function closeModal1() {
      document.getElementById("myModal1").style.display = "none";
  }
    function closeModal2() {
      document.getElementById("myModal2").style.display = "none";
  }
    function closeModal3() {
      document.getElementById("myModal3").style.display = "none";
  }
    function closeModal4() {
      document.getElementById("myModal4").style.display = "none";
  }
    function closeModal5() {
      document.getElementById("myModal5").style.display = "none";
  }
    function closeModal6() {
      document.getElementById("myModal6").style.display = "none";
  }
    function closeModal7() {
      document.getElementById("myModal7").style.display = "none";
  }
    function closeModal8() {
      document.getElementById("myModal8").style.display = "none";
  }
  
  // event listeners for confirmation
confirmBtn1.addEventListener("click", function() {
  weather.classList.add('is-hidden');
  localStorage.setItem('card1', 'hidden')
  closeModal1();
});
confirmBtn2.addEventListener("click", function() {
  newsCard.classList.add('is-hidden');
  localStorage.setItem('card2', 'hidden')
  closeModal2();
});
confirmBtn3.addEventListener("click", function() {
  ronQuote.classList.add('is-hidden');
  localStorage.setItem('card3', 'hidden')
  closeModal3();
});
confirmBtn4.addEventListener("click", function() {
  harryPotterQuote.classList.add('is-hidden');
  localStorage.setItem('card4', 'hidden')
  closeModal4();
});
confirmBtn5.addEventListener("click", function() {
  riddle.classList.add('is-hidden');
  localStorage.setItem('card5', 'hidden')
  closeModal5();
});
confirmBtn6.addEventListener("click", function() {
  randomFact.classList.add('is-hidden');
  localStorage.setItem('card6', 'hidden')
  closeModal6();
});
confirmBtn7.addEventListener("click", function() {
  nbaScoresCard.classList.add('is-hidden');
  localStorage.setItem('card7', 'hidden')
  closeModal7();
});
confirmBtn8.addEventListener("click", function() {
  randomDog.classList.add('is-hidden');
  localStorage.setItem('card8', 'hidden')
  closeModal8();
});

// event listeners for cancel button
cancelBtn1.addEventListener("click", function() {
  closeModal1();
});
cancelBtn2.addEventListener("click", function() {
  closeModal2();
});
cancelBtn3.addEventListener("click", function() {
  closeModal3();
});
cancelBtn4.addEventListener("click", function() {
  closeModal4();
});
cancelBtn5.addEventListener("click", function() {
  closeModal5();
});
cancelBtn6.addEventListener("click", function() {
  closeModal6();
});
cancelBtn7.addEventListener("click", function() {
  closeModal7();
});
cancelBtn8.addEventListener("click", function() {
  closeModal8();
});
            
// Dropdown menu function
function myFunction() {
  var x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

document.getElementById('weatherSelect').addEventListener('click', addCard1)
document.getElementById('newsSelect').addEventListener('click', addCard2)
document.getElementById('swansonSelect').addEventListener('click', addCard3)
document.getElementById('potterSelect').addEventListener('click', addCard4)
document.getElementById('riddleSelect').addEventListener('click', addCard5)
document.getElementById('randomSelect').addEventListener('click', addCard6)
document.getElementById('nbaSelect').addEventListener('click', addCard7)
document.getElementById('dogSelect').addEventListener('click', addCard8)

function addCard1() {
  weather.classList.remove('is-hidden')
  localStorage.setItem("card1", 'not-hidden')
}
function addCard2() {
  newsCard.classList.remove('is-hidden')
  localStorage.setItem("card2", 'not-hidden')
}
function addCard3() {
  ronQuote.classList.remove('is-hidden')
  localStorage.setItem("card3", 'not-hidden')
}
function addCard4() {
  harryPotterQuote.classList.remove('is-hidden')
  localStorage.setItem("card4", 'not-hidden')
}
function addCard5() {
  riddle.classList.remove('is-hidden')
  localStorage.setItem("card5", 'not-hidden')
}
function addCard6() {
  randomFact.classList.remove('is-hidden')
  localStorage.setItem("card6", 'not-hidden')
}
function addCard7() {
  nbaScoresCard.classList.remove('is-hidden')
  localStorage.setItem("card7", 'not-hidden')
}
function addCard8() {
  randomDog.classList.remove('is-hidden')
  localStorage.setItem("card8", 'not-hidden')
}

function showCard1() {
  if (localStorage.getItem('card1') == 'not-hidden') {
    addCard1()
  } else {
    weather.classList.add('is-hidden');
  }
}

function showCard2() {
  if (localStorage.getItem('card2') == 'not-hidden') {
    addCard2()
  } else {
    newsCard.classList.add('is-hidden');;
  }
}

function showCard3() {
  if (localStorage.getItem('card3') == 'not-hidden') {
    addCard3()
  } else {
    ronQuote.classList.add('is-hidden');;
  }
}

function showCard4() {
  if (localStorage.getItem('card4') == 'not-hidden') {
    addCard4()
  } else {
    harryPotterQuote.classList.add('is-hidden');
  }
}

function showCard5() {
  if (localStorage.getItem('card5') == 'not-hidden') {
    addCard5()
  } else {
    riddle.classList.add('is-hidden');
  }
}

function showCard6() {
  if (localStorage.getItem('card6') == 'not-hidden') {
    addCard6()
  } else {
    randomFact.classList.add('is-hidden');
  }
}

function showCard7() {
  if (localStorage.getItem('card7') == 'not-hidden') {
    addCard7()
  } else {
    nbaScoresCard.classList.add('is-hidden');
  }
}

function showCard8() {
  if (localStorage.getItem('card8') == 'not-hidden') {
    addCard8()
  } else {
    randomDog.classList.add('is-hidden');
  }
}

showCard1()
showCard2()
showCard3()
showCard4()
showCard5()
showCard6()
showCard7()



date.textContent = 'Today is ' + today.format('MMMM D, YYYY');

function displayTime() {
  const currentTime = dayjs().format(' hh:mm:ss a');
  time.textContent = 'The Time is ' + currentTime;
}

setInterval(displayTime, 1000);

// WEATHER API

function getWeather(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9ee9271b9afcecf4a8ec627a8439aa7b&units=imperial")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(data);
            // console.log(data.name);
            // console.log(data.weather[0].description);
            // console.log(data.main.temp);
            // console.log(data.main.temp_min);
            // console.log(data.main.temp_max);
            const createElement = document.createElement('p');
            createElement.innerHTML = '<strong><br>City Name: </strong>' + city + '<strong><br>Current Weather: </strong>' + data.weather[0].main + '<strong><br>The temperature is: </strong> ' + data.main.temp + '<strong><br>Min Temp: </strong>' + data.main.temp_min + '<strong><br>Max Temp: </strong>' + data.main.temp_max;
            weatherResults.append(createElement);
        });

}

weatherSearch.addEventListener('click', searchForCity)

function searchForCity(event){
    event.preventDefault();
    while (weatherResults.firstChild) {
        weatherResults.removeChild(weatherResults.firstChild)
      }
    const searchInput = document.getElementById('weatherInput').value
    localStorage.setItem("city", searchInput);
    getWeather(searchInput)
}

function loadPastWeather() {
    const searches = localStorage.getItem('city')
    getWeather(searches)
}

loadPastWeather()


//Ron Swanson quote API
function ronSwanson() {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      const createElement = document.createElement('p');
      createElement.textContent = `"` + data + `"`;
      ronQuote.append(createElement);
    });
}

ronSwanson();

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
      // console.log(data)
      // console.log(data[0].title)
      // console.log(data[0].question)
      // console.log(data[0].answer)
      const createElement = document.createElement('p')
      createElement.innerHTML = '<strong>Title: </strong> ' + data[0].title + '<strong><br>Question: </strong>' + data[0].question + '<strong><br>Answer: </strong> ' + data[0].answer;
      riddle.append(createElement)
    })


}
riddleCard();

// Dog pic API
const imageContainer = document.getElementById('dogcontainer')

function randomDogCard() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    const imageElement = document.createElement('img');
    imageElement.src = data.message;
    imageContainer.appendChild(imageElement);
  })
  .catch(function(error) {
    console.error('Error fetching dog picture:', error);
  });
}
randomDogCard();

//Harry Potter Quotes API
function harryPotter() {
  fetch("https://api.portkey.uk/quote")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      const createElement = document.createElement('p');
      createElement.innerHTML = data.quote + '<strong><br> - </strong>' + data.speaker + '<strong><br>Movie: </strong>' + data.story;
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
      // console.log(data.text);
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

// news API

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
    while (news.firstChild) {
        news.removeChild(news.firstChild)
      }
    const createPEl = document.createElement('p')
    createPEl.textContent = query
    news.append(createPEl)
}

// Event listener for search button click
document.getElementById("search-btn").addEventListener("click", function() {
const query = document.getElementById("query-input").value;
localStorage.setItem('news', query);
if (query.trim() !== "") {
    fetchNews(query);
} else {
    alert("Please enter a query.");
}
});

function loadNews(){
  const oldNews = localStorage.getItem('news')
    if (oldNews){
      fetchNews(oldNews)
}
}

loadNews()

// Dropdown menu function
function myFunction() {
  let x = document.getElementById("Demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");

  }
  // Toggle the visibility of the selected card
  let selectedCard = document.getElementById(cardId);
  if (selectedCard) {
      selectedCard.classList.toggle("hidden-card");
  }

}

document.addEventListener('DOMContentLoaded', function() {
  // console.log('DOM fully loaded and parsed')
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