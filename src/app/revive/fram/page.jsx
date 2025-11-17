"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import HeaderSlider from "@/components/HeaderSlider";

const fram = () => {
    const homeSlides = [
        { img: "/images/framSlide1.png" },
        { img: "/images/framSlide2.png" },
        { img: "/images/framSlide3.png" },
    ];
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"民營氫能畜牧場"} desc={"利用生質能技術，將污水處理廠污泥轉化為氫能發電"} />
            <section className="md:py-16 pb-16 container min-h-screen lg:w-[80%] w-full mx-auto">
                <div className="flex gap-8 md:flex-row flex-col">
                    <article className="md:w-1/2 w-full">
                        <div className="relative h-80 w-full">
                            <Image src="/images/fram1.png" fill alt="fram" className="object-contain"></Image>
                        </div>
                    </article >
                    <article className="md:w-1/2 w-full flex justify-center md:pt-10">
                        <h1 className="text-(--dark) font-bold text-xl text-center">
                            地諾科技與萌侑科技合作，負責再生燃氣重整、<br />
                            氫氣純化與燃料電池系統的整合應用
                        </h1>
                    </article >
                </div>
                <div className="flex gap-8 md:flex-row flex-col">
                    <article className="md:w-1/2 w-full flex justify-center pt-8">
                        <h1 className="text-(--dark) font-bold text-xl text-center">
                            逢甲大學與國家原子能科技研究院參與<br />
                            技術驗證與能專計畫申請，<br />
                            共同推進污水與污泥減量及資源化研究，<br />
                            打造永續農業與能源創新的新典範
                        </h1>
                    </article >
                    <article className="md:w-1/2 w-full">
                        <div className="relative h-80 w-full">
                            <Image src="/images/fram2.png" fill alt="fram" className="md:-translate-y-30 object-contain"></Image>
                        </div>
                    </article >
                </div>
            </section>
            <section className="pb-16 container lg:w-[80%] w-full mx-auto">
                <article className="grid md:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-8">
                    <div className="center flex-col">
                        <h1 className="text-(--dark) sm:text-2xl text-xl">每日處理</h1>
                        <h1 className="text-(--one) font-bold sm:text-4xl text-2xl">4 噸污泥 </h1>
                    </div>
                    <div className="relative h-50">
                        <Image src="/images/fram3.png" fill alt="fram" className="object-cover rounded-lg"></Image>
                    </div>
                    <div className="center flex-col">
                        <h1 className="text-(--dark) sm:text-2xl text-xl">每年處理</h1>
                        <h1 className="text-(--one) font-bold sm:text-4xl text-2xl"> 182.5噸污泥 </h1>
                    </div>
                    <div className="relative h-50">
                        <Image src="/images/fram4.png" fill alt="fram" className="object-cover rounded-lg"></Image>
                    </div>
                    <div className="center flex-col">
                        <h1 className="text-(--dark) sm:text-2xl text-xl">產出</h1>
                        <h1 className="text-(--one) font-bold sm:text-4xl text-2xl">650kW - 1 MW </h1>
                    </div>
                    <div className="relative h-50">
                        <Image src="/images/fram5.png" fill alt="fram" className="object-cover rounded-lg"></Image>
                    </div>
                </article>
            </section>
            <section className="pb-16 center container w-full mx-auto">
                <Link href="/revive#look">
                    <Btn text={"其他案例"}></Btn>
                </Link>
            </section >


        </>
    )
}


export default fram;