import RootContainer from "@/components/RootContainer";
import "./globals.css";

export const metadata = {
  title: "Next.js App",
  description: "Next.js App with Light and Dark Theme",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body style={{ height: "100vh", position: "relative" }}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
};

export default RootLayout;
