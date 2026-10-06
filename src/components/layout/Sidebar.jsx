import SidebarItem from "./SidebarItem";

export default function Sidebar({ activeTab, setActiveTab }) {
    return (
        <aside className="w-20 md:w-24 bg-[#1e293b]/40 border-r border-slate-800/60 flex flex-col items-center py-6 px-2 flex-shrink-0">
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
        </aside>
    );
}
