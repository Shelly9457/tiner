"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import CardItems from "@/components/patent/CardItems";
const patent = () => {
    return (
        <>
            <section className="container py-16 w-full lg:w-[80%] mx-auto center gap-5 min-h-screen flex-col">
                <h1 className="text-(--one) font-bold text-3xl xl:text-4xl">核心專利</h1>
                <p className="text-(--two) text-lg text-center font-bold mb-5">地諾科技持有多項專利，涵蓋燃料電池、催化劑技術、儲氫材料等領域</p>
                <CardItems></CardItems>
                <Btn text={"相關產品"}></Btn>
            </section>
            <section className="container py-16 w-full lg:w-[90%] ms-auto gap-5 min-h-screen">
                <article>
                    <h1 className="text-(--one) font-bold text-3xl xl:text-4xl">國際專利佈局</h1>
                    <p className="text-(--dark) text-lg font-bold mb-5">
                        地諾科技以全球視野進行專利布局，<br />
                        已在台灣、美國、中國與歐洲取得關鍵專利<br />
                        範圍涵蓋催化劑技術、膜電極組、<br />
                        固態儲氫與高效能電池堆等核心領域<br />
                        我們深信，專利不只是法律保護，更是產業競爭力的象徵<br />
                        憑藉這些佈局，地諾能在未來氫能市場中保持領先地位，<br />
                        並推動綠色能源的全球化應用
                    </p>
                </article>
                <article className="flex">
                </article>
            </section>
        </>
    )
}


export default patent;