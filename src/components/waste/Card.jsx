import Image from "next/image"
export default function Card({ name, img, desc }) {
    return (
        <div className="flex item-center flex-col text-(--dark) font-bold gap-4 text-center">
            <h1 className="md:text-2xl text-lg">{name}</h1>
            <div className="relative sm:h-80 h-50 w-full">
                <Image src={img} fill alt={name} className="object-cover rounded-lg"></Image>
            </div>
            <h1 className="md:text-lg text-md whitespace-pre-line leading-none">{desc}</h1>
        </div>
    )
}