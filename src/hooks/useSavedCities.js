import { useEffect, useState } from "react";
import { DEFAULT_CITY, LOCAL_STORAGE_KEY_CITIES } from "../constants/config";

function loadCities() {
    try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY_CITIES);
        const parsed = saved ? JSON.parse(saved) : null;
        return Array.isArray(parsed) ? parsed : [DEFAULT_CITY];
    } catch {
        return [DEFAULT_CITY];
    }
}

const sameCity = (a, b) => a.latitude === b.latitude && a.longitude === b.longitude;

export function useSavedCities() {
    const [savedCities, setSavedCities] = useState(loadCities);

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY_CITIES, JSON.stringify(savedCities));
        } catch {
            // localStorage indisponibil (mod privat / plin) - ignoram
        }
    }, [savedCities]);

    const addCity = city => {
        setSavedCities(prev => (prev.some(c => sameCity(c, city)) ? prev : [...prev, city]));
    };

    const removeCity = cityId => {
        setSavedCities(prev => prev.filter(c => c.id !== cityId));
    };

    const isCitySaved = city => savedCities.some(c => sameCity(c, city));

    return { savedCities, addCity, removeCity, isCitySaved };
}
