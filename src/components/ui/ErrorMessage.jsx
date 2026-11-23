export default function ErrorMessage({ message }) {
    return (
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 p-6 rounded-2xl flex flex-col items-center text-center my-6">
            <span className="text-3xl mb-2">⚠️</span>
            <p className="font-medium text-lg">Unable to load weather</p>
            <p className="text-sm opacity-80 mt-1">
                {message || "Please check your internet connection or search for another city."}
            </p>
        </div>
    );
}
