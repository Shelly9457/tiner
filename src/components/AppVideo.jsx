"use client";
import { useEffect, useRef, useState } from "react";

export default function AppVideo() {
    const videoRef = useRef(null);
    const [language, setLanguage] = useState("zh"); // zh, en, jp

    // 🔹 三個語言的影片檔案
    const videos = {
        zh: "/images/app_chinese.mp4",
        en: "/images/app_english.mp4",
        jp: "/images/app_japan.mp4",
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
        <div className="relative w-full overflow-hidden">
            <video
                ref={videoRef}
                key={language}
                className="w-full h-full object-cover"
                preload="auto"
                playsInline
                autoPlay
                loop
                controls // 你想讓使用者手動控制也可以加上這個
            >
                <source src={videos[language]} type="video/mp4" />
            </video>
            <div className="top-5 right-5 flex gap-3 center">
                {["zh", "en", "jp"].map((lang) => (
                    <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={` ${language === lang ? "bg-(--one) text-(--light)" : "bg-(--two)"} 
                            py-2 px-6  text-(--light) hover:bg-(--one) rounded-full inline-block my-3 transition-all duration-300 cursor-pointer `}
                    >
                        {lang === "zh" ? "中文" : lang === "en" ? "English" : "日本語"}
                    </button>
                ))}
            </div>
        </div>
    );
}
