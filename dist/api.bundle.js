"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["api"],{

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class API {
  constructor(apiKey) {
    this.APIKey = apiKey;
  }

  createCurrentURL(location) {
    return `http://api.weatherapi.com/v1/current.json?key=${this.APIKey}&q=${location}&aqi=no`;
  }

  createForecastURL(location, days = 8) {
    return `http://api.weatherapi.com/v1/forecast.json?key=${this.APIKey}&q=${location}&days=${days}&aqi=no&alerts=no`;
  }

  async fetchResponse(url) {
    try {
      const response = await fetch(url, {
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log("Error in getting current data: ", error);
    }
  }

  async fetchForecastResponse(location, days = 8) {
    const url = this.createForecastURL(location, days);
    try {
      const responseJSON = await this.fetchResponse(url);
      console.log(responseJSON);
      return responseJSON;
    } catch (error) {
      console.log("Error in fetching data: ", error);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/api.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsWUFBWSxLQUFLLFNBQVM7QUFDdEY7O0FBRUE7QUFDQSw2REFBNkQsWUFBWSxLQUFLLFNBQVMsUUFBUSxLQUFLO0FBQ3BHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBUEkge1xuICBjb25zdHJ1Y3RvcihhcGlLZXkpIHtcbiAgICB0aGlzLkFQSUtleSA9IGFwaUtleTtcbiAgfVxuXG4gIGNyZWF0ZUN1cnJlbnRVUkwobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke3RoaXMuQVBJS2V5fSZxPSR7bG9jYXRpb259JmFxaT1ub2A7XG4gIH1cblxuICBjcmVhdGVGb3JlY2FzdFVSTChsb2NhdGlvbiwgZGF5cyA9IDgpIHtcbiAgICByZXR1cm4gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHt0aGlzLkFQSUtleX0mcT0ke2xvY2F0aW9ufSZkYXlzPSR7ZGF5c30mYXFpPW5vJmFsZXJ0cz1ub2A7XG4gIH1cblxuICBhc3luYyBmZXRjaFJlc3BvbnNlKHVybCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3QgT0tcIik7XG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcmVzcG9uc2VKU09OO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGluIGdldHRpbmcgY3VycmVudCBkYXRhOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZldGNoRm9yZWNhc3RSZXNwb25zZShsb2NhdGlvbiwgZGF5cyA9IDgpIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmNyZWF0ZUZvcmVjYXN0VVJMKGxvY2F0aW9uLCBkYXlzKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2VKU09OID0gYXdhaXQgdGhpcy5mZXRjaFJlc3BvbnNlKHVybCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpTT04pO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlSlNPTjtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiBmZXRjaGluZyBkYXRhOiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=