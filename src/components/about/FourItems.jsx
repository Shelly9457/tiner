import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FourItems = ({ icon, title, content, color }) => {
    return (
        <div className={`items rounded-lg center flex-col text-(--light) flex-1 py-9 px-5 gap-5 text-center`} style={{ backgroundColor: `var(--${color})` }}>
            <FontAwesomeIcon icon={icon} className="text-5xl"></FontAwesomeIcon>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-md whitespace-pre-line">{content}</p>
        </div>
    )

}
export default FourItems;