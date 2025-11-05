"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faFeatherAlt, faBatteryFull, faDroplet, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import DataItems from "@/components/application/powersupply/DataItems";
import FeatureItems from "@/components/application/powersupply/FeatureItems";
import SectionOne from "@/components/SectionOne";
import HeaderSection from "@/components/application/HeaderSection";
const pwoersupply = () => {
    const Data = [
        [{
            name: "體積",
            title: "31×24×28.8cm",
            ismain: true,
        },
        {
            name: "氫氣轉換率",
            title: "≧50%",
            ismain: false,
        },
        {
            name: "儲存溫度",
            title: "-30~70 度",
            ismain: false,
        },],
        [{
            name: "氫氣純度",
            title: "≧ 99.99%",
            ismain: false,
        },
        {
            name: "氫氣用量",
            title: "10L/min/kW",
            ismain: true,
        },
        {
            name: "工作濕度",
            title: "5%~95%",
            ismain: false,
        },],
        [{
            name: "啟動溫度",
            title: "-20~50度",
            ismain: false,
        },
        {
            name: "氫氣輸入壓力",
            title: "0.7±0.25Bar",
            ismain: true,
        },
        {
            name: "最大功率",
            title: "1500W",
            ismain: false,
        },],
    ]
    const FeatureData = [
        {
            name: "體積小，能量大",
            desc: "輕巧外型下蘊藏強勁動力",
            icon: faBolt,
        },
        {
            name: "重量輕，行動更自由",
            desc: "輕鬆搬運、方便部署，讓能源隨時在手",
            icon: faFeatherAlt,
        },
        {
            name: "功率密度高",
            desc: "兼具長時間運作與高效率轉換",
            icon: faBatteryFull,
        },
        {
            name: "只排放純水",
            desc: "告別廢氣、噪音與污染，實現真正零排放",
            icon: faDroplet,
        },
        {
            name: "低噪音運行",
            desc: "全程低噪音運作，僅如耳語輕聲",
            icon: faVolumeXmark,
        },
    ]
    return (
        <>
            <HeaderSection img={"/images/supply1.png"} title={"隨行綠能，隨時啟動未來力量"} desc={"隨身攜帶的應急電備用電源"}></HeaderSection >
            <div id="look"></div>
            <SectionOne text={` 
                地諾科技氫能便攜式電源，\n
                結合高效率燃料電池與固態儲氫技術，\n
                提供穩定、安全且潔淨的電力來源。\n
                可支援多種家電與戶外設備，\n
                並具備雙電壓輸出（220V / 110V），\n
                靈活應用於各種環境。`
            }
                img={"/images/supply1.png"}
            >
            </SectionOne >
            <section className="py-16 container center mx-auto flex-col ">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">關鍵數據</h1>
                <div className="my-8 lg:w-[80%] w-full mx-auto">
                    {Data.map((item, index) => {
                        return (
                            <div className="flex md:flex-row flex-col justify-between gap-8 my-8" key={index}>
                                {item.map((item, index) => {
                                    return (
                                        <DataItems name={item.name} title={item.title} ismain={item.ismain} key={index}></DataItems>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="py-16 bg-(--three) mx-auto min-h-screen">
                <div className="container md:w-[80%] w-full mx-auto">
                    <h1 className="text-(--dark) font-bold xl:text-4xl text-3xl md:text-start text-center mb-5">產品特色</h1>
                    {FeatureData.map((item, index) => {
                        return (
                            <FeatureItems key={index} index={index} name={item.name} desc={item.desc} icon={item.icon}></FeatureItems>
                        )
                    })}
                </div>
            </section>
            <section className="py-16 container center mx-auto flex-col">
                <h1 className="text-(--one) font-bold xl:text-4xl md:text-3xl text-xl text-center mb-5">不只是電源，更是綠色行動的開始</h1>
                <Link href="/" className="mx-auto">
                    <Btn text={"其他應用"}></Btn>
                </Link>
            </section>

        </>
    )
}


export default pwoersupply;