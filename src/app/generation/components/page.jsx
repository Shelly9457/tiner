"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faShieldAlt, faMoneyBillAlt } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import IconBox from "@/components/IconBox";
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
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-2xl text-xl text-center">
                    地諾科技深耕燃料電池核心技術，<br />
                    從膜電極、電池單元到整體電池堆，<br />
                    以創新材料與結構設計突破傳統限制
                </h1>
                <article className="flex justify-between mx-auto gap-10 md:flex-row flex-col mt-5 w-[80%]">
                    {IconItems.map((item, index) => {
                        return (
                            <IconBox name={item.name} icon={item.icon} key={index}></IconBox>
                        )
                    })}
                </article>
            </section>
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">新一代管式電池</h1>
                <div className="flex">
                    <article className="md:w-1/2 w-full">
                        <div className="relative h-80 w-full">
                            <Image src="/images/component1.png" fill alt="component1"></Image>
                        </div>

                    </article>
                    <article className="md:w-1/2 w-full">
                        <h1 className="text-xl text-(--dark) font-bold">新一代電池形態，高度集成的微型化設計，<br />
                            同樣的發電功率下，可以使最終電堆體積縮小75%<br />
                            大大拓展可應用的場景</h1>
                    </article>
                </div>

            </section>
            <section className="py-16 min-h-screen container mx-auto w-[80%]">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">電池堆</h1>
                <article className="gap-5 grid md:grid-cols-3 grid-col-1 items-center my-10 w-full" >
                    {Products.map((item, index) => {
                        return (
                            <div className="rounded-lg bg-[#FEFEFE] h-100 flex flex-col" key={index}>
                                <div className="relative h-50 w-full">
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
            </section>

            <section className="py-16 center container mx-auto w-[80%]">
                <Link href="/generation" className="mx-auto">
                    <Btn text={"其他產品"}></Btn>
                </Link>
            </section>
        </>
    )
}


export default components;