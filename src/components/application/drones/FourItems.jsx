import Image from "next/image"
export default function FourItems({ name, desc, img }) {
    return (
        <div className="flex items-center flex-col gap-5">
            <div className="relative h-70 w-full">
                <Image src={img} alt={name} fill className="object-cover rounded-lg"></Image>
            </div>
            <h1 className="text-(--one) font-bold text-2xl">{name}</h1>
            <p className="text-(--dark) text-lg whitespace-pre-line text-center leading-none">{desc}</p>
        </div>
    )
}