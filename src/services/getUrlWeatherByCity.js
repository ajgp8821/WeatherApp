import { apiKey, urlBaseWeather } from './../constants/apiUrl';

const getUrlWeatherByCity = city => {
    return `${urlBaseWeather}?q=${city}&appid=${apiKey}`; // &units=metric
}

export default getUrlWeatherByCity;
