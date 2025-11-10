"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faShieldAlt, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import IconBox from "@/components/IconBox";
import HeaderVideo from "@/components/HeaderVideo";
const components = () => {
    const Products = [
        {
            name: "微型電池堆",
            desc: `將原料燃料轉化為氫氣\n供電池使用`,
            img: "/images/component7.png",
        },
        {
            name: "SOFC電池堆",
            desc: `提供燃料及系統\n運作所需的熱能`,
            img: "/images/component8.png",
        },
        {
            name: "PEMFC電池堆",
            desc: `燃燒未完全反應的燃料\n確保環保排放`,
            img: "/images/component9.png",
        },
    ]
    const IconItems = [
        {
            name: "高能量密度",
            icon: faBolt,
        },
        {
            name: "高穩定性",
            icon: faShieldAlt,
        },
        {
            name: `低成本`,
            icon: faMoneyBillAlt,
        },

    ]
    return (
        <>
            <HeaderVideo title={"高效能的氫能核心動力"} desc={"電池元件"} video={"/images/product_chinese.mp4"}></HeaderVideo>

            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-2xl text-xl text-center">
                    地諾科技深耕燃料電池核心技術，<br />
                    從膜電極、電池單元到整體電池堆，<br />
                    以創新材料與結構設計突破傳統限制
                </h1>
                <article className="flex justify-between mx-auto gap-10 md:flex-row flex-col mt-5 lg:w-[80%] w-full">
                    {IconItems.map((item, index) => {
                        return (
                            <IconBox name={item.name} icon={item.icon} key={index}></IconBox>
                        )
                    })}
                </article>
            </section>
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-2xl text-center mb-5">新一代管式電池</h1>
                <div className="flex w-full gap-8 lg:flex-row flex-col">
                    <article className="lg:w-1/2 w-full">
                        <div className="relative xl:h-80 h-50 w-full">
                            <Image src="/images/component1.png" fill alt="component1" className="lg:object-cover object-contain"></Image>
                        </div>
                    </article>
                    <article className="lg:w-1/2 w-full">
                        <h1 className="text-xl text-(--dark) font-bold lg:text-start text-center">
                            新一代電池形態，<br />
                            高度集成的微型化設計，<br />
                            同樣的發電功率下，<br />
                            可以使最終電堆體積縮小75%<br />
                            大大拓展可應用的場景
                        </h1>
                        <div className="relative xl:h-80 h-50 w-full xl:-translate-x-50  mt-5">
                            <Image src="/images/component2.png" fill alt="component2" className="lg:object-cover object-contain"></Image>
                        </div>
                    </article>
                </div>
            </section>
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">PEMFC膜電極</h1>
                <div className="flex w-full sm:gap-8 gap-4 lg:flex-row flex-col">
                    <article className="lg:w-1/2 w-full">
                        <div className="relative sm:h-80 h-60 w-full">
                            <Image src="/images/component3.png" fill alt="component1" className="lg:object-cover object-contain"></Image>
                        </div>
                        <h1 className="text-xl text-(--dark) font-bold mt-5 lg:w-[80%] lg:text-start text-center mx-auto">
                            作為質子交換膜燃料電池的核心元件，<br />
                            PEMFC 膜電極負責氫質子的傳輸與電化學反應，<br />
                            直接影響整體燃料電池的輸出與壽命
                        </h1>
                    </article>
                    <article className="lg:w-1/2 w-full font-bold flex flex-col justify-around">
                        <div className="lg:text-start text-center ">
                            <h1 className="text-2xl text-(--dark) mt-5">
                                佔電池堆總成本
                            </h1>
                            <h1 className="text-(--one) text-4xl">20%</h1>
                        </div>
                        <div className="lg:text-start text-center ">
                            <h1 className="text-2xl text-(--dark) mt-5">
                                第二代產品能量密度提升
                            </h1>
                            <h1 className="text-(--one) text-4xl">10倍</h1>
                        </div>
                    </article>
                </div>
            </section>
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <div className="flex w-full gap-8 lg:flex-row flex-col">
                    <article className="lg:w-1/2 w-full flex flex-col justify-around font-bold ">
                        <h1 className="text-(--one) xl:text-4xl text-3xl mb-5">PEMFC石墨流道板</h1>
                        <h1 className="text-xl text-(--dark)">
                            燃料電池的關鍵部件，<br />
                            主要用於分隔氫氣和氧氣並傳導電流，<br />
                            同時起到分配氣體、導熱和支撐作用
                        </h1>

                    </article>
                    <article className="lg:w-1/2 w-full">
                        <div className="relative h-100 w-full">
                            <Image src="/images/component4.png" fill alt="component1" className="object-cover"></Image>
                        </div>
                    </article>
                </div>
            </section>
            <section className="pt-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <div className="flex w-full gap-8 lg:flex-row flex-col">
                    <article className="lg:w-1/2 w-full flex flex-col justify-around font-bold ">
                        <div className="relative h-100 w-full">
                            <Image src="/images/component5.png" fill alt="component1" className="object-cover rounded-lg"></Image>
                        </div>
                        <div className="bg-(--light) rounded-lg -translate-y-15 center flex-col py-9 w-[90%] mx-auto">
                            <h1 className="text-(--one) xl:text-3xl text-2xl mb-5">SOFC 電池單元</h1>
                            <h1 className="text-lg text-(--dark)">
                                固態氧化物燃料電池基本單元，<br />
                                高溫運作，能夠直接利用多種燃料
                            </h1>
                        </div>
                    </article>
                    <article className="lg:w-1/2 w-full flex flex-col justify-around font-bold ">
                        <div className="relative h-100 w-full">
                            <Image src="/images/component6.png" fill alt="component1" className="object-cover rounded-lg"></Image>
                        </div>
                        <div className="bg-(--light) rounded-lg -translate-y-15 center flex-col py-9 w-[90%] mx-auto">
                            <h1 className="text-(--one) xl:text-3xl text-2xl mb-5">SOFC電池連接板</h1>
                            <h1 className="text-lg text-(--dark)">
                                供電流傳導路徑，同時分散<br />
                                氣體與熱量，確保穩定運作
                            </h1>
                        </div>
                    </article>
                </div>
            </section>
            <section className="py-16 min-h-screen container mx-auto w-[80%] center flex-col">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">電池堆</h1>
                <article className="gap-5 grid md:grid-cols-3 grid-col-1 items-center my-10 w-full" >
                    {Products.map((item, index) => {
                        return (
                            <div className="rounded-lg bg-[#FEFEFE] md:h-150 h-120 flex flex-col" key={index}>
                                <div className="relative h-80 w-full">
                                    <Image src={item.img} fill alt={item.name} className="object-cover rounded-t-lg"></Image>
                                </div>
                                <div className="center flex-col gap-4 px-3 py-5 text-(--one) flex-1">
                                    <h1 className="md:text-2xl text-xl font-bold">{item.name}</h1>
                                    <h1 className="md:text-xl text-md whitespace-pre-line leading-none text-center">{item.desc}</h1>
                                </div>
                            </div>
                        )
                    })
                    }
                </article>
                <Link href="/generation" className="mx-auto">
                    <Btn text={"其他產品"}></Btn>
                </Link>
            </section>
        </>
    )
}


export default components;