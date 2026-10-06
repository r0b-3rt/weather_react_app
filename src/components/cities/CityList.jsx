import CityCard from "./CityCard";

export default function CityList({ cities, onSelectCity, onDeleteCity }) {
    if (cities.length === 0) {
        return (
            <div className="text-center py-16 text-slate-400">
                No saved cities yet. Search for a city on the Weather page to add it!
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {cities.map(city => (
                <CityCard key={city.id} city={city} onSelect={onSelectCity} onDelete={onDeleteCity} />
            ))}
        </div>
    );
}
