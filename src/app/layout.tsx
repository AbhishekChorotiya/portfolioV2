import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Chorotiya",
  description: "Abhishek Chorotiya's Portfolio Website",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [
    { name: "Abhishek Chorotiya", url: "https://abhishek.chorotiya.com" },
  ],
  openGraph: {
    title: "Abhishek Chorotiya",
    description: "Abhishek Chorotiya's Portfolio Website",
    url: "https://abhishek.chorotiya.com",
    siteName: "Abhishek Chorotiya",
    images: [
      {
        url: "https://abhishek.chorotiya.com/photoCircle.avif",
        width: 500,
        height: 500,
        alt: "abhishek",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
        <noscript>
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
