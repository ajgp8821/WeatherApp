const location = ' Buenos Aires,ar'; // Mexico,mx
const apiKey = '9d17cffd9930023bd525cb94adb0cb4b';
const urlBaseWeather = 'http://api.openweathermap.org/data/2.5/weather';

export const apiWeather = `${urlBaseWeather}?q=${location}&appid=${apiKey}`; // &units=metric