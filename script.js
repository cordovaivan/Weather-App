var weatherCard = document.getElementById('Weather-Info');
var cityInputEl = document.querySelector('#city');
var APIKey = "6da0b49999367300f70db98e448e05ee";
var city;


fetch ("https://api.openweathermap.org/data/2.5/weather?q=phoenix&appid=6da0b49999367300f70db98e448e05ee")

.then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
})

.then(data => {
    console.log(data);
    displayWeather(data)
})

.catch((error) => console.error("FETCH ERROR:", error));

var formSubmitHandler = function (event) {
    event.preventDefault();

    var Weather = cityInputEl.ariaValueMax.trim();

    if(city) {
        weatherCitylist(city);

        document.getElementByIda('Weather-Info').textContent = '';
        cityInputEl.value = '';
    } else {
        alert('City not Found');
    }
};
