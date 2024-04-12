class API {
  constructor(apiKey) {
    this.APIKey = apiKey;
  }

  createCurrentURL(location) {
    return `http://api.weatherapi.com/v1/current.json?key=${this.APIKey}&q=${location}&aqi=no`;
  }

  createForecastURL(location, days=8){
    return `http://api.weatherapi.com/v1/forecast.json?key=${this.APIKey}&q=${location}&days=${days}&aqi=no&alerts=no`
  }

  async fetchResponse(url) {
    try {
      const response = await fetch(url, {
        mode: "cors",
      }); 
      if(!response.ok){
        throw new Error("Network response was not OK");
      }
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log("Error in getting current data: ", error);
    }
  }

  async fetchForecastResponse(location, days=8){
    const url = this.createForecastURL(location, days);
    try{
      const responseJSON = await this.fetchResponse(url);
      return responseJSON;
    } catch(error){
      console.log("Error in fetching data: ", error);
    }
  }
}

export default API;
