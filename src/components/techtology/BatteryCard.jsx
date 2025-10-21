import Image from "next/image";
const BatteryCard = ({ name, img, content }) => {
    return (
        <div className="center flex-col gap-5  text-(--one) font-bold my-3">
            <h1 className="sm:text-2xl text-xl">{name}</h1>
            <div className="relative w-full h-50">
                <Image src={img} fill alt={name} className="object-cover"></Image>
            </div>
            <p className="sm:text-xl text-lg">{content}</p>
        </div>
    )
}

export default BatteryCard;