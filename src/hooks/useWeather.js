import { useEffect, useState } from "react";
import { fetchWeatherData } from "../services/weatherApi";

export function useWeather(city) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        if (!city) return;

        setLoading(true);
        setError(null);

        fetchWeatherData(city)
            .then(result => {
                if (isMounted) {
                    setData(result);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError(err.message || "Error fetching weather data");
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [city?.latitude, city?.longitude, city?.name]);

    return { data, loading, error };
}
