export default function ConditionItem({ icon, label, value }) {
    return (
        <div className="flex items-start gap-3 p-3">
            <span className="text-2xl text-slate-400">{icon}</span>
            <div>
                <span className="text-xs font-medium text-slate-400 block">{label}</span>
                <span className="text-xl font-bold text-slate-100 mt-0.5 block">{value}</span>
            </div>
        </div>
    );
}
