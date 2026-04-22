const API_KEY = "8c66008558516ee07de2863291df64d9";

async function getWeather() {

    let city = document.getElementById("city").value;

    if(city === "") {
        alert("Enter city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {

        let response = await fetch(url);

        if(!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();

        document.getElementById("weatherResult").innerHTML = `

            <h3>${data.name}</h3>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>

        `;

    } catch(error) {

        document.getElementById("weatherResult").innerHTML = "Invalid city name";

    }
}