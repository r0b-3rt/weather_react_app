export function formatTemp(value) {
    if (value === undefined || value === null) return "--°";
    return `${Math.round(value)}°`;
}

export function formatTime(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true });
}

export function formatDayName(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const today = new Date().toISOString().split("T")[0];
    if (dateString === today) return "Today";

    return date.toLocaleDateString("en-US", { weekday: "short" });
}
