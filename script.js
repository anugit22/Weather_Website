const apiKey = '863242cfb2b1d357e6093d9a4df19a4b';
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
// alert('JS file connected')

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

function setWeatherIcon(wc){
    switch(wc) {      
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;            
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        case "Haze":
            weatherIcon.src = "images/haze.png";
            break;            
        default:
            weatherIcon.src = "images/unavailable.png";
      }
}

async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);  
    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
    }
    else{
        var data = await response.json();
        // console.log(data)
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
        var weatherCondition = data.weather[0].main;
        setWeatherIcon(weatherCondition);
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
})

// getWeather("Kolkata");