import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faLocationDot, faFlask, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import HeaderSection from "@/components/HeaderSlider";
import FooterItems from "@/components/FooterItems";
// 定義字型變數
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO 設定區
export const metadata = {
  title: "TINER | 地諾科技 | 氫能科技與創新能源未來",
  description: "地諾科技 | 專注於燃料電池、氫能應用與再生能源解決方案，推動綠色永續未來。",
  keywords: [
    "Tiner",
    "地諾科技",
    "氫能科技",
    "氫能動力",
    "固態儲氫",
  ],
  openGraph: {
    title: "Tiner | 地諾科技 | 氫能科技與創新能源未來",
    description: "Tiner（地諾科技） 專注於燃料電池、氫能應用與再生能源解決方案，推動綠色永續未來。",
    url: "tiner-self.vercel.app",
    siteName: "Tiner地諾科技",
    locale: "zh_TW",
    type: "website",
  },
  alternates: {
    canonical: "https://tiner-self.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ezdpaljlqz_oLWWtLle88rg7_svD6IaYwpAXILigqw4" />
      </head>
      <body>
        <header>
          <nav className="py-3 bg-[#263238]/80 backdrop-blur-lg text-(--light) fixed top-0 left-0 w-full z-98">
            <Navbar></Navbar>
          </nav>
          {/* <HeaderSection></HeaderSection> */}
        </header>
        <main>{children}</main>
        <footer className="bg-[#263238] py-5 text-(--light)" id="footer">
          <div className="container mx-auto w-[80%]">
            <div className="flex items-center text-(--light)">
              <div className="bg-(--light) p-1 me-2 rounded-full w-[50px] h-[50px] center">
                <Image src="/images/logo.png" width={50} height={50} alt="logo"></Image>
              </div>
              <h1 className="tracking-widest">TINER地諾科技</h1>
            </div>
            <FooterItems icon={faLocationDot} content="27007桃園市新屋區華興路690巷199弄85號" />
            <FooterItems icon={faEnvelope} content="tiner20231020@gmail.com" />
            <FooterItems icon={faPhoneAlt} content="03-4775868" />
            <h1 className="text-center">Copyright © Your Website 2025</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
