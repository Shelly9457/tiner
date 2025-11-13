"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faFire, faBoxOpen, faVial } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import FeatureItems from "@/components/application/powersupply/FeatureItems";
import ToggleProdect from "@/components/generation/ToggleProduct";
import PowerItems from "@/components/application/powersystem/PowerItems";
import HeaderVideo from "@/components/HeaderVideo";
const generation = () => {
    const MakeData = [
        {
            name: "電極催化劑",
            desc: "提高氫氣與氧氣反應效率，提升電池發電效能",
            icon: faFlask,
        },
        {
            name: "重整製氫催化劑",
            desc: "促進燃料重整過程中產生氫氣，\
                   提高系統穩定性與轉換效率",
            icon: faFire,
        },
        {
            name: "封裝材料",
            desc: "確保電堆高溫下氣密、可承受多次高低溫循環、延長電堆壽命",
            icon: faBoxOpen,
        },
        {
            name: "尾燃器催化劑",
            desc: "促進尾氣燃燒，減少污染物排放",
            icon: faVial,
        },
    ]
    const ProductData = [
        {
            name: "客製化關鍵元件",
            desc: "重整器、加熱器、尾燃器",
            img: "/images/generation3.png",
            link: "/generation/keyproduct",
        },
        {
            name: "電池元件",
            desc: "膜電極、電池單元、整體電池堆",
            img: "/images/generation4.png",
            link: "/generation/components",
        },
    ]
    return (
        <>
            <HeaderVideo title={"智慧能源的核心，來自燃料電池的創新力量"} desc={"燃料電池發電系統"} video={"https://dl.dropboxusercontent.com/scl/fi/3f3yjkq1gtcu5t82ybwvh/product_chinese.mp4?rlkey=8bjouvqs08j9plcvvuju5o6md&st=5vu4a0ri&raw=1"}></HeaderVideo>
            <section className="py-16 container center mx-auto flex-col ">
                <h1 className="text-(--one) font-bold xl:text-2xl text-xl text-center">
                    地諾科技致力於推動燃料電池發電系統的革新，<br />
                    以氫能為核心能源，結合高效率電化學轉換技術，<br />
                    打造高效能、低排放、模組化、可擴展 的發電解決方案
                </h1>
            </section>
            <section className="py-16 bg-(--three)">
                <div className="container mx-auto lg:w-[80%] w-full">
                    <h1 className="text-(--dark) font-bold xl:text-4xl text-3xl md:text-start text-center mb-5">主要材料</h1>
                    {
                        MakeData.map((item, index) => {
                            return (
                                <FeatureItems name={item.name} desc={item.desc} icon={item.icon} index={index} key={index}></FeatureItems>
                            )
                        })
                    }
                </div>
            </section>
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">發電系統</h1>
                <p className="text-(--dark) font-bold text-lg mt-3">將氫燃料轉化為電能，可應用於分散式電源、無人機、輕型載具等</p>
                <ToggleProdect></ToggleProdect>
            </section>
            <div id="look"></div>
            <section className="py-16 min-h-screen container mx-auto">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">相關產品</h1>
                {ProductData.map((item, index) => {
                    return (
                        <PowerItems key={index} name={item.name} desc={item.desc} index={index} img={item.img} link={item.link}></PowerItems>
                    )
                })}
            </section>

        </>
    )
}


export default generation;