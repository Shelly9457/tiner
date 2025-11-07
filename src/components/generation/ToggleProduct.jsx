import { useState } from "react";
import Image from "next/image";
export default function ToggleProdect() {
    const [ActiveTab, setActiveTab] = useState("PEMFC")
    return (
        <article className="mt-5 w-full overflow-hidden">
            <div className="md:text-2xl text-lg font-bold center gap-8 mb-10">
                <h1 onClick={() => setActiveTab("PEMFC")}
                    className={`text-(--one) border-b-2 pb-2 transtion-all duration-500 cursor-pointer
                    ${ActiveTab === "PEMFC" ? 'border-b-(--one)' : 'border-b-transparent text-(--two)'}`}>
                    PEMFC發電系統
                </h1>
                <h1 onClick={() => setActiveTab("SOFC")}
                    className={`text-(--one) border-b-2 pb-2 transtion-all duration-500 cursor-pointer
                    ${ActiveTab === "SOFC" ? 'border-b-(--one)' : 'border-b-transparent text-(--two)'}`}>
                    SOFC發電系統
                </h1>
            </div>
            <div className="flex">
                <div className={`min-w-full transtion-all duration-500 center sm:gap-5  sm:flex-row flex-col
                        ${ActiveTab == "PEMFC" ? 'translate-x-0' : '-translate-x-[100%]'}`}>
                    <div className="relative h-100 sm:w-1/2 w-full">
                        <Image src="/images/generation1.png" fill alt="generation" className="object-contain"></Image>
                    </div>
                    <div className="relative h-100 sm:w-1/2 w-full">
                        <Image src="/images/generation2.png" fill alt="generation" className="object-contain"></Image>
                    </div>
                </div>
                <div className={`min-w-full transtion-all duration-500 center gap-5 
                        ${ActiveTab == "SOFC" ? '-translate-x-[100%]' : ''}`}>
                    <div className="relative h-100 sm:w-1/2 w-full">
                        <Image src="/images/generation5.png" fill alt="generation" className="object-contain"></Image>
                    </div>
                </div>
            </div>
        </article>
    )
}