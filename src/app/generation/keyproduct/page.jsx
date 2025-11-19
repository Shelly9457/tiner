"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import ProductCard from "@/components/generation/ProductCard";
const keyproduct = () => {
    const Products = [
        {
            name: "重整器",
            desc: `將原料燃料轉化為氫氣\n供電池使用`,
            img: "/images/keyproduct2.png",
        },
        {
            name: "加熱器",
            desc: `提供燃料及系統\n運作所需的熱能`,
            img: "/images/keyproduct3.png",
        },
        {
            name: "尾燃器",
            desc: `燃燒未完全反應的燃料\n確保環保排放`,
            img: "/images/keyproduct4.png",
        },
        {
            name: "換熱器",
            desc: `回收與轉移系統熱能，\n提高整體效率`,
            img: "/images/keyproduct5.png",
        },
        {
            name: "整合熱箱／冷箱",
            desc: "模組化熱管理系統，\n保護電池運作環境",
            img: "/images/keyproduct6.png",
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showSlides, setShowSlides] = useState(3)
    const totalSlides = Products.length
    let slideWidth = 100 / showSlides + 2
    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth <= 768) {
                setShowSlides(1);
            } else if (window.innerWidth <= 1024) {
                setShowSlides(2);
            } else {
                setShowSlides(3);
            }
        };

        updateSlides(); // 一開始就判斷一次
        window.addEventListener("resize", updateSlides); // 當視窗變化時重新判斷

        // 清除監聽器，避免元件被移除時出錯
        return () => window.removeEventListener("resize", updateSlides);
    }, []);
    const nextSlide = () => {
        setCurrentIndex(Math.min(currentIndex + 1, totalSlides - showSlides));
    };
    const prevSlide = () => {
        setCurrentIndex(Math.max(currentIndex - 1, 0));
    };

    return (
        <>
            <section className="w-full flex flex-col justify-center bg-[url('/images/keyproduct1.png')] bg-cover bg-center h-screen">
                <article className=" text-[#ECEFF1] font-bold w-[80%] mx-auto ">
                    <h1 className="text-3xl ">
                        精準設計，成就高效氫能系統
                    </h1>
                    <h1 className="text-xl mt-10">
                        地諾科技以深厚的研發與整合能力，<br />
                        開發出多項氫能系統的核心元件從<br />
                        燃料轉化、熱能管理到電池運作，<br />
                        每一個零件都經過嚴密設計與驗證，<br />
                        確保系統在極端環境下仍能穩定運行，<br />
                        發揮最大效能
                    </h1>
                </article >
            </section >
            <section className="pt-16 container center mx-auto flex-col ">
                <h1 className="text-(--one) font-bold xl:text-2xl text-xl text-center">
                    每一個關鍵元件<br />
                    都是地諾科技打造氫能系統的靈魂零件<br />
                    透過精密模組化設計與全流程熱管理<br />
                    我們將氫能轉化效率推向極限<br />
                    讓綠能不只是概念<br />
                    而是可被量產的高效現實
                </h1>
            </section>
            <section className="py-16 container center mx-auto flex-col">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">關鍵元件</h1>
                <div className="center sm:w-[80%] w-full mx-auto">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-(--one) me-3 cursor-pointer font-bold z-99 text-xl" onClick={prevSlide}></FontAwesomeIcon>
                    <div className="overflow-hidden flex-1 w-full px-3">
                        <div className="flex w-full duration-500 transition-transform ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}>
                            <div className="flex items-center my-10 w-full" >
                                {Products.map((item, index) => {
                                    return (
                                        <ProductCard name={item.name} desc={item.desc} img={item.img} key={index}></ProductCard>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faChevronRight} className="text-(--one) ms-3 cursor-pointer font-bold z-99 text-xl" onClick={nextSlide}></FontAwesomeIcon>
                </div>
            </section>
            <section className="pb-16 container center mx-auto flex-col">
                <Link href="/generation#look" className="mx-auto">
                    <Btn text={"其他產品"}></Btn>
                </Link>
            </section>

        </>
    )
}


export default keyproduct;