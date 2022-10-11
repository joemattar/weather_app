/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/js/weather_api.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCityCurrentWeather": () => (/* binding */ getCityCurrentWeather),
/* harmony export */   "urlWeatherIconEnd": () => (/* binding */ urlWeatherIconEnd),
/* harmony export */   "urlWeatherIconStart": () => (/* binding */ urlWeatherIconStart)
/* harmony export */ });
const apiKey = "49ba89f9e5b161b98ffa13a24b036797";
const urlGeoLocation = "https://api.openweathermap.org/geo/1.0/direct";
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlcl9hcGkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFeUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2pzL3dlYXRoZXJfYXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgYXBpS2V5ID0gXCI0OWJhODlmOWU1YjE2MWI5OGZmYTEzYTI0YjAzNjc5N1wiO1xuY29uc3QgdXJsR2VvTG9jYXRpb24gPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdFwiO1xuY29uc3QgdXJsV2VhdGhlckN1cnJyZW50ID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlclwiO1xuY29uc3QgdXJsV2VhdGhlckljb25TdGFydCA9IFwiaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duL1wiO1xuY29uc3QgdXJsV2VhdGhlckljb25FbmQgPSBcIkAyeC5wbmdcIjtcblxuLy8gQXN5bmMgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIGxvY2F0aW9uIHN0cmluZyBhbmQgY291bnRyeSBpc28gY29kZVxuLy8gQW5kIHJldHVybnMgYSBwcm9taXNlIHdpdGggYW4gbGF0aXR1ZGUsIGxvbmdpdHVkZSBvYmplY3QgcmVzdWx0LlxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eUxhdExvbmcoY2l0eSwgY291bnRyeSkge1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHVybEdlb0xvY2F0aW9uKTtcblxuICBjb25zdCBzZWFyY2hQYXJhbWV0ZXJzID0ge1xuICAgIHE6IFtjaXR5LnRvTG93ZXJDYXNlKCksIGNvdW50cnldLFxuICAgIGFwcGlkOiBhcGlLZXksXG4gICAgbGltaXQ6IDUsXG4gIH07XG5cbiAgdXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1ldGVycyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBjaXRpZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKGNpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYXRpdHVkZTogY2l0aWVzWzBdLmxhdCxcbiAgICAgICAgbG9uZ2l0dWRlOiBjaXRpZXNbMF0ubG9uLFxuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbi8vIEFzeW5jIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlXG4vLyBBbmQgcmV0dXJuIHRoZSBjdXJyZW50IHdlYXRoZXJcbmFzeW5jIGZ1bmN0aW9uIGdldExhdExvbmdDdXJyZW50V2VhdGhlcihsYXRpdHVkZSwgbG9uZ2l0dWRlKSB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwodXJsV2VhdGhlckN1cnJyZW50KTtcblxuICBjb25zdCBzZWFyY2hQYXJhbWV0ZXJzID0ge1xuICAgIGxhdDogbGF0aXR1ZGUsXG4gICAgbG9uOiBsb25naXR1ZGUsXG4gICAgYXBwaWQ6IGFwaUtleSxcbiAgICBtb2RlOiBcImpzb25cIixcbiAgICBsYW5nOiBcImVuXCIsXG4gICAgdW5pdHM6IFwibWV0cmljXCIsXG4gIH07XG5cbiAgdXJsLnNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1ldGVycyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gY3VycmVudFdlYXRoZXI7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbi8vIEFzeW5jIGZ1bmN0aW9uIHRoYXQgdXNlIHRoZSBmdW5jdGlvbiB0byBnZXQgYSBsb2NhdGlvbidzIGxhdCAmIGxvbmdcbi8vIHRoZW4gdGFrZXMgdGhlIHJlc3VsdCB0byBvYnRhaW4gdGhlIGxvY2F0aW9uJ3Mgd2VhdGhlclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eUN1cnJlbnRXZWF0aGVyKGNpdHksIGNvdW50cnkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjaXR5TGF0TG9uZyA9IGF3YWl0IGdldENpdHlMYXRMb25nKGNpdHksIGNvdW50cnkpO1xuICAgIGNvbnN0IGxhdExvbmdXZWF0aGVyID0gYXdhaXQgZ2V0TGF0TG9uZ0N1cnJlbnRXZWF0aGVyKFxuICAgICAgY2l0eUxhdExvbmcubGF0aXR1ZGUsXG4gICAgICBjaXR5TGF0TG9uZy5sb25naXR1ZGVcbiAgICApO1xuICAgIHJldHVybiBsYXRMb25nV2VhdGhlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0Q2l0eUN1cnJlbnRXZWF0aGVyLCB1cmxXZWF0aGVySWNvblN0YXJ0LCB1cmxXZWF0aGVySWNvbkVuZCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9