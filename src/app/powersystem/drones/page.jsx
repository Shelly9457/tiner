"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import FourItems from "@/components/application/drones/FourItems";
import FeatureItems from "@/components/application/powersupply/FeatureItems";
import SectionOne from "@/components/SectionOne";
const drones = () => {
    const FeatureData = [
        {
            name: "長續航 × 高能量密度",
            desc: "燃料電池比鋰電池提升 3–5 倍續航",
            icon: faRocket,
        },
        {
            name: "低噪音 × 垂直起降",
            desc: "啟動與飛行過程幾乎無聲，支援垂直起降",
            icon: faVolumeXmark,
        },
    ]
    const CardData = [
        {
            name: "軍事與國防",
            desc: `高續航與低噪音特性，適用於長時間\n
            偵察與巡邏任務，提升情報蒐集效率`,
            img: "/images/drones3.png"
        },
        {
            name: "物流配送",
            desc: `支援偏遠地區或災害區域運輸\n
            實現無人化、綠色運送`,
            img: "/images/drones4.png"
        },
        {
            name: "環境監測",
            desc: `以氫能為核心，進行長時間空氣\n
            品質與氣候觀測減少能源干擾`,
            img: "/images/drones5.png"
        },
        {
            name: "智慧農業",
            desc: `搭載多光譜感測器，\n
            監測作物健康並支援精準噴灑作業`,
            img: "/images/drones6.png"
        },
    ]
    return (
        <>
            <SectionOne text={` 
                地諾科技的氫能無人機動力系統，\n
                結合高效燃料電池與安全儲氫技術提供\n
                遠超鋰電池的能量密度與續航時間\n
                適用於軍事偵察、物流運輸環境監測\n
                與農業應用等多領域`
            }
                img={"/images/drones1.png"}
            >
            </SectionOne >
            <section className="py-16 center lg:w-[80%] gap-5 w-full me-auto md:flex-row flex-col ">
                <article className="lg:w-1/2 w-full">
                    <div className="relative h-80 w-full">
                        <Image src="/images/drones2.png" alt="dornes" fill className="object-cover"></Image>
                    </div>
                </article>
                <article className="my-8 lg:w-1/2 w-full">
                    <div className="lg:w-3/4 w-full ms-auto px-3">
                        <h1 className="text-(--dark) text-lg">額定功率</h1>
                        <h1 className="md:text-3xl mt-3 text-2xl text-(--one) font-bold">1.7 kW – 10 kW</h1>
                        <div className="flex md:justify-start justify-between gap-7 mt-5">
                            <div>
                                <h1 className="text-(--dark) text-md">飛行時間</h1>
                                <h1 className="md:text-3xl mt-3 text-2xl text-(--one) font-bold">60–120 分鐘 </h1>
                            </div>
                            <div>
                                <h1 className="text-(--dark) text-md">最大起飛重量</h1>
                                <h1 className="md:text-3xl mt-3 text-2xl text-(--one) font-bold">5–25 kg</h1>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className="py-16 bg-(--three) mx-auto">
                <div className="container md:w-[80%] w-full mx-auto">
                    <h1 className="text-(--dark) font-bold xl:text-4xl text-3xl md:text-start text-center mb-5">系統特點</h1>
                    {FeatureData.map((item, index) => {
                        return (
                            <FeatureItems key={index} index={index} name={item.name} desc={item.desc} icon={item.icon}></FeatureItems>
                        )
                    })}
                </div>
            </section>
            <section className="py-16 container center mx-auto flex-col sm:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">適用場景</h1>
                <article className="grid lg:grid-cols-2 grid-col-1 gap-10 w-full">
                    {CardData.map((item, index) => {
                        return (
                            <FourItems name={item.name} desc={item.desc} img={item.img} key={index}></FourItems>
                        )
                    })}
                </article>
            </section>
            <section className="py-16 container center mx-auto flex-col">
                <Link href="/powersystem#look" className="mx-auto">
                    <Btn text={"其他應用"}></Btn>
                </Link>
            </section>

        </>
    )
}


export default drones;