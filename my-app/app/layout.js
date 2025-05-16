import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";


const geistSans = Geist({
 variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me a Mocktail",
  description: "This website is a crowdfunding platform for Creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[87vh] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

            {children}
          </div>

          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
