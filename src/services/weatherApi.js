import { GEOCODING_API_URL, WEATHER_API_URL } from "../constants/config";
import { transformWeatherData } from "../utils/transformWeather";

export async function searchCities(query) {
    if (!query || query.trim().length < 2) return [];

    const response = await fetch(
        `${GEOCODING_API_URL}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`,
    );
    if (!response.ok) throw new Error("Failed to fetch cities");

    const data = await response.json();
    if (!data.results) return [];

    return data.results.map(item => ({
        id: `${item.id}-${item.latitude}-${item.longitude}`,
        name: item.name,
        country: item.country || "",
        admin1: item.admin1 || "",
        latitude: item.latitude,
        longitude: item.longitude,
    }));
}

export async function fetchWeatherData(city) {
    const { latitude, longitude } = city;
    const params = new URLSearchParams({
        latitude,
        longitude,
        current:
            "temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m",
        hourly: "temperature_2m,weather_code,precipitation_probability",
        daily: "weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_probability_max",
        timezone: "auto",
        forecast_days: "7",
    });

    const response = await fetch(`${WEATHER_API_URL}?${params.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    return transformWeatherData(data, city);
}
