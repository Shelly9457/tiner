
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLeaf, faGlobe, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

export default function GoodItems() {
    const GoodItemsDatas = [
        {
            icon: faLeaf,
            title: "環保零排放",
            desc: "產物僅為水，實現真正碳中和",
        },
        {
            icon: faGlobe,
            title: "應用廣泛",
            desc: "涵蓋交通、儲能與分散式發電場景",
        },
        {
            icon: faVolumeMute,
            title: "低噪音運行",
            desc: "適合城市與住宅應用，安靜環保",
        },
    ]
    return (
        <div className="center gap-3 md:flex-row flex-col">
            {
                GoodItemsDatas.map((item, id) => {
                    return (
                        <div className="center flex-col gap-3 my-3" key={id}>
                            <div className="bg-(--one) rounded-full w-45 h-45 center">
                                <div className="bg-(--two) rounded-full w-40 h-40 center border-(--light) border-2">
                                    <FontAwesomeIcon icon={item.icon} className="text-7xl text-(--light)"></FontAwesomeIcon>
                                </div>
                            </div >
                            <h1 className="text-(--dark) text-2xl">{item.title}</h1>
                            <p className="text-(--dark) text-lg">{item.desc}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}