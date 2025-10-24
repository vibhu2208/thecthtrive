import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "react-multi-carousel/lib/styles.css";
import "./globals.css";
import 'aos/dist/aos.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Techthrivesystem",
  description: "IT service and consulting company",
  icons: [
    {
      url: '/logo.webp',
      href: '/logo.webp',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-white min-h-screen w-full flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
