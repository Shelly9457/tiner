import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OrganizeItems = ({ icon, title, content }) => {
    return (
        <div className="text-center text-(--one) font-bold my-7">
            <FontAwesomeIcon icon={icon} className="text-4xl"></FontAwesomeIcon>
            <h1 className="text-2xl my-3">{title}</h1>
            <p className="text-md text-(--two) whitespace-pre-line">{content}</p>
        </div>
    )
}
export default OrganizeItems;