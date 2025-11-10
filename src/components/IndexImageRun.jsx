import Image from "next/image"
export default function IndexImageRun() {
    const Images = ["/images/index5.png", "/images/index6.png", "/images/index7.png"]
    return (
        <div className="overflow-hidden w-full gap-5 relative">
            <div className="absolute -top-15  w-[110%] h-30 left-[50%] -translate-x-[50%] bg-(--light) z-10 rounded-[100%]"></div>
            <div className="flex w-full gap-5 relative indexrun">
                {Images.map((item, index) => {
                    return (
                        <div className="relative h-120 min-w-2/3 after:bg-(--light) -z-1" key={index}>
                            <Image src={item} fill alt="item" className="object-cover"></Image>
                        </div>
                    )
                })}
                {Images.map((item, index) => {
                    return (
                        <div className="relative h-120 min-w-2/3 after:bg-(--light) -z-1" key={index}>
                            <Image src={item} fill alt="item" className="object-cover" ></Image>
                        </div>
                    )
                })}
            </div>
            <div className="absolute -bottom-15  w-[110%] h-30 left-[50%] -translate-x-[50%] bg-(--light) z-10 rounded-[100%]"></div>
        </div>
    )
}