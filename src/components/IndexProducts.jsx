import Link from "next/link";
import Btn from "@/components/Btn";
import Image from "next/image";
export default function IndexProducts() {
    const Data = [
        {
            name: "燃料電池系統",
            href: "/generation",
            img: "/images/index1.png"
        },
        {
            name: "電池元件",
            href: "/generation/keyproduct",
            img: "/images/index2.png"
        },
        {
            name: "生物質轉化系統",
            href: "/waste",
            img: "/images/index3.png"
        },
        {
            name: "電池堆",
            href: "/generation/components",
            img: "/images/index4.png"
        },
    ]
    return (
        Data.map((item, index) => {
            return (
                <div className={`flex bg-[#3C3C3D] justify-between items-center py-6 px-8 md:w-[70%] w-full ${(index + 1) % 2 == 0 ? "ms-auto" : "me-auto"}`} key={index}>
                    <div>
                        <h1 className="text-(--light) font-bold text-2xl mb-3">{item.name}</h1>
                        <Link href={item.href}>
                            <Btn text={"了解更多"}></Btn>
                        </Link>
                    </div>
                    <div className="relative h-50 w-70">
                        <Image src={item.img} alt={item.name} fill className="object-contain"></Image>
                    </div>
                </div>
            )
        })
    )
}