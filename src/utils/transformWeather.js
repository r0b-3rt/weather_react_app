export function transformWeatherData(apiData, cityInfo) {
    const current = {
        temp: apiData.current.temperature_2m,
        weatherCode: apiData.current.weather_code,
        apparentTemp: apiData.current.apparent_temperature,
        windSpeed: apiData.current.wind_speed_10m,
        isDay: apiData.current.is_day,
    };

    // Extract next 6 hours starting from current hour
    const currentHourISO = apiData.current.time;
    const currentHourIndex = apiData.hourly.time.findIndex(t => t.startsWith(currentHourISO.slice(0, 13))) || 0;

    const hourly = apiData.hourly.time.slice(currentHourIndex, currentHourIndex + 6).map((time, idx) => {
        const realIndex = currentHourIndex + idx;
        return {
            time,
            temp: apiData.hourly.temperature_2m[realIndex],
            weatherCode: apiData.hourly.weather_code[realIndex],
            pop: apiData.hourly.precipitation_probability[realIndex] ?? 0,
        };
    });

    const daily = apiData.daily.time.map((date, idx) => ({
        date,
        maxTemp: apiData.daily.temperature_2m_max[idx],
        minTemp: apiData.daily.temperature_2m_min[idx],
        weatherCode: apiData.daily.weather_code[idx],
        uvIndex: apiData.daily.uv_index_max[idx],
        maxPop: apiData.daily.precipitation_probability_max[idx] ?? 0,
    }));

    const chanceOfRain = apiData.hourly.precipitation_probability[currentHourIndex] ?? daily[0]?.maxPop ?? 0;
    const uvIndex = daily[0]?.uvIndex ?? 0;

    return {
        city: cityInfo,
        current,
        chanceOfRain,
        uvIndex,
        hourly,
        daily,
    };
}
