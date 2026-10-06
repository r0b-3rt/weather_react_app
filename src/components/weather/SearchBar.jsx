import { useEffect, useRef, useState } from "react";
import { useWeatherContext } from "../../context/WeatherContext";
import { searchCities } from "../../services/weatherApi";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const { setSelectedCity } = useWeatherContext();
    const wrapperRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query.trim().length >= 2) {
                try {
                    const res = await searchCities(query);
                    setResults(res);
                    setIsOpen(true);
                } catch {
                    setResults([]);
                }
            } else {
                setResults([]);
                setIsOpen(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = city => {
        setSelectedCity(city);
        setQuery("");
        setIsOpen(false);
    };

    return (
        <div ref={wrapperRef} className="relative w-full z-30">
            <div className="relative flex items-center">
                <span className="absolute left-4 text-slate-400">🔍</span>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search for cities..."
                    className="w-full bg-[#1e293b]/70 border border-slate-800 text-slate-100 placeholder-slate-400 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all text-sm"
                />
            </div>

            {isOpen && results.length > 0 && (
                <ul className="absolute left-0 right-0 mt-2 bg-[#1e293b] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-50">
                    {results.map(item => (
                        <li key={item.id}>
                            <button
                                onClick={() => handleSelect(item)}
                                className="w-full text-left px-4 py-3 hover:bg-slate-800/80 text-sm flex justify-between items-center transition-colors"
                            >
                                <span className="font-medium text-slate-200">{item.name}</span>
                                <span className="text-xs text-slate-400">
                                    {item.admin1 ? `${item.admin1}, ` : ""}
                                    {item.country}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
