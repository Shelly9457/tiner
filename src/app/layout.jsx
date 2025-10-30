import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faLocationDot, faFlask, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import HeaderSection from "@/components/HeaderSection";
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
  title: "tiner",
  description: "地諾科技股份有限公司",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="py-3 bg-(--dark)/80 backdrop-blur-lg text-(--light) fixed top-0 left-0 w-full z-98">
            <Navbar></Navbar>
          </nav>
          <HeaderSection></HeaderSection>
        </header>
        <main>{children}</main>
        <footer className="bg-[#263238] py-5 text-(--light)" id="footer">
          <div className="container mx-auto w-[80%]">
            <div className="flex items-center text-(--light)">
              <div className="bg-(--light) p-1 me-2 rounded-full w-[50px] h-[50px] center">
                <Image src="/images/logo.png" width={50} height={50} alt="logo"></Image>
              </div>
              <h1>Tiner</h1>
            </div>
            <FooterItems icon={faLocationDot} content="總部： 327007桃園市新屋區華興路690巷199弄85號" />
            <FooterItems icon={faFlask} content="研發中心： 新竹市東區光復路二段 101 號（清華大學創新育成大樓 R719）" />
            <FooterItems icon={faEnvelope} content="tiner20231020@gmail.com" />
            <FooterItems icon={faPhoneAlt} content="03-4775868" />
            <h1 className="text-center">Copyright © Your Website 2025</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
