export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center p-12 w-full h-full min-h-[300px]">
            <div className="w-12 h-12 border-4 border-sky-500/20 border-t-sky-400 rounded-full animate-spin"></div>
            <p className="mt-4 text-sm text-slate-400 animate-pulse">Fetching weather data...</p>
        </div>
    );
}
