import ErrorMessage from "../components/ui/ErrorMessage";
import Loader from "../components/ui/Loader";
import AirConditions from "../components/weather/AirConditions";
import CurrentWeather from "../components/weather/CurrentWeather";
import SearchBar from "../components/weather/SearchBar";
import TodayForecast from "../components/weather/TodayForecast";
import WeeklyForecast from "../components/weather/WeeklyForecast";
import { useWeatherContext } from "../context/WeatherContext";
import { useSavedCities } from "../hooks/useSavedCities";
import { useWeather } from "../hooks/useWeather";

export default function WeatherPage() {
    const { selectedCity } = useWeatherContext();
    const { data, loading, error } = useWeather(selectedCity);
    const { addCity, isCitySaved } = useSavedCities();

    const isSaved = selectedCity ? isCitySaved(selectedCity) : false;

    return (
        <div className="flex flex-col gap-6 h-full">
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    <SearchBar />
                </div>
                {selectedCity && (
                    <button
                        onClick={() => addCity(selectedCity)}
                        disabled={isSaved}
                        className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                            isSaved
                                ? "bg-slate-800 text-slate-500 cursor-default"
                                : "bg-sky-500 hover:bg-sky-400 text-white shadow-lg shadow-sky-500/20"
                        }`}
                    >
                        {isSaved ? "Saved" : "+ Save City"}
                    </button>
                )}
            </div>

            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}

            {!loading && !error && data && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content Area (2 cols on desktop) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <CurrentWeather weatherData={data} />
                        <TodayForecast hourly={data.hourly} />
                        <AirConditions weatherData={data} />
                    </div>

                    {/* Right Sidebar - Weekly Forecast (1 col on desktop) */}
                    <div className="lg:col-span-1">
                        <WeeklyForecast daily={data.daily} />
                    </div>
                </div>
            )}
        </div>
    );
}
