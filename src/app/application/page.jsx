"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
const application = () => {
    return (
        <>
            <section className="flex py-16 min-h-screen">
                <div className="container bg-(--three) sm:w-3/4 w-full me-auto flex relative">
                    <article className="md:w-[90%] w-full ms-auto py-16 flex flex-col justify-around sm:items-start items-center">
                        <h2 className="lg:text-2xl text-lg text-(--light) font-bold">
                            地諾科技以創新氫能技術為核心<br />
                            將廢棄污泥、畜牧廢棄物與城市建築結合<br />
                            創造永續循環的能源系統<br />
                            讓城市不僅消耗能源<br />
                            更能自我發電與儲能，邁向真正的零碳未來
                        </h2>
                        <Link href="#look">
                            <Btn text={"相關應用"}></Btn>
                        </Link>
                    </article>
                    <article className="absolute md:-right-[20%] sm:-right-[30%] sm:block hidden top-[50%] -translate-y-[50%]">
                        <div className="relative lg:w-100 lg:h-130 w-80 h-110">
                            <Image src="/images/revive1.png" alt="revive1" fill className="object-cover"></Image>
                        </div>
                    </article>
                </div>
            </section>

        </>
    )
}


export default application;