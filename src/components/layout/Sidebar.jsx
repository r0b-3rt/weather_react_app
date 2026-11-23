import { useTheme } from "../../hooks/useTheme";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ activeTab, setActiveTab }) {
    const { theme, toggleTheme } = useTheme();
    const isLight = theme === "light";

    return (
        <aside className="w-20 md:w-24 bg-surface/40 border-r border-slate-800/60 flex flex-col items-center py-6 px-2 flex-shrink-0">
            {/* App Logo */}
            <div className="mb-10 w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center text-2xl border border-sky-500/30">
                🌤️
            </div>

            {/* Navigation Buttons */}
            <nav className="flex flex-col gap-4 w-full">
                <SidebarItem
                    icon="☁️"
                    label="Weather"
                    isActive={activeTab === "weather"}
                    onClick={() => setActiveTab("weather")}
                />
                <SidebarItem
                    icon="🏙️"
                    label="Cities"
                    isActive={activeTab === "cities"}
                    onClick={() => setActiveTab("cities")}
                />
            </nav>

            {/* Theme toggle */}
            <button
                onClick={toggleTheme}
                role="switch"
                aria-checked={isLight}
                aria-label="Light mode"
                title={isLight ? "Switch to dark mode" : "Switch to light mode"}
                className="mt-4 w-full flex flex-col items-center gap-1 py-3 rounded-2xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 transition-all"
            >
                <span className="text-2xl" aria-hidden="true">
                    {isLight ? "🌙" : "☀️"}
                </span>
                <span className="text-xs">{isLight ? "Dark" : "Light"}</span>
            </button>
        </aside>
    );
}
