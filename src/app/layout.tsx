import RootContainer from "@/components/RootContainer";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

export const metadata = {
  title: "JIWON PORTFOLIO",
  description: "프론트엔드 개발자 하지원 포트폴리오",
  icons: {
    icon: "/icon/logo.svg",
  },
};

const noto = Noto_Sans_KR({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className={noto.className}>
      <body style={{ height: "100vh", position: "relative" }}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
};

export default RootLayout;
