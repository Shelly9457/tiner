"use client";
import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/Btn";
import Card from "@/components/waste/Card";
const waste = () => {
    const MakeData = [
        {
            name: "製氫菌",
            desc: `利用微生物分解有機物產生氫氣`,
            img: "/images/waste1.png",
        },
        {
            name: "甲烷菌",
            desc: `將有機物轉化為甲烷\n作為燃料或能源載體`,
            img: "/images/waste2.png",
        },
    ]
    const ComponentData = [
        {
            name: "厭氧發酵裝置",
            desc: `將有機物轉化為甲烷\n作為燃料或能源載體`,
            img: "/images/waste3.png",
        },
        {
            name: "脫硫裝置",
            desc: `利用微生物分解有機物產生氫氣`,
            img: "/images/waste4.png",
        },
    ]
    const DigestionData = [
        {
            name: "污泥除水裝置",
            desc: `降低污泥水分，\n便於後續處理與運輸`,
            img: "/images/waste5.png",
        },
        {
            name: "造粒機",
            desc: `將污泥加工成可控粒徑，\n提高燃料或資源化利用效率`,
            img: "/images/waste5.png",
        },
        {
            name: "尾熱脫水裝置",
            desc: `利用廢熱進一步脫水，\n提高能源回收效率`,
            img: "/images/waste6.png",
        },
        {
            name: "合成氣反應裝置",
            desc: `將有機殘渣轉化為合成氣，\n供燃料電池或其他能源系統使用`,
            img: "/images/waste6.png",
        },
    ]
    return (
        <>
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <h1 className="text-(--one) font-bold xl:text-2xl text-xl text-center">
                    從生物質到氫能，地諾科技以創新轉化技術<br />
                    實現廢棄物能源化、淨零排放的永續藍圖
                </h1>
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">生物質轉化系統</h1>
                <h1 className="text-(--one) font-bold xl:text-lg text-md text-center">
                    地諾科技的生物質轉化系統結合<br />
                    微生物製氫技術與厭氧發酵工程，<br />
                    將農業廢棄物、污泥與有機物轉化為氫氣與甲烷，<br />
                    實現資源再利用與綠色能源循環
                </h1>
            </section>
            <section className="py-16 container center mx-auto flex-col lg:w-[80%] w-full">
                <div className="flex w-full gap-8 lg:flex-row flex-col">
                    <article className="lg:w-1/2 w-full flex flex-col justify-around font-bold ">
                        <h1 className="text-(--one) xl:text-4xl text-3xl mb-5">PEMFC石墨流道板</h1>
                        <h1 className="text-xl text-(--dark)">
                            燃料電池的關鍵部件，<br />
                            主要用於分隔氫氣和氧氣並傳導電流，<br />
                            同時起到分配氣體、導熱和支撐作用
                        </h1>

                    </article>
                    <article className="lg:w-1/2 w-full">
                        <div className="relative h-100 w-full">
                            <Image src="/images/component4.png" fill alt="component1" className="object-cover"></Image>
                        </div>
                    </article>
                </div>
            </section>
            <section className="py-16 container mx-auto w-[80%] center flex-col">
                <h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center">沼渣消化系統</h1>
                <h1 className="text-(--one) font-bold xl:text-lg text-md text-center">
                    沼渣消化系統整合了脫水、造粒與氣化等多重技術，<br />
                    有效處理污水處理過程中的剩餘污泥與有機廢棄物
                </h1>
                <article className="gap-8 grid md:grid-cols-2 grid-col-1 items-center my-10 w-full lg:w-[80%]" >
                    {DigestionData.map((item, index) => {
                        return (
                            <Card name={item.name} desc={item.desc} img={item.img} key={index}></Card>
                        )
                    })
                    }
                </article>
                <Link href="/generation" className="mx-auto">
                    <Btn text={"其他產品"}></Btn>
                </Link>
            </section>
        </>
    )
}


export default waste;