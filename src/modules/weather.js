import { formatInTimeZone, fromZonedTime } from "date-fns-tz";
import { getDay, isToday } from "date-fns";

class Weather {
  constructor(data) {
    this._current = data.current;
    this._forecast = data.forecast.forecastday;
    this._location = data.location;
  }

  get current() {
    return this._current;
  }

  get forecast() {
    return this._forecast;
  }

  get location() {
    return `${this._location.name}, ${this._location.region}, ${this._location.country}`;
  }

  get currentDataMetric() {
    return {
      temp: this._current.temp_c,
      humidity: this._current.humidity,
      windSpeed: this._current.wind_kph,
      feelsLike: this._current.feelslike_c,
      precipitation: this._current.precip_mm,
      pressure: this._current.pressure_mb,
      visibility: this._current.vis_km,
      uv: this._current.uv,

      condition: this._current.condition,
      maxTemp: this._forecast[0].day.maxtemp_c,
      minTemp: this._forecast[0].day.mintemp_c,
      sunrise: this._forecast[0].astro.sunrise,
      sunset: this._forecast[0].astro.sunset,
      chanceOfRain: this.forecast[0].day.daily_chance_of_rain,
    };
  }

  get currentDataImperial() {
    return {
      temp: this._current.temp_f,
      humidity: this._current.humidity,
      wind_speed: this._current.wind_mph,
      feels_like: this._current.feelslike_f,
      precipitation: this._current.precip_in,
      pressure: this._current.pressure_in,
      visibility: this._current.vis_miles,
      uv: this._current.uv,

      condition: this._current.condition,
      maxTemp: this._forecast[0].day.maxtemp_f,
      minTemp: this._forecast[0].day.mintemp_f,
      sunrise: this._forecast[0].astro.sunrise,
      sunset: this._forecast[0].astro.sunset,
      chanceOfRain: this.forecast[0].day.daily_chance_of_rain,
    };
  }

  getDayOfWeek(day) {
    switch (day) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        return ""; // Handle cases where day is not in the range 0-6
    }
  }

  get forecastDataMetric() {
    const filteredArray = this._forecast.map((weather) => {
      const dateTz = fromZonedTime(weather.date, this._location.tz_id);
      const formattedDate = isToday(dateTz)
        ? "Today"
        : this.getDayOfWeek(dateTz.getDay());
      return {
        date: formattedDate,
        chanceOfRain: weather.day.daily_chance_of_rain,
        condition: weather.day.condition,
        humidity: weather.day.avghumidity,
        maxTemp: weather.day.maxtemp_c,
        minTemp: weather.day.mintemp_c,
      };
    });
    return filteredArray;
  }

  get forecastDataImperial() {
    const filteredArray = this._forecast.map((weather) => {
      const dateTz = fromZonedTime(weather.date, this._location.tz_id);
      const formattedDate = isToday(dateTz)
        ? "Today"
        : this.getDayOfWeek(dateTz.getDay());
      return {
        date: formattedDate,
        chanceOfRain: weather.day.daily_chance_of_rain,
        condition: weather.day.condition,
        humidity: weather.day.avghumidity,
        maxTemp: weather.day.maxtemp_f,
        minTemp: weather.day.mintemp_f,
      };
    });
    return filteredArray;
  }

  get date() {
    const date = new Date(this._location.localtime);
    const formattedDate = formatInTimeZone(
      date,
      this._location.tz_id,
      "MMMM dd, yyyy",
    );
    return formattedDate;
  }

  get time() {
    const date = new Date(this._location.localtime);
    const formattedTime = formatInTimeZone(
      date,
      this._location.tz_id,
      "h:mm a",
    );
    return formattedTime;
  }
}

export default Weather;
