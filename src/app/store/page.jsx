"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import StoreItems from "@/components/store/StoreItems";
import SectionOne from "@/components/SectionOne";
const store = () => {
    const StroeDaa = [
        {
            name: "微型電池堆｜小型高效，提供動力",
            img: "/images/store2.png",
            desc: `輕量化燃料電池堆設計\n
                   整合高效能電化學反應模組\n
                   提供穩定輸出與即時電力`,
        }, {
            name: "固態儲氫瓶｜常溫常壓安全儲氫",
            img: "/images/store3.png",
            desc: `以金屬氫化物為基礎的固態儲氫材料\n
                   無需高壓鋼瓶或冷卻設備\n
                   降低燃料周轉風險與成本`,
        },
    ]
    return (
        <>
            <SectionOne text={` 
               地諾科技的固態儲氫技術，\n
                以「常溫、常壓、安全、高效」為核心理念，\n
                結合金屬吸附材料與創新模組化設計，\n
                打造全新一代氫能儲存系統。`
            }
                img={"/images/store1.png"}
            >
            </SectionOne >
            <section className="py-16 container center mx-auto flex-col min-h-screen">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">技術組合</h1>
                <p className="text-(--dark) text-lg text-center">
                    透過微型電池堆與固態儲氫瓶的整合，<br />
                    為行動能源、智慧裝置及分散式供電帶來更靈活、<br />
                    更可靠的綠能解決方案
                </p>
                <div className="flex gap-8 flex-1 md:flex-row flex-col">
                    {StroeDaa.map((item, index) => {

                        return (
                            <StoreItems name={item.name} desc={item.desc} img={item.img} key={index}></StoreItems>
                        )
                    })}
                </div>
            </section>
        </>
    )
}


export default store;