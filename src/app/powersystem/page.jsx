"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import PowerItems from "@/components/powersystem/PowerItems";
import SectionOne from "@/components/SectionOne";
const powersystem = () => {
    const PowerData = [
        {
            name: "無人機",
            desc: "結合高能燃料電池與固態儲氫技術，打造長續航氫能無人機",
            img: "/images/power2.png",
            link: "/",
        },
        {
            name: "氫能載具",
            desc: "簡單介紹簡單介紹簡單介紹簡單介紹簡單介紹",
            img: "/images/power3.png",
            link: "/",
        },
        {
            name: "氫能船舶",
            desc: "簡單介紹簡單介紹簡單介紹簡單介紹簡單介紹",
            img: "/images/power4.png",
            link: "/",
        },
    ]
    return (
        <>
            <section className="flex py-16 min-h-screen">
                <div className="container bg-(--three) sm:w-3/4 w-full me-auto flex relative">
                    <article className="md:w-[90%] w-full ms-auto py-16 flex flex-col justify-around sm:items-start items-center">
                        <h2 className="lg:text-2xl text-lg text-(--light) font-bold">
                            地諾科技的氫能動力系統，<br />
                            整合高效燃料電池、<br />
                            固態儲氫技術與智慧能源管理，<br />
                            實現穩定、安全的綠色動力解決方案。<br />
                            系統可根據應用需求進行模組化擴展，<br />
                            涵蓋車輛推進、無人機動力、<br />
                            儲能電站與緊急電源系統等領域。
                        </h2>
                        <Link href="#look">
                            <Btn text={"相關應用"}></Btn>
                        </Link>
                    </article>
                    <article className="absolute md:-right-[20%] sm:-right-[30%] sm:block hidden top-[50%] -translate-y-[50%]">
                        <div className="relative lg:w-100 lg:h-130 w-80 h-110">
                            <Image src="/images/power1.png" alt="power1" fill className="object-cover"></Image>
                        </div>
                    </article>
                </div>
            </section>
            <section className="py-16 min-h-screen container mx-auto">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">相關應用</h1>
                {PowerData.map((item, index) => {
                    return (
                        <PowerItems key={index} name={item.name} desc={item.desc} index={index} img={item.img} link={item.link}></PowerItems>

                    )
                })}
            </section>

        </>
    )
}


export default powersystem;