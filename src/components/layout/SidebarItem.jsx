export default function SidebarItem({ icon, label, isActive, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center justify-center w-full py-4 gap-1 rounded-2xl transition-all duration-200 ${
                isActive
                    ? "text-sky-400 bg-slate-800/50 font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
            }`}
        >
            <span className="text-2xl">{icon}</span>
            <span className="text-xs">{label}</span>
        </button>
    );
}
