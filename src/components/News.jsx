import Link from "next/link"
export default function News() {
    const Data = [
        {
            name: "全台首座楊梅污水轉氫能示範廠啟動運轉",
            date: "2024 年 3 月 10 日",
            href: "/revive/sewage",
        },
        {
            name: "氫能畜牧場廢棄物再生能源示範計畫啟動",
            date: "2024 年 4 月 25 日",
            href: "/revive/fram",
        },
        {
            name: "氫能無人機突破能源限制，長空續航再升級",
            date: "2024 年 6 月 5 日",
            href: "/powersystem/drones",
        },
    ]
    return (
        Data.map((item, index) => {
            return (
                <div key={index}
                    className="flex justify-between items-center md:flex-row flex-col my-5 font-bold gap-3" >
                    <Link href={item.href} className="relative after:translate-all after:duration-500 after:absolute
                     after:inset-x-0 after:-bottom-1 after:h-[2px] after:bg-(--one) after:scale-x-0 hover:after:scale-x-100">
                        <h1 className="text-(--one) md:text-2xl text-lg">{item.name}</h1>
                    </Link>
                    <h1 className="text-(--two) text-md">{item.date}</h1>
                </div>
            )
        })

    )
}