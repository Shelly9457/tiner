"use client";
import { useEffect, useRef, useState } from "react";

export default function AppVideo() {
    const [language, setLanguage] = useState("zh"); // zh, en, jp
    const videos = {
        zh: "https://www.youtube.com/embed/4G5VdhKDbEo?si=4j22cYwyszcChiDI",
        en: "https://www.youtube.com/embed/rL6gYi6swcI?si=IseU_mS92O8WkAVA",
        jp: "https://www.youtube.com/embed/V2v1Gsh2ZTs?si=mQkn4H1iE40hHyOI",
    };
    return (
        <div className="relative w-full overflow-hidden">
            <iframe
                key={language}
                src={videos[language]}
                className="w-full h-100"
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
