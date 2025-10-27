import Image from "next/image"
export default function CardItems() {
    const CardDatas = [
        {
            img: "/images/patent1.png",
            title: "燃料電池催化劑技術",
            desc: "提升電池轉換效率\n降低鉑族金屬使用量"
        },
        {
            img: "/images/patent2.png",
            title: "高效膜電極組（MEA）",
            desc: "延長燃料電池壽命\n提高穩定性"
        },
        {
            img: "/images/patent3.png",
            title: "固態儲氫技術",
            desc: "透過金屬氫化物\n提高儲氫安全性與密度"
        },
        {
            img: "/images/patent4.png",
            title: "新型電池堆結構",
            desc: "優化設計\n提升功率密度並降低成本"
        },
    ]
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
            {CardDatas.map((item, id) => {
                return (
                    <div className="center flex-col gap-3 text-(--one) font-bold text-center" key={id}>
                        <div className="relative h-50 sm:w-[60%] w-full">
                            <Image src={item.img} fill alt={item.title} className="object-cover"></Image>
                        </div>
                        <h1 className="text-2xl">{item.title}</h1>
                        <p className="text-lg whitespace-pre-line">{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}