"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faSitemap, faLightbulb, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import FeatureItems from "@/components/powersupply/FeatureItems";
import { icon } from "@fortawesome/fontawesome-svg-core";
const cooperate = () => {
    const Feature = [
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
    return (
        <>
            <section className="py-16 container center mx-auto flex-col sm:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">攜手案例</h1>
                <article className="grid lg:grid-cols-2 grid-col-1 gap-10 w-full">
                </article>
            </section>
            <section className="py-16 container center mx-auto flex-col sm:w-[80%] w-full">
                <h1 className="text-(--dark) font-bold xl:text-4xl text-3xl md:text-start text-center mb-5">跟地諾合作有甚麼優勢？</h1>
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5"></h1>
            </section>
        </>
    )
}


export default cooperate;