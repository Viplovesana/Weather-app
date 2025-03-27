

const apiKey = "be3bfbaecacb0936445174cedb0b9cc2"

const weatherdata =   document.querySelector(".weather-data")

const cityname = document.querySelector("#city-name")

const formEle =document.querySelector("form")

const imgicon = document.querySelector(".icon")

formEle.addEventListener("submit",(e)=>{

    e.preventDefault()
    // console.log(cityname.value);
    const cityValue = cityname.value

    getWeatherData(cityValue)
})

 async function getWeatherData(cityValue){

    try{
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
        if(!response.ok){
            throw new error("Network response is not ok")
        }

        const data = await response.json()
        console.log(data)

        const temprature = Math.floor(data.main.temp)

        const description = data.weather[0].description

        const icon =data.weather[0].icon

        const details = [
            `Feels like: ${Math.floor(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`
            `Wind Speed: ${data.wind.speed}m/s`
        ]

        document.querySelector(".temp").textContent = `${temprature}°C`

        document.querySelector(".desc").textContent = `${description}`

        imgicon.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="icon">`

        document.querySelector(".details").innerHTML = details.map((detail)=>{
            return`<div>${detail}</div>`
        }).join("")

    


    }catch(err){

    }

}