"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isopen, setOpen] = useState(false);
    const [hoverMain, sethoverMain] = useState(null);
    const [hoverSub, sethoverSub] = useState(null);
    const [openThird, setOpenThird] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // 🔹 判斷是否為手機
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const meunItems = [
        { id: 0, title: '首頁', href: "/" },
        { id: 1, title: '關於我們', href: "/about" },
        {
            id: 2,
            title: '技術與專利',
            href: "/technology",
            submenu: [
                { name: "技術", href: "/technology" },
                { name: "專利", href: "/patent" }
            ]
        },
        {
            id: 3,
            title: '產品與應用',
            href: "/",
            submenu: [
                {
                    name: "產品",
                    href: "/generation",
                    subsubmenu: [
                        {
                            name: "燃料電池發電系統",
                            href: "/generation",
                            subsubsubmenu: [
                                { name: "客製化關鍵元件", href: "/generation/keyproduct" },
                                { name: "電池元件", href: "/generation/component" }
                            ]
                        },
                        { name: "廢棄物再生能源系統", href: "/waste" },
                    ]
                },
                {
                    name: "應用",
                    href: "/application",
                    subsubmenu: [
                        {
                            name: "氫能動力系統",
                            href: "/powersystem",
                            subsubsubmenu: [
                                { name: "無人機", href: "/powersystem/drones" },
                                { name: "路上載具", href: "/powersystem/bus" },
                                { name: "遠洋貨櫃", href: "/powersystem/boat" },
                            ]
                        },
                        {
                            name: "智慧城市與再生能源",
                            href: "/revive",
                            subsubsubmenu: [
                                { name: "楊梅汙水處理廠", href: "/revive/sewage" },
                                { name: "畜牧場污泥轉氫能發電", href: "/revive/fram" },
                            ]
                        },
                        { name: "固態儲氫技術", href: "/store" },
                        { name: "氫能便攜式電源", href: "/powersupply" },
                    ]
                },
            ]
        },
        { id: 4, title: '產學合作', href: "/cooperate" },
    ];

    // 🔹 桌機與手機的行為分開處理
    const handleMainAction = (e, item) => {
        if (isMobile && item.submenu) {
            e.preventDefault(); // 阻止直接跳轉
            sethoverMain(hoverMain?.id === item.id ? null : item);
            sethoverSub(null);
        } else {
            setOpen(false);
        }
    };

    const handleSubAction = (e, sub) => {
        if (isMobile && sub.subsubmenu) {
            e.preventDefault();
            sethoverSub(hoverSub?.name === sub.name ? null : sub);
        } else {
            setOpen(false);
        }
    };

    return (
        <div className="container w-[80%] mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/images/logo.png" width={50} height={50} alt="logo" />
                </Link>
                <h1>Tiner</h1>
            </div>

            {/* 🔹 漢堡按鈕 */}
            <div
                className={`hamburger w-[60px] h-[40px] flex flex-col justify-between items-center py-2 px-3 cursor-pointer z-99 ${isopen ? 'active center' : ''}`}
                onClick={() => setOpen(!isopen)}
            >
                <span className="bg-(--light) w-full h-[2px]" />
                <span className="bg-(--light) w-full h-[2px]" />
                <span className="bg-(--light) w-full h-[2px]" />
            </div>

            {/* 🔹 選單 */}
            <div className={`origin-left linkbox fixed center top-0 left-0 w-full h-[100vh] bg-[#263238]/90 backdrop-blur-xl transition-transform duration-300 ${isopen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="container w-[80%] mx-auto flex">
                    {/* 第一層主選 */}
                    <ul className="flex flex-col w-1/3">
                        {meunItems.map((item) => (
                            <li className="my-5 text-lg" key={item.id}>
                                <Link
                                    href={item.href}
                                    className="relative"
                                    onMouseEnter={() => !isMobile && (sethoverMain(item), sethoverSub(null))}
                                    onClick={(e) => handleMainAction(e, item)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* 第二層子選 */}
                    <ul className={`w-1/3 submenu transition-all duration-300 ${hoverMain?.submenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}>
                        {hoverMain?.submenu && hoverMain.submenu.map((sub, id) => (
                            <li className="my-5 text-lg" key={id}>
                                <Link
                                    href={sub.href}
                                    className="relative"
                                    onMouseEnter={() => !isMobile && sethoverSub(sub)}
                                    onClick={(e) => handleSubAction(e, sub)}
                                >
                                    {sub.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* 第三層子選 */}
                    <ul className={`w-1/3 submenu transition-all duration-300 ${hoverSub?.subsubmenu ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}`}>
                        {hoverSub?.subsubmenu && hoverSub.subsubmenu.map((item, id) => {
                            const isOpen = openThird === id;
                            return (
                                <li key={id} className="my-5 text-lg relative">
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.subsubsubmenu && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setOpenThird(isOpen ? null : id);
                                                }}
                                                className="ml-2 text-(--light) hover:text-(--one) transition cursor-pointer"
                                            >
                                                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
                                            </button>
                                        )}
                                    </div>

                                    {isOpen && item.subsubsubmenu && (
                                        <ul className="mt-2 ml-4 border-l border-(--light)/40 pl-3 space-y-2 animate-fadeIn">
                                            {item.subsubsubmenu.map((sub, subId) => (
                                                <li key={subId}>
                                                    <Link href={sub.href} onClick={() => setOpen(false)}>
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
