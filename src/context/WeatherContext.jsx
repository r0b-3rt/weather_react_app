import { createContext, useContext, useState } from "react";
import { DEFAULT_CITY } from "../constants/config";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY);

    return <WeatherContext.Provider value={{ selectedCity, setSelectedCity }}>{children}</WeatherContext.Provider>;
}

export function useWeatherContext() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeatherContext must be used within a WeatherProvider");
    }
    return context;
}
