const apiKey = "49ba89f9e5b161b98ffa13a24b036797";
const urlGeoLocation = "http://api.openweathermap.org/geo/1.0/direct";
const urlWeatherCurrrent = "https://api.openweathermap.org/data/2.5/weather";
const urlWeatherIconStart = "https://openweathermap.org/img/wn/";
const urlWeatherIconEnd = "@2x.png";

// Async function that takes a location string and country iso code
// And returns a promise with an latitude, longitude object result.
async function getCityLatLong(city, country) {
  const url = new URL(urlGeoLocation);

  const searchParameters = {
    q: [city.toLowerCase(), country],
    appid: apiKey,
    limit: 5,
  };

  url.search = new URLSearchParams(searchParameters);

  try {
    const response = await fetch(url, { mode: "cors" });
    const cities = await response.json();
    if (cities.length > 0) {
      return {
        latitude: cities[0].lat,
        longitude: cities[0].lon,
      };
    }
  } catch (error) {
    // console.log(error);
  }
}

// Async function that takes a latitude and longitude
// And return the current weather
async function getLatLongCurrentWeather(latitude, longitude) {
  const url = new URL(urlWeatherCurrrent);

  const searchParameters = {
    lat: latitude,
    lon: longitude,
    appid: apiKey,
    mode: "json",
    lang: "en",
    units: "metric",
  };

  url.search = new URLSearchParams(searchParameters);

  try {
    const response = await fetch(url, { mode: "cors" });
    const currentWeather = await response.json();
    return currentWeather;
  } catch (error) {
    // console.log(error);
  }
}

// Async function that use the function to get a location's lat & long
// then takes the result to obtain the location's weather
async function getCityCurrentWeather(city, country) {
  try {
    const cityLatLong = await getCityLatLong(city, country);
    const latLongWeather = await getLatLongCurrentWeather(
      cityLatLong.latitude,
      cityLatLong.longitude
    );
    return latLongWeather;
  } catch (error) {
    // console.log(error);
  }
}

export { getCityCurrentWeather, urlWeatherIconStart, urlWeatherIconEnd };
