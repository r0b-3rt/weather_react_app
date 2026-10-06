import { formatTemp, formatTime } from "../../utils/formatters";
import WeatherIcon from "../ui/WeatherIcon";

export default function HourlyItem({ hourData }) {
    return (
        <div className="flex flex-col items-center justify-between p-3 rounded-2xl bg-slate-800/30 border border-slate-800/50 min-w-[70px]">
            <span className="text-xs font-medium text-slate-400">{formatTime(hourData.time)}</span>
            <WeatherIcon code={hourData.weatherCode} className="text-2xl my-2" />
            <span className="text-base font-bold text-slate-100">{formatTemp(hourData.temp)}</span>
        </div>
    );
}
