"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faSitemap, faLightbulb, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import FeatureItems from "@/components/application/powersupply/FeatureItems";
import ProjectCards from "@/components/cooperate/ProjectCards";
const cooperate = () => {
    const FeatureData = [
        {
            name: "策略夥伴關係",
            desc: "與燃料電池、材料科技、電動車產業深度合作",
            icon: faHandshake,
        },
        {
            name: "垂直整合供應鏈",
            desc: "提供從材料到最終應用的完整解決方案",
            icon: faSitemap,
        },
        {
            name: "技術創新",
            desc: "研發先進燃料電池技術，提升氫能轉換效率",
            icon: faLightbulb,
        },
        {
            name: "市場應用廣泛",
            desc: "應用於氫能汽車、無人機、儲能設備智慧城市等",
            icon: faGlobeAmericas,
        },
    ]
    const CardData = [
        {
            name: "楊梅汙水處理廠",
            desc: `透過厭氧發酵與甲烷重整技術，\n
                    將污泥轉化為氫氣與電能，達成「廢棄物零輸出」\n
                    與「永續淨零」的雙重目標`,
            img: "/images/cooperate_project1.jpg",
            href: "/",
        },
        {
            name: "民營畜牧場",
            desc: `結合沼氣回收與燃料\n
                    電池發電技術，不僅減少環境污染，\n
                    更為農村能源轉型開創新模式。`,
            img: "/images/cooperate_project2.png",
            href: "/",
        },
    ]
    const CooperateIcons1 = [
        "/images/cooperate_icon1.png",
        "/images/cooperate_icon2.png",
        "/images/cooperate_icon3.png",
        "/images/cooperate_icon4.png",
        "/images/cooperate_icon5.png"
    ]
    const CooperateIcon2 = [
        "/images/cooperate_icon6.png",
        "/images/cooperate_icon7.png",
        "/images/cooperate_icon8.png",
        "/images/cooperate_icon9.png",
        "/images/cooperate_icon10.png",
        "/images/cooperate_icon11.png",
    ]
    return (
        <>
            <section className="py-16 bg-[url('/images/cooperate_bg1.png')] bg-cover bg-center bg-no-repeat">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">攜手案例</h1>
                <article className="grid md:grid-cols-2 grid-cols-1 mx-auto gap-8 sm:w-[80%] w-full">
                    {CardData.map((item, index) => {
                        return (
                            <ProjectCards name={item.name} desc={item.desc} img={item.img} href={item.href} key={index}></ProjectCards>
                        )
                    })}
                </article>
            </section>
            <section className="py-16 w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5"> 政府、產業、學術攜手合作，推動氫能技術落地應用</h1>
                <article className="overflow-hidden">
                    <div className="flex w-full cooperate_icon_container1">
                        {CooperateIcons1.map((item, index) => {
                            return (
                                <div className="relative h-30 md:min-w-1/4 min-w-1/2" key={index}>
                                    <Image src={item} alt="icon" fill className="object-contain" ></Image>
                                </div>
                            )
                        })}
                        {CooperateIcons1.map((item, index) => {
                            return (
                                <div className="relative h-30 md:min-w-1/4 min-w-1/2" key={index}>
                                    <Image src={item} alt="icon" fill className="object-contain" ></Image>
                                </div>
                            )
                        })}

                    </div>
                    <div className="flex justify-end w-full cooperate_icon_container2">
                        {CooperateIcon2.map((item, index) => {
                            return (
                                <div className="relative h-30 md:min-w-1/4 min-w-1/2" key={index}>
                                    <Image src={item} alt="icon" fill className="object-contain" ></Image>
                                </div>
                            )
                        })}
                        {CooperateIcon2.map((item, index) => {
                            return (
                                <div className="relative h-30 md:min-w-1/4 min-w-1/2" key={index}>
                                    <Image src={item} alt="icon" fill className="object-contain" ></Image>
                                </div>
                            )
                        })}

                    </div>
                </article>
            </section>
            <section className="py-16 bg-(--three)">
                <div className="container md:w-[80%] w-full mx-auto">
                    <h1 className="text-(--dark) font-bold xl:text-4xl text-3xl md:text-start text-center mb-5">跟地諾合作有甚麼優勢？</h1>
                    {
                        FeatureData.map((item, index) => {
                            return (
                                <FeatureItems name={item.name} desc={item.desc} icon={item.icon} index={index} key={index}></FeatureItems>
                            )
                        })
                    }
                </div>
            </section>
            <section className="py-16 container center mx-auto md:flex-row flex-col sm:w-[80%] w-full gap-8">
                <article className="md:w-1/2 w-full">
                    <div className="relative w-full h-100">
                        <Image src="/images/cooperate1.png" fill alt="cooperate1" className="object-contain"></Image>
                    </div>
                </article>
                <article className="md:w-1/2 w-full">
                    <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">
                        地諾科技透過多元的合作模式<br />
                        推動氫能產業發展
                    </h1>
                    <p className="text-(--dark) lg:text-lg text-md">我們不僅提供技術授權，共享燃料電池與氫能儲存技術，更積極與合作夥伴進行聯合研發，開發新一代氫能應用。同時，我們推動產業聯盟，串聯上下游資源，建立完整的氫能供應鏈，並透過商業夥伴關係，共同打造加氫站與智慧能源解決方案，加速氫能技術的市場落地與普及</p>
                </article>
            </section>
            <section className="pt-16 w-full ">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">想要成為我們的合作夥伴嗎？</h1>
                <article className="bg-[url('/images/cooperate_bg2.png')] bg-cover bg-center bg-no-repeat h-63 w-full center">
                    <a href="#footer">
                        <Btn text={"加入我們"}></Btn>
                    </a>
                </article>
            </section >
        </>
    )
}


export default cooperate;