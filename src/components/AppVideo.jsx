"use client";
import { useEffect, useRef, useState } from "react";

export default function AppVideo() {
    const videoRef = useRef(null);
    const [language, setLanguage] = useState("zh"); // zh, en, jp

    // 🔹 三個語言的影片檔案
    const videos = {
        zh: "https://dl.dropboxusercontent.com/scl/fi/l4vro6qjrllj22c1qn6hl/app_chinese.m4v?rlkey=w21yxf8wh8pivo8bobfd8igzd&st=1krz753o&raw=1",
        en: "https://dl.dropboxusercontent.com/scl/fi/jgq9oulou4f8d7vrzfw8w/app_english.mp4?rlkey=4cz04tjmtl22f6c147kpda8r5&st=x65v4g2s&raw=1",
        jp: "https:///dl.dropboxusercontent.com/scl/fi/u44h109xgrbb1c8ippy7a/app_japan.mp4?rlkey=eqfeuvdcrpmqq9fuaj8e9q3su&st=hkydgd01&raw=1",
    };
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.load();
            video.play().catch(() => {
                console.warn("自動播放被阻止，等待使用者互動");
            });
        }
    }, [language]);
    return (
        <div className="relative w-full overflow-hidden">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                preload="auto"
                playsInline
                autoPlay
                loop
                muted
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
