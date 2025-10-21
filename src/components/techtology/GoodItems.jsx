import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function GoodItems({ title, desc, icon, highlight, label }) {
    return (
        <div className="flex">
            <div className="text-(--one) font-bold">
                <h1 className="text-2xl">{title}</h1>
                <p className="text-lg">{desc}</p>
            </div>
            <div className="center bg-(--two) rounded-full text-(--light) w-30 h-30 border-(--light)">
                <FontAwesomeIcon icon={icon} className="text-5xl"></FontAwesomeIcon>
            </div>
            <div>
                <h1>{highlight}</h1>
                <div className="h-1 w-20 bg(--one)"></div>
                <p>{label}</p>
            </div>
        </div>
    )
}