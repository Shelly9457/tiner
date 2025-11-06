import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function HeaderSection({ img, desc, title }) {
    return (
        <section className="min-h-screen center">
            <div className="w-[80%] mx-auto center md:flex-row flex-col gap-8">
                <article className="md:w-1/2 w-full">
                    <div className="relative md:h-150 sm:h-100 h-80 w-[80%] mx-auto">
                        <Image src={img} fill className="object-contain" alt={title}></Image>
                    </div>
                </article>
                <article className="md:w-1/2 w-full">
                    <div className="md:w-[80%] ms-auto">
                        <h1 className="text-(--one) lg:text-4xl text-2xl font-bold">{title}</h1>
                        <h1 className="md:text-xl text-md">{desc}</h1>
                        <a href="#look" className="center block mx-auto mt-8 text-xl animate-bounce border-(--one) border-2 rounded-full w-10 h-10">
                            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}