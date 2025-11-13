import Image from "next/image"
import BatteryCard from "./BatteryCard"
const MainBattery = () => {
    const CardDatas = [
        {
            name: "PEMFC｜質子交換膜燃料電池",
            img: "/images/technology1.png",
            content: "應用於車輛、便攜電源與備用電力",
        },
        {
            name: "SOFC｜固態氧化物燃料電池",
            img: "/images/technology2.png",
            content: "用於固定式發電與高效能能源系統",
        },
    ]
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 flex-1 lg:w-[80%] w-full mx-auto">
            {CardDatas.map((item, id) => {
                return (
                    <BatteryCard key={id} name={item.name} img={item.img} content={item.content}></BatteryCard>
                )
            })}
        </div>
    )
}
export default MainBattery