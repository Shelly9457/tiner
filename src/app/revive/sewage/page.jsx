"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import HeaderSlider from "@/components/HeaderSlider";

const sewage = () => {
    const homeSlides = [
        { img: "/images/sewageSlide1.png" },
        { img: "/images/sewageSlide2.png" },
        { img: "/images/sewageSlide3.png" },
    ];
    return (
        <>
            <HeaderSlider slides={homeSlides} title={"楊梅污水處理廠"} desc={"全台首座以「廢污資源化」為核心的綠氫示範廠"} />
            <section className="py-16 container  lg:w-[80%] w-full mx-auto">
                <div className="flex gap-8 md:flex-row flex-col">
                    <article className="md:w-1/2 w-full">
                        <div className="relative h-80 w-full">
                            <Image src="/images/sewage1.png" fill alt="sewage" className="object-contain" ></Image>
                        </div>
                    </article >
                    <article className="md:w-1/2 w-full flex justify-center pt-4">
                        <h1 className="text-(--dark) font-bold text-xl text-center">
                            地諾科技與桃園市政府合作<br />
                            將民生污泥經過處理後再利用
                        </h1>
                    </article >
                </div>
                <div className="flex gap-8 md:flex-row flex-col">
                    <article className="md:w-1/2 w-full flex justify-center pt-15">
                        <h1 className="text-(--dark) font-bold text-xl text-center">
                            將廢棄物轉化為可再生能源，<br />
                            達成「產綠氫、發綠電」的永續願景
                        </h1>
                    </article >
                    <article className="md:w-1/2 w-full">
                        <div className="relative h-80 w-full">
                            <Image src="/images/sewage2.png" fill alt="sewage" className="md:-translate-y-30 object-contain"></Image>
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
                        <Image src="/images/sewage3.png" fill alt="sewage" className="object-cover rounded-lg"></Image>
                    </div>
                    <div className="center flex-col">
                        <h1 className="text-(--dark) sm:text-2xl text-xl">每年處理</h1>
                        <h1 className="text-(--one) font-bold sm:text-4xl text-2xl">182.5 噸污泥 </h1>
                    </div>
                    <div className="relative h-50">
                        <Image src="/images/sewage4.png" fill alt="sewage" className="object-cover rounded-lg"></Image>
                    </div>
                    <div className="center flex-col">
                        <h1 className="text-(--dark) sm:text-2xl text-xl">產出</h1>
                        <h1 className="text-(--one) font-bold sm:text-4xl text-2xl">30 kW 綠色電力 </h1>
                    </div>
                    <div className="relative h-50">
                        <Image src="/images/sewage5.png" fill alt="sewage" className="object-cover rounded-lg"></Image>
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


export default sewage;