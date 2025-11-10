"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import Btn from "@/components/Btn";
import News from "@/components/News";
import IndexProducts from "@/components/IndexProducts";
import IndexIconCard from "@/components/IndexIconCard";
import IndexImageRun from "@/components/IndexImageRun";
import AppVideo from "@/components/AppVideo";
import ProductVideo from "@/components/ProductVideo";
export default function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const homeSlides = [
		{ img: "/images/indexSlide1.png" },
		{ img: "/images/indexSlide2.png" },
		{ img: "/images/indexSlide3.png" },
	];
	// 自動輪播
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % homeSlides.length);
		}, 5000);

		return () => clearInterval(timer);
	}, [homeSlides.length, 5000]);


	return (
		<>
			<section className="relative w-full h-[100vh] center">
				<video
					className="w-full h-full object-cover brightness-50"
					autoPlay
					muted
					loop
					playsInline
				>
					<source src="/images/app_chinese.mp4" type="video/mp4" />
				</video>
				<article className="absolute inset-0 flex flex-col justify-center items-center text-(--light) font-bold bg-black/40">
					<h1 className="xl:text-6xl text-4xl">TINER</h1>
					<h1 className="xl:text-2xl text-lg mt-2 text-center">
						地諾科技股份有限公司<br />
						TINER Technology Co., Ltd.
					</h1>
				</article>
				<article className="text-(--dark) font-bold bg-(--light)/80 text-center py-10 md:px-15 px-5 rounded-t-xl absolute lg:inset-x-50 inset-x-0 bottom-0 z-1">
					<h1 className="md:text-3xl text-xl md:mb-8 mb-3">創新研發，務實驗證 ，成就淨零未來</h1>
					<h1 className="md:text-lg text-sm">TINER致力於推動綠色能源技術，打造高效燃料電池系統，為環保永續貢獻力量</h1>
				</article>
			</section>
			<section className="py-16 lg:w-[80%] w-full mx-auto ">
				<article className="center flex-col">
					<h1 className="text-center text-(--one) font-bold md:text-2xl text-lg">
						地諾科技致力於發展氫能燃料電池與製氫技術，<br />
						推動綠色能源產業鏈整合，打造高效率、 <br />
						低碳排的永續能源生態系
					</h1>
					<Link href="/about">
						<Btn text={"關於Tiner"}></Btn>
					</Link>
				</article>
			</section>
			<section className="py-16 lg:w-[80%] w-full mx-auto ">
				<h1 className="text-(--one) font-bold xl:text-4xl text-3xl text-center mb-5">最新消息</h1>
				<hr className="text-(--dark)" />
				<News></News>
			</section>
			<section className="py-16 lg:w-[80%] w-full mx-auto ">
				<article className="center flex-col gap-8">
					<h1 className="text-center text-(--one) font-bold md:text-2xl text-lg">
						我們擁有多項燃料電池、電池元件專利與生物質轉化系統<br />
						確保研發成果轉化為市場競爭力
					</h1>
					<div className="md:w-[80%] w-full h-full mx-auto h-160 ">
						<ProductVideo></ProductVideo>
					</div>
					<IndexProducts></IndexProducts>
				</article>
			</section>
			<section className="py-16 lg:w-[80%] w-full mx-auto ">
				<article className="center flex-col gap-8">
					<h1 className="text-center text-(--one) font-bold md:text-2xl text-lg">
						從陸地到天空，從城市到農場，我們的氫能技術正驅動下一代綠色能源革命
					</h1>
					<div className="flex gap-8 xl:flex-row flex-col">
						<div className="xl:w-1/2 w-full center">
							<AppVideo></AppVideo>
						</div>
						<div className="xl:w-1/2 w-full grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-3">
							<IndexIconCard></IndexIconCard>
						</div>
					</div>
					<Link href="\">
						<Btn text={"了解更多"}></Btn>
					</Link>
				</article>
			</section>
			<section className="py-16  w-full mx-auto ">
				<article className="center flex-col gap-8">
					<h1 className="text-center text-(--one) font-bold md:text-2xl text-lg">
						與政府、學術與產業領袖攜手，推動氫能產業生態系
					</h1>
					<IndexImageRun></IndexImageRun>
					<Link href="\cooperate">
						<Btn text={"產學合作"}></Btn>
					</Link>
				</article>
			</section>
			<section className="py-16 lg:w-[80%] w-full mx-auto ">
				<article className="center flex-col gap-8">
					<h1 className="text-center text-(--one) font-bold md:text-2xl text-lg">
						想了解更多氫能應用或合作機會？<br />
						聯絡我們，一起啟動零碳未來
					</h1>
					<Link href="#footer">
						<FontAwesomeIcon icon={faArrowAltCircleDown} className="text-(--one) text-3xl animate-bounce"></FontAwesomeIcon>
					</Link>
				</article>
			</section>
		</>
	);
}
