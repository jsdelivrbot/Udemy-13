import axios from 'axios';

const API_KEY = 'db28a9f8e6ae96fae54a0fc907ccda59';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
  //fetch data with axios
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //this returns a promise

  return {
    type: FETCH_WEATHER,
    payload: request //here request is a promise
  };
}
