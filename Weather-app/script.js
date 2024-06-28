let input_box=document.getElementById("input-box")
let searchButton=document.getElementById("search-button")
let weather_container=document.getElementById("weather-all-info")

searchButton.addEventListener('click',function(){
    getWeatherData(input_box.value)
})
async function getWeatherData(city){
    let API_ID=`f324a62bfae1197d59106d1826d24393`
    try {
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_ID}`)
        let answer=await response.json()
        displayData(answer)
    } catch (error) {
        console.log(error);
    }
}


function displayData(data){
    let tempereature=document.querySelector(".weather-info>h2")
    let city=document.querySelector(".weather-info>h1")
    let humidity=document.querySelector(".humidityandspeed div div p")
    let wind_speed=document.getElementById("wind-speed")
    let timeline=document.getElementById("timeline")
    let weather_logo=document.getElementById("weather-logo")
    tempereature.innerText=`${Math.round(data.main.temp)}°C`
    city.innerText=data.name
    humidity.innerText=`${Math.round(data.main.humidity)}%`
    wind_speed.innerText=`${data.wind.speed}km/h`
    timeline.innerText=new Date()

    if(data.weather[0].main=="Rain"){
        weather_logo.src='images/rain.png'
    }
    else if(data.weather[0].main=="Clouds"){
        weather_logo.src='images/clouds.png'
    }
    else if(data.weather[0].main=="Clear"){
        weather_logo.src='images/clear.png'
    }
    else if(data.weather[0].main=="Drizzle"){
        weather_logo.src='images/drizzle.png'
    }
    else if(data.weather[0].main=="Mist"){
        weather_logo.src='images/mist.png'
    }
    else if(data.weather[0].main=="Snow"){
        weather_logo.src='images/snow.png'
    }
    weather_container.style.display="block"
}


