import API from "./api.js";
import Weather from "./weather.js"

const APIKey = "1cb6dfdb758948eabb403513240404";

export default class UI{
  constructor(){
    this.api = new API(APIKey);
    this.cacheDOM();
    this.createBoilerPlate();
    this.cacheDOMWrapper();
    this.addInfoCardStructure();
    this.addMapping();
    this.bindEvents();
    this.initialLoad();
  }

  async initialLoad(){
    const response = await this.api.fetchForecastResponse("london");
    this.weatherData = new Weather(response);
    this.loadCurrentInfo();
    this.loadForecastInfo();
  }

  cacheDOM(){
    this.wrapper = document.querySelector("#wrapper");
  }

  createBoilerPlate(){
    this.wrapper.innerHTML = `
      <div class="header"> 
        <div class="header-logo"><img id="header-logo" src="#" alt="header logo"></div>
        <div class="search">
        <form action="#" method="post" id="search-form">
          <label for="search-content" >Search</label>
          <input type="text" name="search-content" id="search-content">
          <input type="submit" value="Submit">
        </form>
        </div>
      </div>
      <div class='main-content'>
        <div class="current-main">
          <div id="location"></div>
          <div id="date"></div>
          <div id="local-time"></div>
          <div id="current-icon"></div>
          <div id="current-temp">
          </div>
        </div>
        <div class="current-info-grid">
          <div class="current-info-card" id="sunrise-time"></div>
          <div class="current-info-card" id="sunset-time"></div>
          <div class="current-info-card" id="chance-of-rain"></div>
          <div class="current-info-card" id="humidity"></div>
          <div class="current-info-card" id="wind-speed"></div>
          <div class="current-info-card" id="feels-like"></div>
          <div class="current-info-card" id="precipitation"></div>
          <div class="current-info-card" id="pressure"></div>
          <div class="current-info-card" id="visibility"></div>
          <div class="current-info-card" id="uv-index"></div>
        </div>
        <div class="forecast-info-grid"> 
        </div>
      </div>
    `
  }

  cacheDOMWrapper(){
    this.searchForm = document.querySelector("#search-form");
    this.searchContent = document.querySelector("#search-content");
    this.mainContent = document.querySelector(".main-content");

    this.currentLocation = document.querySelector("#location");
    this.currentDate = document.querySelector("#date");
    this.localTime = document.querySelector("#local-time");
    this.currentIcon = document.querySelector("#current-icon");
    this.currentTemp = document.querySelector("#current-temp");

    this.sunriseTime = document.querySelector("#sunrise-time");
    this.sunsetTime = document.querySelector("#chance-of-rain");
    this.chanceOfRain = document.querySelector("#chance-of-rain");
    this.humidity = document.querySelector("#humidity");
    this.windSpeed = document.querySelector("#wind-speed");
    this.feelsLike = document.querySelector("#feels-like");
    this.precipitation = document.querySelector("#precipitation");
    this.pressure = document.querySelector("#pressure");
    this.visibility = document.querySelector("#visibility");
    this.UVIndex = document.querySelector("#uv-index");

    this.currentInfoCards = document.querySelectorAll(".current-info-card");

    this.forecastInfoGrid = document.querySelector(".forecast-info-grid")
  }

  addInfoCardStructure(){
    this.currentInfoCards.forEach(card => {
      const infoName = document.createElement("div");
      infoName.classList.add("info-name");

      const infoIcon = document.createElement("div");
      infoIcon.classList.add("info-icon");

      const infoContent = document.createElement("div");
      infoContent.classList.add("info-content");

      card.appendChild(infoName);
      card.appendChild(infoIcon);
      card.appendChild(infoContent);
    })
  }

  addMapping(){
    this.currentInfoMap = {
      "sunrise-time": { name: "Sunrise", property: "sunrise" },
      "sunset-time": { name: "Sunset", property: "sunset" },
      "chance-of-rain": { name: "Chance of Rain", property: "chanceOfRain" },
      "humidity": { name: "Humidity", property: "humidity" },
      "wind-speed": { name: "Wind Speed", property: "windSpeed" },
      "feels-like": { name: "Feels Like", property: "feelsLike" },
      "precipitation": { name: "Precipitation", property: "precipitation" },
      "pressure": { name: "Pressure", property: "pressure" },
      "visibility": { name: "Visibility", property: "visibility" },
      "uv-index": { name: "UV Index", property: "uv" },
    }
  }

  async search(event){
    event.preventDefault();
    const location =  this.getInput();
    const response = await this.api.fetchForecastResponse(location);
    this.weatherData = new Weather(response);
    this.loadCurrentInfo();
    this.loadForecastInfo();
  }

  getInput(){
    const val = this.searchContent.value;
    this.searchContent.value = "";
    this.searchContent.blur();
    return val;
  }

  bindEvents(){
    this.searchForm.addEventListener("submit",e => {this.search(e)});
  }

  loadCurrentInfo(){
    if (!this.weatherData || !this.weatherData.currentDataMetric) {
      console.log("No weather data available.");
    }

    const currentData = this.weatherData.currentDataMetric;
    this.currentLocation.textContent = this.weatherData.location;
    this.currentDate.textContent = this.weatherData.date;
    this.localTime.textContent = this.weatherData.time;
    this.currentTemp.textContent = currentData.temp;

    const weatherIcon = document.createElement("img");
    weatherIcon.alt = "weather icon";
    weatherIcon.src = currentData.condition.icon;
    this.currentIcon.appendChild(weatherIcon);
    
    this.currentInfoCards.forEach(card => {
      this.fillCardInfo(card, currentData);
    });
  }

  fillCardInfo(card, currentData){
    const cardId = card.id;
    const infoName = card.querySelector(".info-name");
    const infoContent = card.querySelector(".info-content");

    const cardMapping = this.currentInfoMap[cardId];
    if(cardMapping){
      infoName.textContent =cardMapping.name;
      infoContent.textContent = currentData[cardMapping.property];
    }
  }

  loadForecastInfo(){
    const forecastData = this.weatherData.forecastDataMetric;
    this.clear(this.forecastInfoGrid);
    this.forecastInfoGrid.innerHTML = `        
      <div>Day</div>
      <div>Chance of Rain</div>
      <div></div>
      <div>Humidity</div>
      <div>Low</div>
      <div>High</div>
    `
    forecastData.forEach(element => {
      this.createForecastCard(element);
    })
  }

  createForecastCard(element){
    const forecastCard = document.createElement("div");

    const day = document.createElement("div");
    const chanceOfRain = document.createElement("div");
    const humidity = document.createElement("div");
    const maxTemp = document.createElement("div");
    const minTemp = document.createElement("div");
    const imgContainer = document.createElement("div");
    const icon = document.createElement("img");
    icon.alt = "weather icon";
    icon.src = element.condition.icon;
    imgContainer.appendChild(icon);

    day.textContent = element.date;
    chanceOfRain.textContent = element.chanceOfRain;
    humidity.textContent = element.humidity;
    maxTemp.textContent = element.maxTemp;
    minTemp.textContent = element.minTemp;

    forecastCard.appendChild(day);
    forecastCard.appendChild(imgContainer);
    forecastCard.appendChild(chanceOfRain);
    forecastCard.appendChild(humidity);
    forecastCard.appendChild(minTemp);
    forecastCard.appendChild(maxTemp);

    this.forecastInfoGrid.appendChild(forecastCard);
  }

  clear(element){
    if (element) {
      // Loop through all child nodes of the element
      while (element.firstChild) {
          // Remove each child node
          element.removeChild(element.firstChild);
      }
  } else {
      console.error("Element is undefined or null.");
  }
  }
}
