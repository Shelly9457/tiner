"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBatteryFull, faGasPump } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import IconBox from "@/components/IconBox";
import HeaderSlider from "@/components/HeaderSlider";

const bus = () => {
    const IconItems = [
        {
            name: "110 kW / 輛",
            icon: faBolt,
        },
        {
            name: "105.3 kWh 水冷動力電池",
            icon: faBatteryFull,
        },
        {
            name: `70 MPa 185升高壓氣瓶\n6支（44.4 kg 氫氣）`,
            icon: faGasPump,
        },
    ]
    const homeSlides = [
        { img: "/images/busSlide1.png" },
        { img: "/images/busSlide2.png" },
        { img: "/images/busSlide3.png" },
    ];
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"零碳前行，啟動城市新循環"} desc={"氫能動力載具"} />

            <section className="py-16 lg:w-[80%] w-full mx-auto ">
                <article className="w-full flex items-center lg:flex-row flex-col mb-5 gap-3">
                    <div className="relative h-80 lg:w-2/3 w-full">
                        <Image src="/images/bus1.png" fill alt="bus1" className="object-cover"></Image>
                    </div>
                    <div className=" lg:w-1/3 w-full text-(--dark) text-xl font-bold">
                        <h1>氫能客運系統以燃料電池<br />
                            為核心動力來源，<br />
                            透過高壓氫氣轉換為電能，<br />
                            驅動大型客運車輛，<br />
                            實現長續航、低噪音、零排放
                        </h1>
                    </div>
                </article>
                <article className="w-full flex items-center lg:flex-row flex-col">
                    <div className=" lg:w-1/2 w-full text-(--dark) text-xl font-bold">
                        <h1>相比傳統柴油與鋰電動力系統，<br />
                            氫能具備更高的能量密度與加氫效率，<br />
                            可大幅降低營運成本，<br />
                            並助力城市邁向淨零碳排的永續未來
                        </h1>
                    </div>
                    <div className="relative h-80 lg:w-1/2 w-full center">
                        <Image src="/images/bus2.png" fill alt="bus1" className="object-cover"></Image>
                    </div>
                </article>
            </section>
            <section className="pb-16 lg:w-[80%] w-full mx-auto ">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl md:text-start text-center mb-5">系統配置</h1>
                <article className="flex justify-between mx-auto gap-8 md:flex-row flex-col">
                    {IconItems.map((item, index) => {
                        return (
                            <IconBox name={item.name} icon={item.icon} key={index}></IconBox>
                        )
                    })}
                </article>
            </section>
            <section className="pb-16 lg:w-[80%] w-full mx-auto ">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">市場需求</h1>
                <div className="flex md:flex-row flex-col gap-8">
                    <article className="md:w-1/2 w-full">
                        <div className="relative h-80">
                            <Image src="/images/bus3.png" fill className="object-cover" alt="bus3"></Image>
                        </div>
                    </article>
                    <article className="md:w-1/2 w-full font-bold flex md:flex-col sm:flex-row flex-col md:justify-around justify-center gap-8">
                        <div>
                            <h1 className="text-(--dark) text-2xl">總需求</h1>
                            <h1 className="text-(--one) text-3xl">269,200 </h1>
                        </div>
                        <div className="flex gap-8">
                            <div>
                                <h1 className="text-(--dark) text-2xl">預估市佔</h1>
                                <h1 className="text-(--one) text-3xl">10% </h1>
                            </div>
                            <div>
                                <h1 className="text-(--dark) text-2xl">年均出貨量</h1>
                                <h1 className="text-(--one) text-3xl">861.44 MW </h1>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            <section className="pb-16 lg:w-[80%] w-full mx-auto center flex-col">
                <h1 className="text-(--one) font-bold text-center md:text-2xl text-xl">
                    氫能客運不僅是一項交通技術的革新<br />
                    更是城市邁向低碳、智慧與永續發展的關鍵一步<br />
                    地諾科技將持續推動氫能應用落地<br />
                    以創新能源科技，為城市運輸注入無限綠色動能
                </h1>
                <Link href="/powersystem#look" className="mx-auto">
                    <Btn text={"其他應用"} className="mx-auto"></Btn>
                </Link>
            </section>
        </>
    )
}


export default bus;