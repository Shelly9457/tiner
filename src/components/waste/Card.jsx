import Image from "next/image"
export default function Card({ name, img, desc }) {
    return (
        <div className="center flex-col text-(--dark) font-bold gap-4">
            <h1 className="text-2xl">{name}</h1>
            <div className="relative h-80 w-full">
                <Image src={img} fill alt={name} className="rounded-lg object-contain"></Image>
            </div>
            <h1 className="text-lg whitespace-pre-line leading-none">{desc}</h1>
        </div>
    )
}