import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faFire, faBatteryFull, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import GoodItems from "./GoodItems";
export default function good() {
    const GoodDatas = [
        {
            icon: faBolt,
            title: "高效能源轉換",
            desc: "燃料電池發電效率高達 50%～73%，\n遠超過柴油或汽油發電機的35%～40%",
            highlight: "50%～73%",
            label: "發電效率",
            isdark: false
        },
        {
            icon: faFire,
            title: "能源最大化利用",
            desc: "熱電聯供 (CHP) 效率可突破 95%，\n能同時供應電力與熱能，\n支援能源回收再利用",
            highlight: ">95%",
            label: "熱電聯供效率",
            isdark: true
        },
        {
            icon: faBatteryFull,
            title: "穩定輸出，歷久彌新",
            desc: "系統在 10,000 小時運行仍可維持穩定輸出與低能量衰減，\n長期確保性能穩定",
            highlight: "10,000hr / <1%",
            label: "低能量衰減",
            isdark: false
        },
        {
            icon: faHourglassHalf,
            title: "耐用與低維護兼具",
            desc: "燃料電池設計壽命長達 30,000～50,000 小時，\n大幅降低維護頻率與成本",
            highlight: "30,000～50,000hr",
            label: "長壽命設計",
            isdark: true
        },
    ]
    return (
        <div>
            {GoodDatas.map((item, id) => {
                return (
                    <div className="flex" key={id}>
                        <div className="text-(--one) font-bold">
                            <h1 className="text-2xl">{item.title}</h1>
                            <p className="text-lg whitespace-pre-line">{item.desc}</p>
                        </div>
                        <div className="center bg-(--two) rounded-full text-(--light) w-30 h-30 border-(--light)">
                            <FontAwesomeIcon icon={item.icon} className="text-5xl"></FontAwesomeIcon>
                        </div>
                        <div>
                            <h1>{item.highlight}</h1>
                            <div className="h-1 w-20 bg(--one)"></div>
                            <p>{item.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
