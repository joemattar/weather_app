import "../css/styles.css";
import * as datefns from "date-fns";
import { countries } from "./countries_iso";
import {
  getCityCurrentWeather,
  urlWeatherIconStart,
  urlWeatherIconEnd,
} from "./weather_api";
import githubImage from "../images/github_logo.png";
import loaderImage from "../images/loader.png";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function getValidityState(validityState) {
  const vStates = [
    "badInput",
    "customError",
    "patternMismatch",
    "rangeOverflow",
    "rangeUnderflow",
    "stepMismatch",
    "tooLong",
    "tooShort",
    "typeMismatch",
    "valid",
    "valueMissing",
  ];

  for (let i = 0; i < vStates.length; i += 1) {
    if (validityState[vStates[i]] === true) {
      return vStates[i];
    }
  }
}

// Create main div element
const mainDiv = document.createElement("div");
mainDiv.classList.add("main");
document.body.appendChild(mainDiv);

// Create header element
const header = document.createElement("header");
header.classList.add("header");
header.textContent = "The Weather App";
mainDiv.appendChild(header);

// Create content div element
const contentDiv = document.createElement("div");
contentDiv.classList.add("content");
mainDiv.appendChild(contentDiv);

// Create div for current weather data
const currentWeatherDiv = document.createElement("div");
currentWeatherDiv.classList.add("content-card");
currentWeatherDiv.classList.add("current-weather");
contentDiv.appendChild(currentWeatherDiv);

// Create select element to populate with countries
const countrySelect = document.createElement("select");
countrySelect.classList.add("countries");
countrySelect.name = "countries";
for (let i = 0; i < countries.length; i += 1) {
  const newOption = document.createElement("option");
  newOption.value = countries[i].iso;
  newOption.textContent = countries[i].name;
  if (countries[i].iso === "CA") {
    newOption.selected = true;
  }
  countrySelect.appendChild(newOption);
}
currentWeatherDiv.appendChild(countrySelect);

// Create input element to get user input for location
const locationInput = document.createElement("input");
locationInput.value = "Toronto";
locationInput.classList.add("location-input");
locationInput.name = "location";
locationInput.type = "text";
locationInput.placeholder = "Enter location (ex: Toronto)";
locationInput.required = true;
locationInput.pattern =
  "^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+";
currentWeatherDiv.appendChild(locationInput);

// Create label element to display errors
const locationErrorLabel = document.createElement("label");
locationErrorLabel.classList.add("location-error-label");
locationErrorLabel.setAttribute("for", "location");
currentWeatherDiv.appendChild(locationErrorLabel);

// Create button element to fetch weather
const locationButton = document.createElement("button");
locationButton.textContent = "FETCH WEATHER";
currentWeatherDiv.appendChild(locationButton);

// Create div to show loading animation
const animationDiv = document.createElement("div");
animationDiv.classList.add("animation-div");
const animationImg = document.createElement("img");
animationImg.src = loaderImage;
animationDiv.appendChild(animationImg);
currentWeatherDiv.appendChild(animationDiv);

// Create div to bundle weather results
const weatherResultsDiv = document.createElement("div");
weatherResultsDiv.classList.add("weather-results-div");
currentWeatherDiv.appendChild(weatherResultsDiv);

// Create label element to display weather description
const weatherDescriptionLabel = document.createElement("label");
weatherDescriptionLabel.classList.add("weather");
weatherDescriptionLabel.classList.add("description-label");
weatherResultsDiv.appendChild(weatherDescriptionLabel);

// Create label element to display weather location name
const weatherLocationNameLabel = document.createElement("label");
weatherLocationNameLabel.classList.add("weather");
weatherLocationNameLabel.classList.add("location-name-label");
weatherResultsDiv.appendChild(weatherLocationNameLabel);

// Create label element to display weather timestamp 1
const weatherTimestampLabel1 = document.createElement("label");
weatherTimestampLabel1.classList.add("weather");
weatherTimestampLabel1.classList.add("timestamp-label");
weatherResultsDiv.appendChild(weatherTimestampLabel1);

// Create label element to display weather timestamp 2
const weatherTimestampLabel2 = document.createElement("label");
weatherTimestampLabel2.classList.add("weather");
weatherTimestampLabel2.classList.add("timestamp-label");
weatherResultsDiv.appendChild(weatherTimestampLabel2);

// Create label element to display weather timestamp 3
const weatherTimestampLabel3 = document.createElement("label");
weatherTimestampLabel3.classList.add("weather");
weatherTimestampLabel3.classList.add("timestamp-label");
weatherResultsDiv.appendChild(weatherTimestampLabel3);

// Create label element to display weather timestamp 4
const weatherTimestampLabel4 = document.createElement("label");
weatherTimestampLabel4.classList.add("weather");
weatherTimestampLabel4.classList.add("timestamp-label");
weatherResultsDiv.appendChild(weatherTimestampLabel4);

// Create div to bundle temperature & icon
const weatherTempIconDiv = document.createElement("div");
weatherTempIconDiv.classList.add("weather-temp-icon-div");
weatherResultsDiv.appendChild(weatherTempIconDiv);

// Create label element to display weather temperature
const weatherTemperatureLabel = document.createElement("label");
weatherTemperatureLabel.classList.add("weather");
weatherTemperatureLabel.classList.add("temperature-label");
weatherTempIconDiv.appendChild(weatherTemperatureLabel);

// Create label element to display weather icon
const weatherIconImage = document.createElement("img");
weatherIconImage.classList.add("weather");
weatherIconImage.classList.add("icon-image");
weatherTempIconDiv.appendChild(weatherIconImage);

// Create footer
const footer = document.createElement("footer");
footer.classList.add("footer");
mainDiv.appendChild(footer);

// Footer text element
const footerTextDiv = document.createElement("div");
footerTextDiv.textContent = "The Odin Project - joemattar";
footer.appendChild(footerTextDiv);

// Footer a element
const footerA = document.createElement("a");
footerA.href = "https://github.com/joemattar";
footerA.target = "_blank";
footer.appendChild(footerA);

// Footer img element
const footerImg = document.createElement("img");
footerImg.src = githubImage;
footerA.appendChild(footerImg);

// function display weather
function displayWeather() {
  animationDiv.classList.toggle("loading");
  locationErrorLabel.textContent = "";
  if (locationInput.validity.valid === false) {
    locationInput.setCustomValidity("");
    locationErrorLabel.textContent = `${getValidityState(
      locationInput.validity
    )}. Please enter a valid location.`;
    animationDiv.classList.toggle("loading");
  } else {
    getCityCurrentWeather(locationInput.value, countrySelect.value)
      .then((results) => {
        if (results.cod !== 200) {
          locationErrorLabel.textContent =
            "Location does not exist. Please enter a new location";
          animationDiv.classList.toggle("loading");
        } else {
          console.log(results);
          // Display weather description
          weatherDescriptionLabel.textContent = toTitleCase(
            results.weather[0].description
          );
          // Display weather location name
          weatherLocationNameLabel.textContent = toTitleCase(
            `${locationInput.value} - ${results.name}`
          );
          // Display weather timestamp
          // Currently in user's locale timezone
          // To update for location timezone?
          const weatherTimestamp = new Date(results.dt * 1000);
          const localTimezone =
            Intl.DateTimeFormat().resolvedOptions().timeZone;
          weatherTimestampLabel1.textContent = `${datefns.format(
            weatherTimestamp,
            "EEEE"
          )}`;
          weatherTimestampLabel2.textContent = `${datefns.format(
            weatherTimestamp,
            "dd MMMM yyyy"
          )}`;
          weatherTimestampLabel3.textContent = `${datefns.format(
            weatherTimestamp,
            "hh:mm b"
          )}`;
          weatherTimestampLabel4.textContent = `${datefns.format(
            weatherTimestamp,
            "zzzz"
          )} ${localTimezone} - (User Locale Timezone)`;
          // Display weather temperature
          weatherTemperatureLabel.textContent = `${Math.round(
            results.main.temp
          )} °C`;
          // Display weather icon
          weatherIconImage.src = `${urlWeatherIconStart}${results.weather[0].icon}${urlWeatherIconEnd}`;
        }
        animationDiv.classList.toggle("loading");
      })
      .catch(() => {
        locationErrorLabel.textContent =
          "Location does not exist. Please enter a new location";
        animationDiv.classList.toggle("loading");
      });
  }
}

// Add event listener to country select
countrySelect.addEventListener("change", () => {
  locationInput.value = "";
});

// Add event listener to button
locationButton.addEventListener("click", displayWeather);

displayWeather();
