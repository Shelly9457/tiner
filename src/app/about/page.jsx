"use client";
import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faLightbulb, faLeaf, faFlask, faLink, faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./about.css";
import FourItems from "@/components/about/FourItems";
import OrganizeBlock from "@/components/about/OrganizeBlock";
import Btn from "@/components/Btn";
import HeaderSlider from "@/components/HeaderSlider";
const about = () => {
    const homeSlides = [
        { img: "/images/aboutSlide1.png" },
        { img: "/images/aboutSlide2.png" },
        { img: "/images/aboutSlide3.png" },
    ];
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"成就淨零未來，從我們開始"} desc={"關於Tiner -"} />
            <section className="container py-16 w-full sm:w-[80%] mx-auto center gap-5 min-h-screen flex-col">
                <div className="w-full md:flex-row flex-col center md:gap-8 gap-2 ">
                    <article className="md:w-1/2 w-full center flex-col text-center">
                        <h1 className="text-3xl text-(--one) font-bold ">
                            地諾科技致力於創新氫能技術<br />
                            推動綠色能源革命
                        </h1>
                        <article className="text-(--dark) text-lg mt-2">
                            <h2>地諾科技股份有限公司成立於 2023 年 10 月 20 日</h2>
                            <h2>我們專注於氫能與燃料電池領域</h2>
                            <h2>以推動綠色能源技術發展為使命</h2>
                            <h2>致力於打造高效、低碳、永續的能源解決方案</h2>
                        </article>
                    </article>
                    <article className="md:w-1/2 w-full center flex-col text-center">
                        <div className="relative w-full lg:w-[60%] h-120 center about_image1 md:after:block after:hidden">
                            <Image src="/images/about1.png" fill alt="about2" className="object-cover rounded-lg "></Image>
                        </div>
                    </article>
                </div>
                <div className=" w-full md:flex-row flex-col center md:gap-8 gap-2">
                    <article className="md:w-1/2 w-full center flex-col text-center md:-translate-y-30 order-2 md:order-0">
                        <div className="w-full relative aspect-[3/2] mt-7 about1_img">
                            <Image src="/images/about2.png" fill alt="about1" className="object-cover rounded-lg"></Image>
                        </div>
                    </article>
                    <article className="md:w-1/2 w-full center flex-col text-center">
                        <h1 className="text-3xl text-(--one) font-bold mt-7">
                            Tiner堅信氫能將是未來清潔<br />
                            能源的關鍵
                        </h1>
                        <article className="text-(--dark) text-lg mt-2">
                            <h2>希望透過地諾科技的創新技術</h2>
                            <h2>推動氫能應用的普及，實現更高效、更永續的能源解決方案</h2>
                        </article>
                    </article>
                </div>
            </section >
            <section className="py-16 w-full min-h-screen flex justify-evenly items-center flex-col bg-no-repeat bg-cover bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/about_bg1.png')" }}>
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl w-3/4 ms-auto">Tiner創始人</h1>
                <div className="container center w-full mx-auto sm:w-[80%] gap-5 md:flex-row flex-col">
                    <article className="w-full md:w-1/2 center flex-col md:gap-8 gap-2 ">
                        <Image src="/images/doctor.png" width={300} height={300} alt="doctor" className="object-cover"></Image>
                    </article>
                    <article className="w-full md:w-1/2 flex flex-col md:gap-8 gap-2 text-(--dark)">
                        <h1 className="xl:text-4xl text-3xl">温良成 博士</h1>
                        <p className="md:text-(--three) text-(--one)">地諾科技創辦人兼董事長</p>
                        <h1 className="xl:text-xl lg:text-lg">
                            主要應用領域為SOFC(固態氧化物燃料電池) 電池單元<br />
                            尤以中低溫型(500oC以下)固態氧化物 / 複合材料燃料電池之元件開發為主<br />
                            2010 - 2018 | 核能研究所 研發工程師<br />
                            2010 – 2012 | 承接快速離子導體委外合作研發3年計畫<br />
                            2013 – 2018 | 主導新型中低溫SOFC - MEA的研發及量產製造
                        </h1>
                    </article>
                </div>
            </section >
            <section className="my-16 w-full min-h-screen bg-no-repeat bg-cover bg-[length:100%_100%]" style={{ backgroundImage: "url('/images/about_bg2.png')" }}>
                <div className=" py-16 flex w-full min-h-screen sm:w-[100%] gap-5 md:flex-row flex-col justify-end">
                    <article className="w-full md:w-2/8 center flex-col md:gap-8 gap-2 md:pb-20 pb-0 px-5">
                        <Image src="/images/about_icon.png" width={200} height={200} alt="about_icon" className="object-cover"></Image>
                        <h1 className="md:text-(--light) text-(--dark) font-bold xl:text-4xl text-3xl">企業文化</h1>
                    </article>
                    <article className="w-full center md:w-6/8 w-full lg:flex-row flex-col md:gap-8 gap-2">
                        <div className="card center lg:w-3/10 w-[80%] lg:flex-col sm:flex-row flex-col  bg-(--light) rounded-lg ">
                            <div className="lg:w-full sm:w-[50%] w-full relative h-72">
                                <Image src='/images/about3.png' fill alt="about3" className="rounded-lg object-cover"></Image>
                            </div>
                            <div className="px-4 py-6 text-(--one) center flex-col flex-1 text-center">
                                <FontAwesomeIcon icon={faHandshake} className="text-(--two) text-5xl"></FontAwesomeIcon>
                                <h1 className="text-2xl font-bold my-3">誠信 Integrity</h1>
                                <p className="text-md">
                                    堅持最高標準的商業道德，<br />
                                    建立合作夥伴、<br />
                                    客戶與員工的長期信任
                                </p>
                            </div>
                        </div>
                        <div className="card_box flex-1 gap-10 center flex-col w-[80%]">
                            <div className="card flex items-center bg-(--light) rounded-lg w-full sm:flex-row flex-col">
                                <div className="sm:w-[50%] w-full relative h-60">
                                    <Image src='/images/about4.png' fill alt="about3" className="rounded-lg object-cover"></Image>
                                </div>
                                <div className="px-4 py-6 text-(--one) text-center center flex-col flex-1">
                                    <FontAwesomeIcon icon={faLightbulb} className="text-(--two) text-5xl"></FontAwesomeIcon>
                                    <h1 className=" text-2xl font-bold my-3">創新 Innovation</h1>
                                    <p className=" text-md">
                                        持續投入研發與技術突破，<br />
                                        開發高效能、低成本的氫能技術<br />
                                    </p>
                                </div>
                            </div>
                            <div className="card flex items-center bg-(--light) rounded-lg w-full sm:flex-row flex-col">
                                <div className="sm:w-[50%] w-full relative h-60">
                                    <Image src='/images/about5.png' fill alt="about3" className="rounded-lg object-cover"></Image>
                                </div>
                                <div className="px-4 py-6 text-(--one) text-center center flex-col flex-1">
                                    <FontAwesomeIcon icon={faLeaf} className="text-(--two) text-5xl"></FontAwesomeIcon>
                                    <h1 className=" text-2xl font-bold my-3">永續 Sustainability</h1>
                                    <p className=" text-md">
                                        致力於環境保護與碳排減量，<br />
                                        推動氫能應用於多元產業<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section >
            <section className="container py-16 w-[80%] mx-auto min-h-screen">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl mb-5">企業願景</h1>
                <p className="text-(--dark) text-lg mb-5">成為全球領先的氫能技術公司，實現「零碳未來」的目標</p>
                <div className="flex justify-between items-center flex-col lg:flex-row gap-5">
                    <article className="flex flex-col lg:w-2/5 w-full">
                        <div className="relative w-full lg:h-150 h-100">
                            <Image src="/images/about6.png" fill alt="about6" className="object-cover rounded-lg"></Image>
                        </div>
                    </article>
                    <article className="flex md:flex-row flex-col lg:w-3/5 w-full center">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
                            <FourItems icon={faFlask} title={"技術領先"} content={`深化燃料電池、\n固態儲氫與應用技術`} color={"one"}></FourItems>
                            <FourItems icon={faLink} title={"產業鏈整合"} content={`與國際夥伴合作，\n共同推動氫能經濟發展`} color={"two"}></FourItems>
                            <FourItems icon={faGlobe} title={"市場拓展"} content={`擴展應用於交通、\n智慧城市與工業領域`} color={"two"}></FourItems>
                            <FourItems icon={faHandshake} title={"社會責任"} content={`引領產業邁向低碳，\n助力全球減碳目標`} color={"one"}></FourItems>
                        </div>
                    </article>
                </div>
            </section >
            <section className="container py-16 w-[80%] mx-auto h-auto text-center">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl mb-5">公司組織架構</h1>
                <p className="text-(--dark) text-lg mb-5">地諾科技的組織架構以高效運作為核心<br />
                    涵蓋董事會、研發管理、技術支援、市場推廣與行政管理等部門，<br />
                    確保公司在氫能產業中保持領先競爭力
                </p>
                <OrganizeBlock></OrganizeBlock>
            </section>

        </>
    )
}


export default about;