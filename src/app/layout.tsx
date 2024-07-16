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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-754FZF2ZW2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-754FZF2ZW2');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
