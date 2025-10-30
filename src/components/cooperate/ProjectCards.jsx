import Image from "next/image";
import Link from "next/link";
import Btn from "@/components/Btn";
export default function ProjectCards({ name, desc, href, img }) {
    return (
        <div className="flex flex-col rounded-lg bg-slate-50 ">
            <div className="relative h-80 w-full">
                <Image src={img} fill alt={name} className="object-cover rounded-t-lg shadow-lg"></Image>
            </div>
            <div className="text-(--one) py-3 px-6">
                <h1 className="font-bold text-xl">{name}</h1>
                <p className="text-md my-3 whitespace-pre-line leading-none">{desc}</p>
                <Link href={href}>
                    <Btn text={"閱讀案例"}></Btn>
                </Link>
            </div>
        </div>
    )
}