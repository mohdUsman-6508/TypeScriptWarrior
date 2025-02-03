interface WeatherData {
  temperature: number;
  description: string;
}

async function fetchWeather(city: string) {
  const apiKey = `http://api.weatherstack.com/current?access_key=774caa2fbe040220804990971deb85ff&query=${city}`;

  const response = await fetch(apiKey);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();
  // console.log(data);

  return {
    temperature: data.current.temperature,
    description: data.current.weather_descriptions[0],
  };
}

fetchWeather("Mumbai")
  .then((weather) => console.log(weather))
  .catch((error) => console.log(error));
