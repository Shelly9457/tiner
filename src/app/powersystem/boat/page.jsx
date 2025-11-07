"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill1, faBatteryFull, faLeaf } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import IconBox from "@/components/IconBox";
import SectionOne from "@/components/SectionOne";
import HeaderSlider from "@/components/HeaderSlider";


const boat = () => {
    const IconItems = [
        {
            name: "每90天節省185萬元",
            icon: faMoneyBill1,
        },
        {
            name: `100kW燃料電池＋
            100kWh電池組運作`,
            icon: faBatteryFull,
        },
        {
            name: `碳排放減少50%以上`,
            icon: faLeaf,
        },
    ]
    const homeSlides = [
        { img: "/images/boatSlide1.png" },
        { img: "/images/boatSlide2.png" },
        { img: "/images/boatSlide3.png" },
    ];
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"以氫為舵，啟航綠色未來"} desc={"以科技實現海運減碳，領航全球綠色轉型"} />
            <SectionOne text={` 
                    地諾科技以氫能為核心，\n
                    打造新一代「遠洋貨輪氫能動力系統」\n
                    結合燃料電池與高效電池組，\n
                    提供強大穩定且環保的航行動力，\n
                    為海運產業開啟永續低碳的新篇章`
            }
                img={"/images/boat1.png"}
            >
            </SectionOne >
            <section className="pb-16 lg:w-[80%] w-full mx-auto ">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl md:text-start text-center mb-5">改造成果</h1>
                <article className="flex justify-between mx-auto gap-8 md:flex-row flex-col">
                    {IconItems.map((item, index) => {
                        return (
                            <IconBox name={item.name} icon={item.icon} key={index}></IconBox>
                        )
                    })}
                </article>
            </section>
            <section className="py-16 lg:w-[80%] w-full mx-auto center flex-col">
                <h1 className="text-(--one) font-bold text-center md:text-2xl text-xl">
                    氫燃料電池以高能量密度、低碳排放與高回收率，<br />
                    成為新世代綠色海運的首選動力核心
                </h1>
                <Link href="/powersystem#look" className="mx-auto">
                    <Btn text={"其他應用"} className="mx-auto"></Btn>
                </Link>
            </section>
        </>
    )
}


export default boat;