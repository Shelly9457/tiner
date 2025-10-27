import Image from "next/image";
export default function StoreItems({name, desc, img}) {
    return (
        <article className="bg-slate-50 center flex-col gap-5 rounded-lg py-6 px-9  my-3">
            <div className="relative w-[80%] h-60">
                <Image src={img} fill alt={name} className="object-contain"></Image>
            </div>
            <div className="text-center">
                <h1 className="text-2xl text-(--one) font-bold">{name}</h1>
                <p className="text-(--dark) text-lg whitespace-pre-line my-2">{desc}</p>
            </div>
        </article>

    )
}