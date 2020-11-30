import { url_base_weather, api__key } from './../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${url_base_weather}?q=${city}&appid=${api__key}`;
}

export default getUrlWeatherByCity;