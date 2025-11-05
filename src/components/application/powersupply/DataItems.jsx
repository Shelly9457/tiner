
export default function DataItems({ name, title, ismain }) {
    return (
        <div className={`py-5 px-7 bg-slate-50 rounded-lg shadow-lg ${ismain ? 'flex-1 ' : ''}`}>
            <h1 className="text-(--dark) text-lg">{name}</h1>
            <h1 className="text-(--one) font-bold text-4xl sm:tracking-[5px]">{title}</h1>
        </div>
    )
}