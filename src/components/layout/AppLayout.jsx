import Sidebar from "./Sidebar";

export default function AppLayout({ activeTab, setActiveTab, children }) {
    return (
        <div className="flex h-screen w-screen overflow-hidden bg-[#0b131e]">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-7xl mx-auto h-full">{children}</div>
            </main>
        </div>
    );
}
