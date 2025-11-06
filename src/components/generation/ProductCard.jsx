import Image from "next/image"
export default function ProductCard({ name, desc, img }) {
    return (
        <div className="rounded-lg lg:min-w-1/3 sm:min-w-1/2 min-w-full bg-[#FEFEFE] h-100 flex flex-col">
            <div className="relative h-50 w-full">
                <Image src={img} fill alt={name} className="object-cover rounded-t-lg"></Image>
            </div>
            <div className="center flex-col gap-4 px-3 py-5 text-(--one) flex-1">
                <h1 className="md:text-2xl text-xl font-bold">{name}</h1>
                <h1 className="md:text-xl text-md whitespace-pre-line leading-none text-center">{desc}</h1>
            </div>
        </div>
    )
}