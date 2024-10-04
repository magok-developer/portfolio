import RootContainer from "@/components/RootContainer";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

export const metadata = {
  title: "Next.js App",
  description: "Next.js App with Light and Dark Theme",
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
