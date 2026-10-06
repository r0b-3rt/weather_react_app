import { formatTemp } from "../../utils/formatters";
import Card from "../ui/Card";
import ConditionItem from "./ConditionItem";

export default function AirConditions({ weatherData }) {
    const { current, chanceOfRain, uvIndex } = weatherData;

    return (
        <Card>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Air Conditions</h3>
            <div className="grid grid-cols-2 gap-4">
                <ConditionItem icon="🌡️" label="Real Feel" value={formatTemp(current.apparentTemp)} />
                <ConditionItem icon="💨" label="Wind" value={`${Math.round(current.windSpeed)} km/h`} />
                <ConditionItem icon="🌧️" label="Chance of rain" value={`${chanceOfRain}%`} />
                <ConditionItem icon="☀️" label="UV Index" value={uvIndex !== undefined ? Math.round(uvIndex) : "--"} />
            </div>
        </Card>
    );
}
