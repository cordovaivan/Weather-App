var weatherCard = document.getElementsByClassName('card-text');
var cityInputEl = document.querySelector('#city');
var APIKey = "6da0b49999367300f70db98e448e05ee";
var city;

var formSubmitHandler = function (event) {
    event.preventDefault();

    var weather = cityInputEl.value.trim();

    if(weather) {
        WeatherData(weather);

        weatherCard.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Search a City');
    }
};

var WeatherData = function(City) {

    var apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + City + "&appid=" + APIKey;

    fetch(apiWeather)

    .then((response) => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error ("NETWORK RESPONSE ERROR");
        }
    })
};

window.onload = function() {
    cityInputEl.addEventListener('click', formSubmitHandler);
};