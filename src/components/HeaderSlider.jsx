"use client";
import Image from "next/image"
import { useState, useEffect } from "react";
export default function HeaderSlider({ slides, interval = 5000, title, desc }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 自動輪播
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [slides.length, interval]);

    return (
        <section className="relative w-full h-[100vh] overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative h-[100vh]">
                        <Image
                            src={slide.img}
                            alt={slide.title || `slide-${index}`}
                            fill
                            className="object-cover brightness-50"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-(--light) font-bold bg-black/40">
                <h1 className="xl:text-4xl text-3xl">{title}</h1>
                <h1 className="xl:text-2xl text-lg mt-2">{desc}</h1>
            </div>
        </section>
    );
}