import Image from "next/image"
export default function SectionOne({ text, img }) {
    return (
        <section className="flex md:py-16 py-5 md:min-h-screen">
            <div className="container bg-(--three) sm:w-3/4 w-full me-auto flex relative">
                <article className="md:w-[90%] w-full ms-auto py-16 flex flex-col justify-around sm:items-start items-center">
                    <h2 className="lg:text-2xl text-lg text-(--light) font-bold whitespace-pre-line">
                        {text}
                    </h2>
                </article>
                <article className="absolute md:-right-[20%] sm:-right-[30%] sm:block hidden top-[50%] -translate-y-[50%]">
                    <div className="relative lg:w-100 lg:h-130 w-80 h-110">
                        <Image src={img} alt={img} fill className="object-contain"></Image>
                    </div>
                </article>
            </div>
        </section>
    )
}