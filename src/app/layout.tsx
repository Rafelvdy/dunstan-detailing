import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat, Roboto } from "next/font/google";
// import localFont from "next/font/local";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],

});

// const homoarakhn = localFont({
//   src: "/fonts/HOMOARAK.TTF",
//   variable: "--font-homoarakhn",
//   weight: "700"
// });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Dunstan Detailing",
  description: "We provide the best car detailing services in Kent",
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
