import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/weatherApi";

export function useWeather(city) {
    // Rezultatul e legat de orasul pentru care a fost cerut; loading se deduce la randare.
    const [result, setResult] = useState({ city: null, data: null, error: null });

    useEffect(() => {
        if (!city) return;
        let cancelled = false;

        fetchWeatherData(city)
            .then(data => {
                if (!cancelled) setResult({ city, data, error: null });
            })
            .catch(err => {
                if (!cancelled) setResult({ city, data: null, error: err.message || "Error fetching weather data" });
            });

        return () => {
            cancelled = true;
        };
    }, [city]);

    const loading = !!city && result.city !== city;
    return {
        data: loading ? null : result.data,
        loading,
        error: loading ? null : result.error,
    };
}
