import Image from "next/image"
import Btn from "@/components/Btn";
import Link from "next/link";
export default function PowerItems({ name, desc, img, index, link }) {
    return (
        <div className={`lg:w-[80%] w-full h-70 relative my-10 py-10 md:px-15 px-3 flex flex-col justify-around ${(index + 1) % 2 == 0 ? 'ms-auto' : "me-auto"}`}>
            <Image src={img} fill alt={name} className="object-cover -z-1 brightness-50"></Image>
            <div className="text-(--light)">
                <h1 className="text-2xl font-bold ">{name}</h1>
                <p className="text-lg my-4">{desc}</p>
            </div>
            <Link href={link}>
                <Btn text={"了解更多"}></Btn>
            </Link>
        </div>
    )
}