export default function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-surface/60 backdrop-blur-md rounded-3xl p-5 border border-slate-800/80 shadow-xl ${className}`}
        >
            {children}
        </div>
    );
}
