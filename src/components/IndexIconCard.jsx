import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCardAlt, faPlane, faCity, faRecycle } from "@fortawesome/free-solid-svg-icons";


export default function IndexIconCard() {
    const Data = [
        { name: "氫能客運與車輛", icon: faIdCardAlt },
        { name: "無人機動力系統", icon: faPlane },
        { name: "智慧城市能源系統", icon: faCity },
        { name: "生物質轉化與\n再生能源", icon: faRecycle },
    ]
    return (
        Data.map((item, index) => {
            return (
                <div className="center flex-col bg-[#FEFEFE] rounded-lg shadow-md py-12 px-8 gap-6" key={index}>
                    <h1 className="font-bold text-2xl  text-(--one)">{item.name}</h1>
                    <FontAwesomeIcon icon={item.icon} className="text-6xl  text-(--two)"></FontAwesomeIcon>
                </div>
            )
        })
    )
}