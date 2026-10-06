import { useState } from "react";
import AppLayout from "./components/layout/AppLayout";
import CitiesPage from "./pages/CitiesPage";
import WeatherPage from "./pages/WeatherPage";

export default function App() {
    const [activeTab, setActiveTab] = useState("weather");

    return (
        <AppLayout activeTab={activeTab} setActiveTab={setActiveTab}>
            {activeTab === "weather" ? <WeatherPage /> : <CitiesPage setActiveTab={setActiveTab} />}
        </AppLayout>
    );
}
