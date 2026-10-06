import { getWeatherMeta } from "../../utils/weatherCodes";

export default function WeatherIcon({ code, className = "text-3xl" }) {
    const { icon, label } = getWeatherMeta(code);
    return (
        <span role="img" aria-label={label} className={`inline-block select-none ${className}`}>
            {icon}
        </span>
    );
}
