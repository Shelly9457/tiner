import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function FeatureItems({ name, desc, icon, index }) {
    const isright = ((index + 1) % 2 == 0)
    return (
        <div className="flex items-center md:flex-row flex-col my-5 gap-6">
            <article className={`text-(--light) md:w-1/2 w-full  ${isright ? 'md:text-end text-center' : 'md:text-start text-center'}`}>
                <h1 className="text-3xl font-blod mb-3">{name}</h1>
                <p className="text-md">{desc}</p>
            </article>
            <article className={`text-(--light) md:w-1/2 w-full center ${isright ? 'md:-order-1 order-0' : ''}`}>
                <div className={`h-[1px] bg-(--light) flex-1 ${isright ? 'order-2' : ''}`}></div>
                <div className="md:w-40 w-35 md:h-40 h-35 center border-(--light) border-1 rounded-full text-6xl">
                    <FontAwesomeIcon icon={icon} ></FontAwesomeIcon>
                </div>
            </article>
        </div>
    )
}