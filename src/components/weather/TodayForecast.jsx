import Card from "../ui/Card";
import HourlyItem from "./HourlyItem";

export default function TodayForecast({ hourly }) {
    return (
        <Card>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Today's Forecast</h3>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {hourly.map((item, idx) => (
                    <HourlyItem key={idx} hourData={item} />
                ))}
            </div>
        </Card>
    );
}
