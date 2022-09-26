var weatherCard = document.getElementById("weatherData");
var cityInputEl = document.getElementById('City');
var searchBtn = document.getElementById('search');
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var city = document.getElementById("cityName");
var APIKey = "6da0b49999367300f70db98e448e05ee";


var formSubmitHandler = function (event) {
    event.preventDefault();

    var weather = cityInputEl.value;

    if(weather) {
        WeatherData(weather);

        weatherCard.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Search a City');
    }
};

var WeatherData = function(City) {

    var apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl.value + "&appid=6da0b49999367300f70db98e448e05ee&units=imperial";

    fetch(apiWeather)

    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error ("NETWORK RESPONSE ERROR");
        }
    })

    .then(data => {
        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
        city.textContent = data.name;
        weatherCard.textContent = data.main.temp;
        wind.appendChild(weatherCard).textContent = data.wind.speed;
    })

    .catch((error) => console.error("FETCH ERROR:", error));
};

searchBtn.addEventListener('click', formSubmitHandler);
