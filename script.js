var weatherCard = document.getElementById('Weather-Info');
var cityInputEl = document.querySelector('#city');
var APIKey = "6da0b49999367300f70db98e448e05ee";
var city;
// var APIWeather = "https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=6da0b49999367300f70db98e448e05ee"

var Weather = function(weather) {
    var apiWeather =  "https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=6da0b49999367300f70db98e448e05ee"

    fetch (apiWeather, {
        method: 'Get',
        credentials: 'same-origin',
        redirect: 'follow',
    })

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data.weather);
    })
};



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

// var weatherCitylist = function (city) {
//     var apiWeather = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={6da0b49999367300f70db98e448e05ee}"

//     fetch (apiWeather, {
//         method: 'Get',
//         credentials: 'same-origin',
//         redirect: 'follow',
//     })

//     .then(function (response) {
//         return response.json();
//     })

//     .then(function (data) {
//         console.log(data);
//     })
// };

// cityInputEl.addEventListener('click', formSubmitHandler);