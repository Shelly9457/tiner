import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChessKing, faChartLine, faFlask, faCogs, faBullhorn, faFolderOpen, faClipboard, faMicroscope, faFlaskVial, faIndustry } from "@fortawesome/free-solid-svg-icons";
import OrganizeItems from "./OrganizeItems";
import { useState } from "react";
import Btn from "../Btn";

const OrganizeBlock = () => {
    const OrganizeDatas = {
        main: [{
            icon: faUsers,
            title: "股東會",
            content: "由 5 名股東組成，負責重大決策與公司治理"
        }, {
            icon: faChessKing,
            title: "董事會",
            content: "3 名董事 + 1 名監察人，負責營運監督與政策審查"
        }, {
            icon: faChartLine,
            title: "董事長兼總經理",
            content: "領導整體營運與長期策略發展"
        }]
        ,
        deperment: [{
            icon: faMicroscope,
            title: "研發經理",
            content: "技術研發總監，負責項目管理"
        }, {
            icon: faFlaskVial,
            title: "研究助理 ×2",
            content: "支援測試、文獻整理與資料分析"
        }]
    }
    const [ActiveTab, setActiveTab] = useState("main")
    return (
        <div className="text-center lg:w-[80%] w-full mx-auto ">
            <div className="text-3xl font-bold center gap-8 mb-10">
                <h1 onClick={() => setActiveTab("main")}
                    className={`text-(--one) border-b-2 pb-2 transtion-all duration-500 cursor-pointer
                    ${ActiveTab === "main" ? 'border-b-(--one)' : 'border-b-transparent text-(--two)'}`}>
                    主要部門
                </h1>
                <h1 onClick={() => setActiveTab("deperment")}
                    className={`text-(--one) border-b-2 pb-2 transtion-all duration-500 cursor-pointer
                    ${ActiveTab === "deperment" ? 'border-b-(--one)' : 'border-b-transparent text-(--two)'}`}>
                    研發部門
                </h1>
            </div>
            <div className="overflow-hidden h-auto">
                <div className="flex">
                    <article className={`min-w-full transtion-all duration-500
                         ${ActiveTab == "main" ? 'translate-x-0' : '-translate-x-[100%]'}`}>
                        {OrganizeDatas.main.map((item, id) => {
                            return (
                                <OrganizeItems key={id} icon={item.icon} title={item.title} content={item.content}></OrganizeItems>
                            )
                        })}
                        <div className="flex justify-evenly items-center md:flex-row flex-col">
                            <OrganizeItems icon={faFlask} title={"研發經理"} content={"領導整體營運與\n長期策略發展"}></OrganizeItems>
                            <OrganizeItems icon={faClipboard} title={"技術經理"} content={"負責產品技術與\n工程支援開發"}></OrganizeItems>
                            <OrganizeItems icon={faBullhorn} title={"行銷總監"} content={"主導市場拓展\n品牌與行銷策略"}></OrganizeItems>
                            <OrganizeItems icon={faFolderOpen} title={"行政總監"} content={"掌管財務\n人資與內部行政運作"}></OrganizeItems>
                        </div>
                        <div className="center">
                            <Link href="/technology">
                                <Btn text={"地諾技術"}></Btn>
                            </Link>
                        </div>
                    </article>
                    <article className={`min-w-full transtion-all duration-500 flex flex-col gap-10 
                        ${ActiveTab == "deperment" ? '-translate-x-[100%]' : 'translate-x-[100%]'}`}>
                        {OrganizeDatas.deperment.map((item, id) => {
                            return (
                                <OrganizeItems key={id} icon={item.icon} title={item.title} content={item.content}></OrganizeItems>
                            )
                        })}
                        <div className="flex justify-evenly items-center md:flex-row flex-col">
                            <OrganizeItems icon={faCogs} title={"機構工程師"} content={"結構與製造模組設計與開發"}></OrganizeItems>
                            <OrganizeItems icon={faIndustry} title={"製程工程師"} content={"製程優化與量產技術提升"}></OrganizeItems>
                        </div>
                        <div className="center">
                            <Link href="/technology">
                                <Btn text={"地諾技術"}></Btn>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </div >
    )
}
export default OrganizeBlock;