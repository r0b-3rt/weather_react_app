import { formatTemp } from "../../utils/formatters";
import WeatherIcon from "../ui/WeatherIcon";

export default function CurrentWeather({ weatherData }) {
    const { city, current, chanceOfRain } = weatherData;

    return (
        <div className="flex justify-between items-center py-4 px-2">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-heading tracking-wide">{city.name}</h1>
                <p className="text-slate-400 text-sm mt-1">Chance of rain: {chanceOfRain}%</p>
                <div className="text-5xl md:text-6xl font-extrabold text-heading mt-8 tracking-tight">
                    {formatTemp(current.temp)}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <WeatherIcon code={current.weatherCode} className="text-7xl md:text-8xl drop-shadow-lg" />
            </div>
        </div>
    );
}
