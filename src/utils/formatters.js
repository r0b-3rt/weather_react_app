export function formatTemp(value) {
    if (value === undefined || value === null) return "--°";
    return `${Math.round(value)}°`;
}

export function formatTime(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true });
}

// dateString = "YYYY-MM-DD" in fusul orar al orasului; isToday vine din API (prima zi din prognoza).
export function formatDayName(dateString, isToday = false) {
    if (!dateString) return "";
    if (isToday) return "Today";

    const [y, m, d] = dateString.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("en-US", { weekday: "short" });
}
