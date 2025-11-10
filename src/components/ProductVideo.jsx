"use client";
import { useEffect, useRef, useState } from "react";

export default function ProductVideo() {
    const videoRef = useRef(null);
    const [language, setLanguage] = useState("zh"); // zh, en, jp

    // 🔹 三個語言的影片檔案
    const videos = {
        zh: "https://dl.dropboxusercontent.com/scl/fi/3f3yjkq1gtcu5t82ybwvh/product_chinese.mp4?rlkey=8bjouvqs08j9plcvvuju5o6md&st=5vu4a0ri&raw=1",
        en: "https://dl.dropboxusercontent.com/scl/fi/pkgtkfxub9u8m61y9htjk/prduct_english.mp4?rlkey=8z87u91t9tbs3jrfij4rgu1sy&st=y2w8ckyb&raw=1",
    };
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.load(); // 重新載入影片
            video.play().catch(() => {
                console.warn("自動播放被阻止，等待使用者互動");
            });
        }
    }, [language]);
    return (
        <div className="relative w-full h-full overflow-hidden">
            <video
                ref={videoRef}
                key={language}
                className="w-full h-full object-cover"
                preload="auto"
                playsInline
                autoPlay
                muted
                loop
                controls // 你想讓使用者手動控制也可以加上這個
            >
                <source src={videos[language]} type="video/mp4" />
            </video>
            <div className="top-5 right-5 flex gap-3 center">
                {["zh", "en"].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={` ${language === lang ? "bg-(--one) text-(--light)" : "bg-(--two)"} 
                            py-2 px-6  text-(--light) hover:bg-(--one) rounded-full inline-block my-3 transition-all duration-300 cursor-pointer `}
                    >
                        {lang === "zh" ? "中文" : "English"}
                    </button>
                ))}
            </div>
        </div>
    );
}
