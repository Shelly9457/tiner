"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import HeaderVideo from "@/components/HeaderVideo";
const revive = () => {
    const CardData = [
        {
            name: "城市汙水",
            img: "/images/revive2.png"
        },
        {
            name: "厭氧發酵產生沼氣",
            img: "/images/revive3.png"
        },
        {
            name: "脫硫裝置",
            img: "/images/revive4.png"
        },
        {
            name: "製氫發電",
            img: "/images/revive5.png"
        },
    ]
    const Items = [
        {
            name: "污泥除水裝置",
            img: "/images/revive6.png",
            desc: "降低污泥水分，便於後續處理與運輸"
        },
        {
            name: "造粒機",
            img: "/images/revive6.png",
            desc: "將污泥加工成可控粒徑，提高燃料或資源化利用效率"
        },
        {
            name: "尾熱脫水裝置",
            img: "/images/revive7.png",
            desc: "利用廢熱進一步脫水，提高能源回收效率"
        },
        {
            name: "合成氣反應裝置",
            img: "/images/revive7.png",
            desc: "將有機殘渣轉化為合成氣，供燃料電池或其他能源系統使用"
        },
    ]
    const Projects = [
        {
            name: "民營畜農場",
            href: "/revive/sewage",
            img: "/images/revive8.png",
            desc: "從農業廢棄物到清潔電能，實現能源自給自足",
        },
        {
            name: "桃園汙水處理廠",
            href: "/revive/fram",
            img: "/images/revive9.png",
            desc: "從廢污到綠氫，打造台灣首座「廢污資源化」示範廠",
        },
    ]
    return (
        <>
            <HeaderVideo title={"從廢棄到發電 打造永續城市新動能"} desc={"智慧城市 × 再生能源"} video={"https://dl.dropboxusercontent.com/scl/fi/36gn5cys401drnjb9xfwc/app_chinese.mp4?rlkey=62sv345ffjzhjts48xklte56c&raw=1"}></HeaderVideo>
            <section className="flex py-16 min-h-screen">
                <div className="container bg-(--three) sm:w-3/4 w-full me-auto flex relative">
                    <article className="md:w-[90%] w-full ms-auto py-16 flex flex-col justify-around sm:items-start items-center">
                        <h2 className="lg:text-2xl text-lg text-(--light) font-bold">
                            地諾科技以創新氫能技術為核心<br />
                            將廢棄污泥、畜牧廢棄物與城市建築結合<br />
                            創造永續循環的能源系統<br />
                            讓城市不僅消耗能源<br />
                            更能自我發電與儲能，邁向真正的零碳未來
                        </h2>
                        <Link href="#look">
                            <Btn text={"相關案例"}></Btn>
                        </Link>
                    </article>
                    <article className="absolute md:-right-[20%] sm:-right-[30%] sm:block hidden top-[50%] -translate-y-[50%]">
                        <div className="relative lg:w-100 lg:h-130 w-80 h-110">
                            <Image src="/images/revive1.png" alt="revive1" fill className="object-cover"></Image>
                        </div>
                    </article>
                </div>
            </section>
            <section className="pb-16 container center mx-auto flex-col sm:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">永續架構</h1>
                <article className="grid sm:grid-cols-2 grid-col-1 gap-10 lg:w-[60%] w-full">
                    {CardData.map((item, index) => {
                        return (
                            <div key={index} className={`center flex-col gap-4 ${(index + 1) % 2 == 0 ? 'sm:translate-y-[100px] translate-y-0' : ''}`}>
                                <div className="relative h-50 w-50">
                                    <Image src={item.img} fill alt={item.name} className="object-contain"></Image>
                                </div>
                                <h1 className="text-(--dark) font-bold text-xl">{item.name}</h1>
                            </div>
                        )
                    })}
                </article>
            </section >
            <section className="py-16 container center mx-auto flex-col sm:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">沼渣消化系統</h1>
                <article className="w-full">
                    {Items.map((item, index) => {
                        return (
                            <div className="w-full flex justify-between items-center md:flex-row flex-col" key={index}>
                                <div className={`md:w-1/2 w-full flex justify-center md:justify-start ${(index + 1) % 2 == 0 ? 'md:order-2 flex md:justify-end justify-center ' : ''}`}>
                                    <div className={`relative h-80 md:w-[80%] w-full ${(index + 1) % 2 == 0 ? 'ms-auto' : ''}`}>
                                        <Image src={item.img} fill alt={item.name} className="object-cover"></Image>
                                    </div>
                                </div>
                                <div className="md:w-1/2 w-full">
                                    <h1 className="text-(--dark) font-bold sm:text-2xl text-xl">{item.name}</h1>
                                    <h1 className="text-(--two) font-bold sm:text-lg text-md mt-2">{item.desc}</h1>
                                </div>
                            </div>
                        )
                    })}
                </article>
            </section >
            <div id="look"></div>
            <section className="py-16 min-h-screen container mx-auto">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">相關案例</h1>
                {Projects.map((item, index) => {
                    return (
                        <div className={`lg:w-[80%] w-full h-70 mx-auto relative my-10 py-10 md:px-15 px-3 flex flex-col justify-center`} key={index}>
                            <Image src={item.img} fill alt={item.name} className="object-cover -z-1 "></Image>
                            <div className="text-(--light)">
                                <h1 className="text-2xl font-bold ">{item.name}</h1>
                                <p className="text-lg my-4">{item.desc}</p>
                            </div>
                            <Link href={item.href}>
                                <Btn text={"了解更多"}></Btn>
                            </Link>
                        </div>
                    )
                })}
            </section>

        </>
    )
}


export default revive;