import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "팀플조아",
  description: "팀프로젝트 협업 메신저",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-xl m-auto mx-[20px] mt-[25px] bg-white">{children}</body>
    </html>
  );
}
