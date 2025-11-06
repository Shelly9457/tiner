"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isopen, setOpen] = useState(false)
    const [hoverMain, sethoverMain] = useState(null) // 滑到哪個主選單項目
    const [hoverSub, sethoverSub] = useState(null)// 滑到哪個子選單項目
    const meunItems = [{
        id: 0,
        title: '首頁',
        href: "/",
    }, {
        id: 1,
        title: '關於我們',
        href: "/about",
    }, {
        id: 2,
        title: '技術與專利',
        href: "/technology",
        submenu: [{
            name: "技術",
            href: "/technology",

        }, {
            name: "專利",
            href: "/patent",

        }]
    }, {
        id: 3,
        title: '產品與應用',
        href: "/",
        submenu: [{
            name: "產品",
            href: "/product",
            subsubmenu: [
                {
                    name: "燃料電池發電系統",
                    href: "/generation",
                    subsubsubmenu: [
                        {
                            name: "客製化關鍵元件",
                            href: "/generation/keyproduct",
                        },
                        {
                            name: "電池元件",
                            href: "/generation/component",
                        },
                    ]
                },
                {
                    name: "廢棄物再生能源系統",
                    href: "/waste",
                },
            ]

        }, {
            name: "應用",
            href: "/",
            subsubmenu: [
                {
                    name: "氫能動力系統",
                    href: "/powersystem",
                    subsubsubmenu: [
                        {
                            name: "無人機",
                            href: "/powersystem/drones",
                        },
                        {
                            name: "路上載具",
                            href: "/powersystem/bus",
                        },
                        {
                            name: "遠洋貨櫃",
                            href: "/powersystem/boat",
                        },
                    ]
                },
                {
                    name: "智慧城市與再生能源",
                    href: "/revive",
                    subsubsubmenu: [
                        {
                            name: "楊梅汙水處理廠",
                            href: "/revive/sewage",
                        },
                        {
                            name: "畜牧場污泥轉氫能發電",
                            href: "/revive/fram",
                        },
                    ]
                },
                {
                    name: "固態儲氫技術",
                    href: "/store",
                },
                {
                    name: "氫能便攜式電源",
                    href: "/powersupply",
                },

            ]
        }]
    }, {
        id: 4,
        title: '產學合作',
        href: "/cooperate",
    },]
    return (
        <div className="container w-[80%] mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <Image src="/images/logo.png" width={50} height={50} alt="logo"></Image>
                <h1>Tiner</h1>
            </div>
            <div className={`hamburger w-[60px] h-[40px] flex flex-col justify-between items-center py-2 px-3 cursor-pointer z-99 ${isopen ? 'active center' : ''}`} onClick={() => setOpen(!isopen)}>
                <span className="bg-(--light) w-full h-[2px]"></span>
                <span className="bg-(--light) w-full h-[2px]"></span>
                <span className="bg-(--light) w-full h-[2px]"></span>
            </div>
            <div className={`origin-left linkbox fixed center top-0 left-0  w-full h-[100vh] bg-[#263238]/90 backdrop-blur-xl  ${isopen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="container w-[80%] mx-auto flex">
                    {/* 第一層主選 */}
                    <ul className="flex flex-col w-1/3">
                        {meunItems.map((item, id) => {
                            return (
                                <li className="my-5 text-lg" key={id}>
                                    <Link href={item.href} className="relative" onClick={() => setOpen(!isopen)} onMouseEnter={() => { sethoverMain(item); sethoverSub(null); }}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {/* 第二層子選 */}
                    <ul className={`w-1/3 submenu
                          ${hoverMain?.submenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
                    >
                        {hoverMain?.submenu && hoverMain.submenu.map((item, id) => {
                            return (
                                <li className="my-5 text-lg" key={id}>
                                    <Link href={item.href} className="relative" onClick={() => setOpen(!isopen)} onMouseEnter={() => { sethoverSub(item); }}>
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    {/* 第三層子選 */}
                    <ul className={`w-1/3 submenu
                     ${hoverSub?.subsubmenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}
                    >
                        {hoverSub?.subsubmenu && hoverSub.subsubmenu.map((item, id) => {
                            return (
                                <li className="my-5 text-lg" key={id}>
                                    <Link href={item.href} className="relative" onClick={() => setOpen(!isopen)}>
                                        {item.name}
                                    </Link>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div >
    )
}
export default Navbar;