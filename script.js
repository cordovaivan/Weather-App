var weatherCard = document.getElementById('Weather-Info');
var cityInputEl = document.querySelector('#city');
var APIKey = "6da0b49999367300f70db98e448e05ee";
var city;

var formSubmitHandler = function (event) {
    event.preventDefault();

    var Data = cityInputEl.value.trim();

    if(data) {
        WeatherData(city);

        weatherCard.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Search a City');
    }
};

var WeatherData = function(City) {
    var apiWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + City + "&appid=" + APIKey;

    fetch (apiWeather)

.then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
})

// .then(data => {
//     console.log(data);
//     displayWeather(data)
// })

// .catch((error) => console.error("FETCH ERROR:", error));
// }

// fetch (apiWeather)

// .then((response) => {
//     if(response.ok) {
//         return response.json();
//     } else {
//         throw new Error("NETWORK RESPONSE ERROR");
//     }
// })

// .then(data => {
//     console.log(data);
//     displayWeather(data)
// })

// .catch((error) => console.error("FETCH ERROR:", error));

// var formSubmitHandler = function (event) {
//     event.preventDefault();

//     var Weather = cityInputEl.ariaValueMax.trim();

//     if(city) {
//         weatherCitylist(city);

//         document.getElementByIda('Weather-Info').textContent = '';
//         cityInputEl.value = '';
//     } else {
//         alert('City not Found');
//     }
// };
