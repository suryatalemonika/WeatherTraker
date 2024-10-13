// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    fetchWeatherData();
});

function fetchWeatherData() {
    fetch('/weather')  // Hit the `/weather` API endpoint
        .then(response => response.json())
        .then(data => {
            // Populate the UI with the fetched data
            document.getElementById('temp').textContent = `${data.Current_temp}°C`;
            document.getElementById('description').textContent = data.Weather_description;
            document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.Whether_icon}.png`;//result.data.main.feels_like
            document.getElementById('feels_like').textContent = `Feels like ${data.feels_like} | Sunset ${data.sunset}`; // Updated here
            document.getElementById('location').textContent = data.location


        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}
