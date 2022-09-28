var weatherCard = document.getElementById("weatherData");
var cityInputEl = document.getElementById('City');
var searchBtn = document.getElementById('search');
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var city = document.getElementById("cityName");
var date = document.getElementById("Date");
var day1 = document.getElementById("date1");
var day2 = document.getElementById("date2");
var day3 = document.getElementById("date3");
var day4 = document.getElementById("date4");
var day5 = document.getElementById("date5");
var temp1 = document.getElementById("temp1");
var temp2 = document.getElementById("temp2");
var temp3 = document.getElementById("temp3");
var temp4 = document.getElementById("temp4");
var temp5 = document.getElementById("temp5");
var wind1 = document.getElementById("wind1");
var wind2 = document.getElementById("wind2");
var wind3 = document.getElementById("wind3");
var wind4 = document.getElementById("wind4");
var wind5 = document.getElementById("wind5");
var humidity1 = document.getElementById("humidity1");
var humidity2 = document.getElementById("humidity2");
var humidity3 = document.getElementById("humidity3");
var humidity4 = document.getElementById("humidity4");
var humidity5 = document.getElementById("humidity5");
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

    var apiWeather = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputEl.value + "&appid=6da0b49999367300f70db98e448e05ee&units=imperial";

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
        console.log(data.list[0].main.temp);
        // console.log(data.main.temp);
        // console.log(data.main.humidity);
        // console.log(data.wind.speed);
        const temperature = data.list[0].main.temp;
        const temperature1 = data.list[1].main.temp;
        const temperature2 = data.list[2].main.temp;
        const temperature3 = data.list[3].main.temp;
        const temperature4 = data.list[4].main.temp;
        const temperature5 = data.list[5].main.temp;
        const windspeed= data.list[0].wind.speed;
        const windspeed1 = data.list[1].wind.speed;
        const windspeed2 = data.list[2].wind.speed;
        const windspeed3 = data.list[3].wind.speed;
        const windspeed4 = data.list[4].wind.speed;
        const windspeed5 = data.list[5].wind.speed;
        const humid = data.list[0].main.humidity;
        const humid1 = data.list[1].main.humidity;
        const humid2 = data.list[2].main.humidity;
        const humid3 = data.list[3].main.humidity;
        const humid4 = data.list[4].main.humidity;
        const humid5 = data.list[5].main.humidity;
        const cityName = data.city.name;
        const dt = data.list[0].dt_txt;
        const dt1 = data.list[1].dt_txt;
        const dt2 = data.list[2].dt_txt;
        const dt3 = data.list[3].dt_txt;
        const dt4 = data.list[4].dt_txt;
        const dt5 = data.list[5].dt_txt;
        date.innerHTML = dt;
        day1.innerHTML = dt1;
        day2.innerHTML = dt2;
        day3.innerHTML = dt3;
        day4.innerHTML = dt4;
        day5.innerHTML = dt5;
        city.innerHTML = cityName;
        temp.innerHTML = temperature;
        wind.innerHTML = windspeed;
        humidity.innerHTML = humid;
        humidity1.innerHTML = humid1;
        humidity2.innerHTML = humid2;
        humidity3.innerHTML = humid3;
        humidity4.innerHTML = humid4;
        humidity5.innerHTML = humid5;
        temp1.innerHTML = temperature1;
        temp2.innerHTML = temperature2;
        temp3.innerHTML = temperature3;
        temp4.innerHTML = temperature4;
        temp5.innerHTML = temperature5;
        wind1.innerHTML = windspeed1;
        wind2.innerHTML = windspeed2;
        wind3.innerHTML = windspeed3;
        wind4.innerHTML = windspeed4;
        wind5.innerHTML = windspeed5;


    })

    .catch((error) => console.error("FETCH ERROR:", error));
};

searchBtn.addEventListener('click', formSubmitHandler);
