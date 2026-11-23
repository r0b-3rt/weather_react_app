import { useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY_THEME } from "../constants/config";

function getInitialTheme() {
    try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY_THEME);
        if (saved === "light" || saved === "dark") return saved;
    } catch {
        // ignoram
    }
    return window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY_THEME, theme);
        } catch {
            // ignoram
        }
    }, [theme]);

    const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));
    return { theme, toggleTheme };
}
