
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")

const FooterItems = ({ icon, content }) => {
    return (
        <div className="flex items-center my-3" >
            <FontAwesomeIcon icon={icon} className="me-2" />
            <h2>{content}</h2>
        </div>
    )
}

export default FooterItems;