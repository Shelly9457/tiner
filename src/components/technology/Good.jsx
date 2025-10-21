import Image from "next/image";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faFire, faBatteryFull, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
export default function good() {
    return (
        <div className="w-full ">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center justify-items-center my-7">
                <div className="font-bold text-(--one) col-span-2 sm:w-[80%] w-full sm:ms-auto text-center md:text-start">
                    <h1 className="text-2xl">高效能源轉換</h1>
                    <p className="text-lg whitespace-pre-line">
                        燃料電池發電效率高達 50%～73%，<br />
                        遠超過柴油或汽油發電機的35%～40%
                    </p>
                </div>
                <div className="flex items-center col-span-2 w-full bg-(--one) rounded-l-full">
                    <div className="">
                        <div className={`center bg-(--one) rounded-full text-(--light) w-50 h-50`}>
                            <div className="bg-(--two) border-(--light) border-2 w-45 h-45 rounded-full center">
                                <FontAwesomeIcon icon={faBolt} className="text-7xl"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center items-end text-(--light) w-[45%] mx-auto">
                        <h1 className="text-2xl">50%～73%</h1>
                        <div className="w-full h-[2px] bg-(--light)"></div>
                        <p className="text-2xl">發電效率</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center justify-items-center my-7">
                <div className="flex items-center col-span-2 w-full bg-(--one) rounded-r-full">
                    <div className="font-bold text-(--light) col-span-2 w-full sm:ms-auto text-center md:text-start">
                        <div className="w-[85%] ms-auto">
                            <h1 className="text-2xl">能源最大化利用</h1>
                            <p className="text-lg whitespace-pre-line">
                                熱電聯供 (CHP) 效率可突破 95%，<br />
                                能同時供應電力與熱能，<br />
                                支援能源回收再利用
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className={`center bg-(--one) rounded-full text-(--light) w-50 h-50`}>
                            <div className="bg-(--two) border-(--light) border-2 w-45 h-45 rounded-full center">
                                <FontAwesomeIcon icon={faFire} className="text-7xl"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 font-bold text-(--one) col-span-2 sm:w-[70%] w-full sm:ms-auto text-center md:text-end">
                    <h1 className="text-2xl">&gt;95%</h1>
                    <div className="w-full h-[2px] bg-(--one)"></div>
                    <p className="text-2xl">熱電聯供效率</p>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center justify-items-center my-7">
                <div className="font-bold text-(--one) col-span-2 sm:w-[80%] w-full sm:ms-auto text-center md:text-start">
                    <h1 className="text-2xl">穩定輸出，歷久彌新</h1>
                    <p className="text-lg whitespace-pre-line">
                        系統在 10,000 小時運行<br />
                        仍可維持穩定輸出與低能量衰減，<br />
                        長期確保性能穩定
                    </p>
                </div>
                <div className="flex items-center col-span-2 w-full bg-(--one) rounded-l-full">
                    <div className="">
                        <div className={`center bg-(--one) rounded-full text-(--light) w-50 h-50`}>
                            <div className="bg-(--two) border-(--light) border-2 w-45 h-45 rounded-full center">
                                <FontAwesomeIcon icon={faBatteryFull} className="text-7xl"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 justify-center items-end text-(--light) w-[45%] mx-auto">
                        <h1 className="text-2xl">10,000hr / &lt; 1%</h1>
                        <div className="w-full h-[2px] bg-(--light)"></div>
                        <p className="text-2xl">低能量衰減</p>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8 items-center justify-items-center my-7">
                <div className="flex items-center col-span-2 w-full bg-(--one) rounded-r-full">
                    <div className="font-bold text-(--light) col-span-2 w-full sm:ms-auto text-center md:text-start">
                        <div className="w-[85%] ms-auto">
                            <h1 className="text-2xl">耐用與低維護兼具</h1>
                            <p className="text-lg whitespace-pre-line">
                                燃料電池設計壽命長達 30,000～50,000 小時，<br />
                                大幅降低維護頻率與成本
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className={`center bg-(--one) rounded-full text-(--light) w-50 h-50`}>
                            <div className="bg-(--two) border-(--light) border-2 w-45 h-45 rounded-full center">
                                <FontAwesomeIcon icon={faHourglassHalf} className="text-7xl"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 font-bold text-(--one) col-span-2 sm:w-[70%] w-full sm:ms-auto text-center md:text-end">
                    <h1 className="text-2xl">30,000～50,000hr</h1>
                    <div className="w-full h-[2px] bg-(--one)"></div>
                    <p className="text-2xl">長壽命設計</p>
                </div>
            </div>
        </div >
    )
}