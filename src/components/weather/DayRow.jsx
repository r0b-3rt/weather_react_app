import { formatDayName, formatTemp } from "../../utils/formatters";
import { getWeatherMeta } from "../../utils/weatherCodes";
import WeatherIcon from "../ui/WeatherIcon";

export default function DayRow({ dayData }) {
    const meta = getWeatherMeta(dayData.weatherCode);

    return (
        <div className="flex items-center justify-between py-3 border-b border-slate-800/60 last:border-0">
            <span className="text-sm font-medium text-slate-400 w-16">{formatDayName(dayData.date)}</span>
            <div className="flex items-center gap-2 flex-1 justify-center">
                <WeatherIcon code={dayData.weatherCode} className="text-xl" />
                <span className="text-xs text-slate-300 font-medium hidden sm:inline">{meta.label}</span>
            </div>
            <div className="text-sm font-semibold text-right">
                <span className="text-slate-100">{formatTemp(dayData.maxTemp)}</span>
                <span className="text-slate-500 ml-2">{formatTemp(dayData.minTemp)}</span>
            </div>
        </div>
    );
}
