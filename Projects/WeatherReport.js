"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = `http://api.weatherstack.com/current?access_key=774caa2fbe040220804990971deb85ff&query=${city}`;
        const response = yield fetch(apiKey);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const data = yield response.json();
        // console.log(data);
        return {
            temperature: data.current.temperature,
            description: data.current.weather_descriptions[0],
        };
    });
}
fetchWeather("Mumbai")
    .then((weather) => console.log(weather))
    .catch((error) => console.log(error));
