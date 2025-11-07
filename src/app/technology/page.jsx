"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import MainBattery from "@/components/technology/MainBattery";
import Good from "@/components/technology/Good";
import GoodItems from "@/components/technology/GoodItems";
import HeaderSlider from "@/components/HeaderSlider";
const technology = () => {
    const homeSlides = [
        { img: "/images/technologySlide1.png" },
        { img: "/images/technologySlide2.png" },
        { img: "/images/technologySlide3.png" },
    ];
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"以創新技術，實現零碳能源新紀元"} desc={"Tiner技術 -"} />

            <section className="container py-16 w-full lg:w-[80%] mx-auto center gap-5 min-h-screen flex-col">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl">主要燃料電池</h1>
                <MainBattery></MainBattery>
            </section>
            <section className="container py-16 w-full md:w-[80%] mx-auto ">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl text-center my-5">燃料電池技術怎麼運作？</h1>
                <div className="center w-full md:flex-row flex-col">
                    <div className="md:w-1/2 w-full">
                        <div className="w-full">
                            <Image src="/images/technology5.png" width={700} height={500} alt="technology5" className="object-cover"></Image>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full center">
                        <p className="text-(--dark) text-lg md:text-start text-center">燃料電池是一種將氫氣與氧氣直接轉換為電能的發電裝置<br />
                            具高能源轉換效率與低排放特性<br />
                            氫氣在陽極分解為質子與電子<br />
                            電子流經外部電路產生電流<br />
                            最後與氧氣在陰極結合產生水
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-(--one) font-bold text-3xl xl:text-4xl text-center my-5">高效能 × 低成本 —— 引領氫能未來</h1>
                    <p className="text-(--dark) text-lg">
                        地諾科技以高效能燃料電池與創新製造工藝，兼顧能源效率與經濟效益，推動氫能技術普及<br />
                        我們的技術不僅降低成本，更在效能、壽命、穩定性全面超越傳統發電方案
                    </p>
                </div>
            </section>
            <section className="py-16 w-full gap-5 center gap-5 min-h-screen flex-col">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl text-center my-5">電池燃料技術優勢在哪裡？</h1>
                <Good></Good>
                <GoodItems></GoodItems>
            </section>
            <section className="container py-16 w-full md:w-[80%] mx-auto ">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl text-center my-2">花更少，得更多</h1>
                <p className="text-(--two) text-lg text-center font-bold mb-5">為氫能應用打造最佳經濟方案</p>
                <div className="flex gap-5 md:flex-row flex-col">
                    <article className="w-full relative h-100">
                        <Image src="/images/technology6.png" fill alt="technology6" className="object-cover"></Image>
                    </article>
                    <article className="w-full flex justify-around flex-col gap-5">
                        <div className="text-(--one) lg:w-[40%] w-[80%] mx-auto font-bold">
                            <h1 className="text-4xl mb-2">30%<FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon></h1>
                            <h1 className="text-3xl">製造成本降低</h1>
                        </div>
                        <div className="text-(--one) lg:w-[40%] w-[80%] mx-auto font-bold">
                            <h1 className="text-4xl">3 – 5 元/kWh</h1>
                            <h1 className="text-3xl my-2">使用成本</h1>
                            <p className="text-(--two) text-lg">比鋰電池更具競爭力</p>
                        </div>
                    </article>
                </div>
                <div className="flex w-[80%] mx-auto gap-5 justify-center mt-5">
                    <Link href={"/"}><Btn text={"相關產品"}></Btn ></Link>
                    <Link href={"/patent"}><Btn text={"相關專利"}></Btn ></Link>
                </div>
            </section >

        </>
    )
}


export default technology;