import Card from "../ui/Card";
import DayRow from "./DayRow";

export default function WeeklyForecast({ daily }) {
    return (
        <Card className="h-full flex flex-col justify-between">
            <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">7-Day Forecast</h3>
                <div className="divide-y divide-slate-800/40">
                    {daily.map((day, idx) => (
                        <DayRow key={idx} dayData={day} />
                    ))}
                </div>
            </div>
        </Card>
    );
}
