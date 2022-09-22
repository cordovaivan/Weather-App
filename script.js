var weatherCard = document.getElementsByClassName('card-text');
var cityInputEl = document.getElementById('City');
var searchBtn = document.getElementById('search')
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

    var apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl.value + "&appid=6da0b49999367300f70db98e448e05ee";

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
    })

    .catch((error) => console.error("FETCH ERROR:", error));
};

searchBtn.addEventListener('click', formSubmitHandler);
