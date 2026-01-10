"use client";
import { useEffect, useRef, useState } from "react";

export default function AppVideo() {
    const videoRef = useRef(null);
    const [language, setLanguage] = useState("zh"); // zh, en, jp

    // 🔹 三個語言的影片檔案
    const videos = {
        zh: "https://www.youtube.com/embed/gZ6ez3Lyxp0?si=qyO2YZq4LuiFgXEF",
        en: "https://www.youtube.com/embed/mVGELDD-Qoo?si=_YB_gfsLdZa2OPU_",
        jp: "https://www.youtube.com/embed/QWaYwlLth8E?si=y7jMSTWkodJsHlKO",
    };

    return (
        <div className="relative w-full overflow-hidden">
            <iframe
                key={language}
                src={videos[language]}
                className="w-full sm:h-150 h-80"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            />
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

