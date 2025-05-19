import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ["latin"],
});


export const metadata = {
  title: "CoverLettr",
  description: "simple app for writing cover letters quickly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bod"
      >
        {children}
      </body>
    </html>
  );
}
