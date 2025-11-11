"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import HeaderSlider from "@/components/HeaderSlider";
import AppVideo from "@/components/AppVideo";
const application = () => {
    const homeSlides = [
        { img: "/images/appSlide1.png" },
        { img: "/images/appSlide2.png" },
        { img: "/images/appSlide3.png" },
    ];
    const Items = [
        {
            title: "智慧城市與再生能源",
            desc: "地諾科技結合氫能與再生能源，\n推動污水資源化與廢棄物再利用，\n實現零碳排與永續循環",
            href: "/revive",
            img: "/images/app1.png"
        },
        {
            title: "氫能動力系統",
            desc: "地諾科技提供高效能燃料電池解決\n方案，涵蓋無人機、客運與海運，\n實現低碳、高效的運輸革命",
            href: "/powersystem",
            img: "/images/app2.png"
        },
        {
            title: "氫能便攜式電源",
            desc: "地諾科技的固態儲氫技術，\n突破傳統高壓儲氫瓶限制，\n實現常溫常壓的氫氣儲存，\n大幅提升使用安全與便利性",
            href: "/powersupply",
            img: "/images/app3.png"
        },
        {
            title: "固態儲氫技術",
            desc: "地諾科技開發的氫能便攜式電源，\n整合高效燃料電池與固態儲氫技術，\n提供高功率輸出與長時間續航。",
            href: "/store",
            img: "/images/app4.png"
        },
    ]
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"氫能，連結城市與未來的綠色橋樑"} desc={"共創綠色未來，從氫能開始"} />
            <section className="mx-auto py-16 lg:w-[80%] w-full container">
                <AppVideo></AppVideo>
            </section>
            <section className="container lg:w-[80%] w-full py-16 min-h-screen center flex-col gap-8 mx-auto">
                {Items.map((item, index) => {
                    return (
                        <div className="w-full flex justify-between items-center md:flex-row flex-col gap-5" key={index}>
                            <div className={`md:w-1/2 w-full flex justify-center md:justify-start ${(index + 1) % 2 == 0 ? 'md:order-2 flex md:justify-end justify-center ' : ''}`}>
                                <h1 className="text-(--one) font-bold sm:text-xl text-lg mt-2 whitespace-pre-line leading-none">{item.desc}</h1>
                            </div>
                            <div className="md:w-1/2 w-full relative">
                                <div className={`relative h-80 xl:w-[80%] w-full`}>
                                    <div className="absolute z-1 inset-0 flex justify-center  flex-col gap-8 px-9">
                                        <h1 className="text-(--light) font-bold sm:text-2xl text-xl">{item.title}</h1>
                                        <Link href={item.href}>
                                            <Btn text={"了解更多"}></Btn>
                                        </Link>
                                    </div>
                                    <Image src={item.img} fill alt={item.title} className="object-cover brightness-50"></Image>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>

        </>
    )
}


export default application;