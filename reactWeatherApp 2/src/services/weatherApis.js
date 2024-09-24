async function fetchWeather(searchCity, days, setData, setDays) {
  const API_KEY = "f98472fece5e409d92293927242209";
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchCity}&days=${days}&aqi=yes&alerts=yes`;

  try {
    const response = await fetch(API_URL);
    console.log("response", response);
    if (!response.ok) {
      throw new Error("failed to fetch city weather");
    }
    const result = await response.json();
    console.log("result", result);
    if (result.location.name.toLowerCase() !== searchCity.toLowerCase()) {
      setData("");
      setDays(1);
    } else {
      setData(result);
      setDays(days);
    }
  } catch (error) {
    console.error("error fetching data", error);
  }
}

export default fetchWeather;
