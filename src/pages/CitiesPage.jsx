import CityList from "../components/cities/CityList";
import { useWeatherContext } from "../context/WeatherContext";
import { useSavedCities } from "../hooks/useSavedCities";

export default function CitiesPage({ setActiveTab }) {
    const { savedCities, removeCity } = useSavedCities();
    const { setSelectedCity } = useWeatherContext();

    const handleSelect = city => {
        setSelectedCity(city);
        setActiveTab("weather");
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-heading">Saved Cities</h1>
                    <p className="text-sm text-slate-400 mt-1">Manage your favorite locations</p>
                </div>
            </div>

            <CityList cities={savedCities} onSelectCity={handleSelect} onDeleteCity={removeCity} />
        </div>
    );
}
