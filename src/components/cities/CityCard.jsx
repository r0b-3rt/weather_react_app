import { useWeather } from "../../hooks/useWeather";
import { formatTemp } from "../../utils/formatters";
import Card from "../ui/Card";
import WeatherIcon from "../ui/WeatherIcon";

export default function CityCard({ city, onSelect, onDelete }) {
    const { data, loading } = useWeather(city);

    return (
        <Card className="hover:border-slate-700 transition-all duration-200 cursor-pointer group relative">
            <div className="flex justify-between items-center" onClick={() => onSelect(city)}>
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                        {city.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{city.country}</p>
                    <div className="text-3xl font-extrabold text-white mt-4">
                        {loading ? "--°" : formatTemp(data?.current?.temp)}
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                    {!loading && data && <WeatherIcon code={data.current.weatherCode} className="text-5xl" />}
                </div>
            </div>

            <button
                onClick={e => {
                    e.stopPropagation();
                    onDelete(city.id);
                }}
                className="absolute top-4 right-4 text-slate-500 hover:text-rose-400 transition-colors p-1"
                title="Remove city"
            >
                ✕
            </button>
        </Card>
    );
}
