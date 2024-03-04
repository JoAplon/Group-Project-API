const ronQuote = document.getElementById('ronQuote')
const harryPotterQuote = document.getElementById('harryPotterQuote')
const randomFact = document.getElementById('randomFact')
const today = dayjs();
const date = document.getElementById('date')
const time = document.getElementById('time')
const weather = document.getElementById('weather')
const workspace = document.getElementById('workspace')


date.textContent = 'Today is ' + (today.format('MMMM D, YYYY'))

function displayTime() {
    const currentTime = (dayjs().format(' hh:mm:ss a'))
    time.textContent = 'The Time is ' + currentTime
}

setInterval(displayTime, 1000);

// WEATHER API
function getWeather(city, state, country) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + state + "," + country + "&appid=9ee9271b9afcecf4a8ec627a8439aa7b&units=imperial")
        .then(function (response) {
          return response.json();
        }).then (function(data){
          //TODO: go through data pull relevant info
          console.log(data)  
          console.log(data.weather[0].main)
          console.log(data.main.temp)
          console.log(data.sys.sunrise)
          console.log(data.sys.sunset)
          const createElement = document.createElement('p')
          createElement.textContent = data.weather[0].main + 'the tempurature is ' + data.main.temp + 'sunrise: ' + data.sys.sunrise + 'sunset ' + data.sys.sunset
          weather.append(createElement)
        //   create logic for weather: if data.weather[0].main value === sunny ☀️, else if rainy 🌧️, else if cloudy ☁️, else 🌡️
        })
    }

getWeather("irvine", "california", "usa")

//Ron Swanson quote API
function ronSwanson() {
    fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function (response) {
      return response.json();
    }).then (function(data){
        console.log(data)
        const createElement = document.createElement('p')
        createElement.textContent = `"` + data + `"`
        ronQuote.append(createElement)
    })
}

ronSwanson()

//Harry Potter Quotes API
function harryPotter() {
    fetch("https://api.portkey.uk/quote")
    .then(function (response) {
      return response.json();
    }).then (function(data){
      //TODO: need to filter quote, speaker, and book
        console.log(data)
        const createElement = document.createElement('p')
        createElement.textContent = data.quote + data.speaker + data.story
        harryPotterQuote.append(createElement)

    })
}

harryPotter()

//Random Facts API
function randomFactCard() {
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then(function (response) {
      return response.json();
    }).then (function(data){
        console.log(data.text)
        const createElement = document.createElement('p')
        createElement.textContent = [data.text]
        randomFact.append(createElement)

    })
}

randomFactCard()

function setBookmark(website) {
    const createNewSection = document.createElement('section')
    const createAElement = document.createElement('a')
    createNewSection.classList.add('card')
    createAElement.textContent = website
    createAElement.href = website
    createNewSection.append(createAElement)
    workspace.append(createNewSection)
}

//need to create an input for custom urls
setBookmark('google.com')

setBookmark('https://publicapis.dev/')