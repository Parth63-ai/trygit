const API_KEY = "0133cc5316757ac730cc46ae342334e4"

const form = document.querySelector("#form")
const weatherDetail = document.querySelector(".info")
const searchHistory = document.querySelector("#historyBtn")
const consoleBox = document.querySelector("#consoleBox")

let cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || []


function log(msg){
    console.log(msg)
    consoleBox.textContent += msg + "\n"
}

log("Sync Start")

form.addEventListener("submit", async function(event){
    event.preventDefault()

    const searchCity = document.getElementById("city").value.trim()

    if(!searchCity){
        alert("Enter city name")
        return
    }

    getData(searchCity)
})



async function getData(searchCity){

    log("Async: Start fetching")

    try{

        const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
        )

        const data = await res.json()

        
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(() => log("Promise resolved (microtask)"))
        .catch(() => log("Promise error"))

        if(data.cod === 200){

            log("Async Data received")

            weatherDetail.innerHTML = `
                <h3>Weather Info</h3>
                <p>City: ${data.name}</p>
                <p>Temp: ${(data.main.temp - 273.15).toFixed(1)} °C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind: ${data.wind.speed} m/s</p>
            `

            
            if(!cityHistory.includes(searchCity)){
                cityHistory.push(searchCity)
                localStorage.setItem("cityHistory", JSON.stringify(cityHistory))
            }

            displayHistory()

        }else{
            weatherDetail.innerHTML = `<p>City not found</p>`
        }

    }catch(e){
        log("Error: " + e)
        weatherDetail.innerHTML = `<p>Error fetching data</p>`
    }

}



function displayHistory(){

    searchHistory.innerHTML = ""

    cityHistory.forEach(city => {

        const btn = document.createElement("button")
        btn.innerText = city

        btn.onclick = () => getData(city)

        searchHistory.appendChild(btn)

    })

}

displayHistory()

log("Sync End")

