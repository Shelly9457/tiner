import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function IconBox({ name, icon }) {
    return (
        <div className="center gap-5 flex-col">
            <div className="center w-50 h-50 rounded-full bg-[#FEFEFE]">
                <FontAwesomeIcon icon={icon} className="text-8xl text-(--two)"></FontAwesomeIcon>
            </div>
            <h1 className="text-(--one) font-bold text-2xl whitespace-pre-line leading-none">{name}</h1>
        </div>
    )
}