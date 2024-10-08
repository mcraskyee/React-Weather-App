const weatherIconMap = {
  Clear: "sunny.png",
  Sunny: "sunny.png",
  "Partly cloudy": "cloudy_day.png",
  Cloudy: "cloudy_day.png",
  Overcast: "cloudy.png",
  Mist: "hail.png",
  "Patchy rain possible": "rain.png",
  "Patchy rain nearby": "rain.png",
  "Patchy snow possible": "snow.png",
  "Patchy sleet possible": "snow.png",
  "Patchy freezing drizzle possible": "snow.png",
  "Thundery outbreaks possible": "rain.png",
  "Blowing snow": "snow.png",
  Blizzard: "snow.png",
  Fog: "hail.png",
  "Freezing fog": "snow.png",
  "Patchy light drizzle": "snow.png",
  "Light drizzle": "snow.png",
  "Freezing drizzle": "snow.png",
  "Heavy freezing drizzle": "snow.png",
  "Patchy light rain": "rain.png",
  "Light rain": "rain.png",
  "Moderate rain at times": "rain.png",
  "Moderate rain": "rain.png",
  "Heavy rain at times": "rain.png",
  "Heavy rain": "rain.png",
  "Light freezing rain": "rain.png",
  "Moderate or heavy freezing rain": "rain.png",
  "Light sleet": "snow.png",
  "Moderate or heavy sleet": "snow.png",
  "Patchy light snow": "snow.png",
  "Light snow": "snow.png",
  "Patchy moderate snow": "snow.png",
  "Moderate snow": "snow.png",
  "Patchy heavy snow": "snow.png",
  "Heavy snow": "snow.png",
  "Ice pellets": "snow.png",
  "Light rain shower": "rain.png",
  "Moderate or heavy rain shower": "rain.png",
  "Torrential rain shower": "rain.png",
  "Light sleet showers": "rain.png",
  "Moderate or heavy sleet showers": "rain.png",
  "Light snow showers": "snow.png",
  "Moderate or heavy snow showers": "snow.png",
  "Light showers of ice pellets": "snow.png",
  "Moderate or heavy showers of ice pellets": "snow.png",
  "Patchy light rain with thunder": "rain.png",
  "Moderate or heavy rain with thunder": "rain.png",
  "Patchy light snow with thunder": "snow.png",
  "Moderate or heavy snow with thunder": "snow.png",
};

const getWeatherIcon = (condition) => {
  return weatherIconMap[condition] || null;
};

export { weatherIconMap, getWeatherIcon };
