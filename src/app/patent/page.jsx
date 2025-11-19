"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import CardItems from "@/components/patent/CardItems";
import HeaderSlider from "@/components/HeaderSlider";
const patent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const patentImages = [
        "/images/patentbook1.png",
        "/images/patentbook2.png",
    ];
    const total = patentImages.length;
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
    };
    const homeSlides = [
        { img: "/images/patentSlide1.png" },
        { img: "/images/patentSlide2.png" },
        { img: "/images/patentSlide3.png" },
    ];
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"專利佈局，技術領先未來"} desc={"Tiner專利 -"} />
            <section className="container py-16 w-full lg:w-[80%] mx-auto center gap-5 min-h-screen flex-col">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl">核心專利</h1>
                <p className="text-(--two) text-lg text-center font-bold mb-5">地諾科技持有多項專利，涵蓋燃料電池、催化劑技術、儲氫材料等領域</p>
                <CardItems></CardItems>
                <Link href="/generation">
                    <Btn text={"相關產品"}></Btn>
                </Link>
            </section>
            <section className="py-16 w-full ms-auto gap-5 min-h-screen">
                <div className="flex w-full lg:flex-row flex-col gap-5">
                    <article className="lg:w-1/2 w-full">
                        <div className="sm:w-[80%] w-full ms-auto">
                            <div>
                                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl">國際專利佈局</h1>
                                <p className="text-(--dark) sm:text-lg text-md font-bold mb-5">
                                    地諾科技以全球視野進行專利布局，<br />
                                    已在台灣、美國、中國與歐洲取得關鍵專利<br />
                                    範圍涵蓋催化劑技術、膜電極組、<br />
                                    固態儲氫與高效能電池堆等核心領域<br />
                                    我們深信，專利不只是法律保護，更是產業競爭力的象徵<br />
                                    憑藉這些佈局，地諾能在未來氫能市場中保持領先地位，<br />
                                    並推動綠色能源的全球化應用
                                </p>
                            </div>
                            <div className="flex text-(--one) gap-10">
                                <div className="w-10 h-10 border-(--one) border-2 center rounded-full cursor-pointer" onClick={prevSlide}>
                                    <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                                </div>
                                <div className="w-10 h-10 border-(--one) border-2 center rounded-full cursor-pointer" onClick={nextSlide}>
                                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="lg:w-1/2 w-full">
                        <div className="overflow-hidden">
                            <div className="flex  transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`
                                }}>
                                {patentImages.map((src, index) => (
                                    <div
                                        key={index}
                                        className="relative lg:h-150 h-80 min-w-full flex-shrink-0"
                                    >
                                        <Image
                                            src={src}
                                            alt={`patent-${index}`}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                                <div className="relative lg:h-150 h-80 min-w-[80%]">
                                    <Image src="/images/patentbook1.png" fill alt="patebook" className="object-contain"></Image>
                                </div>
                                <div className="relative lg:h-150 h-80 min-w-[80%]">
                                    <Image src="/images/patentbook2.png" fill alt="patebook" className="object-contain"></Image>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section >
        </>
    )
}


export default patent;