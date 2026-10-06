import { useEffect, useState } from "react";
import { DEFAULT_CITY, LOCAL_STORAGE_KEY_CITIES } from "../constants/config";

export function useSavedCities() {
    const [savedCities, setSavedCities] = useState(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY_CITIES);
        return saved ? JSON.parse(saved) : [DEFAULT_CITY];
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CITIES, JSON.stringify(savedCities));
    }, [savedCities]);

    const addCity = city => {
        setSavedCities(prev => {
            if (prev.some(c => c.latitude === city.latitude && c.longitude === city.longitude)) {
                return prev;
            }
            return [...prev, city];
        });
    };

    const removeCity = cityId => {
        setSavedCities(prev => prev.filter(c => c.id !== cityId));
    };

    const isCitySaved = cityId => {
        return savedCities.some(c => c.id === cityId);
    };

    return { savedCities, addCity, removeCity, isCitySaved };
}
