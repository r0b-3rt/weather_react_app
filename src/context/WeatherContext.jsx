import { createContext, useContext, useMemo, useState } from "react";
import { DEFAULT_CITY } from "../constants/config";

const WeatherContext = createContext(null);

export function WeatherProvider({ children }) {
    const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);

    const value = useMemo(() => ({ selectedCity, setSelectedCity }), [selectedCity]);

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}

export function useWeatherContext() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeatherContext must be used within a WeatherProvider");
    }
    return context;
}
