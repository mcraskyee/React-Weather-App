async function fetchWeather(city, day) {
  const API_KEY = "f98472fece5e409d92293927242209";
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${day}&aqi=yes&alerts=yes`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("failed to fetch weather data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("error fetching weather data", error);
    return null;
  }
}

// fetchWeather("Sydney", 1);

export default fetchWeather;
