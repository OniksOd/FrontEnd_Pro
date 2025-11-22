const getWeatherBtn = document.getElementById("get-weather-btn");
const cityNameInput = document.getElementById("city-name");
const weatherReloadBtn = document.getElementById("weather-reload");
const weatherDescriptionContainer = document.getElementById(
  "weather-description"
);
const temperatureContainer = document.getElementById("temperature");
const windSpeedContainer = document.getElementById("wind-speed");
const weatherIcon = document.getElementById("weather-icon");
const apiKey = "bd6ab41e669a39ba75aadd54b00fd91f";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

async function getCurrentWeather(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
function extractWeather(response) {
  const temperature = response.main.temp;
  const weatherDescription = response.weather[0].description;
  const weatherIcon = response.weather[0].icon;
  const windSpeed = response.wind.speed;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
  return {
    temperature,
    weatherDescription,
    weatherIconUrl,
    windSpeed,
  };
}
function displayWeather(weatherData) {
  const { temperature, weatherDescription, weatherIconUrl, windSpeed } =
    weatherData;
  weatherDescriptionContainer.textContent = `Weather ${weatherDescription}`;
  weatherIcon.src = weatherIconUrl;
  temperatureContainer.textContent = `Temperature ${temperature} °C`;
  windSpeedContainer.textContent = `Wind speed ${windSpeed} m/s`;
}

getWeatherBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const city = cityNameInput.value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const response = await getCurrentWeather(city);
  const weatherData = extractWeather(response);
  displayWeather(weatherData);
});
weatherReloadBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const city = cityNameInput.value;
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  const response = await getCurrentWeather(city);
  const weatherData = extractWeather(response);
  displayWeather(weatherData);
});
