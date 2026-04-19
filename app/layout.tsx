import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mackaybiohazardcleaning.com.au"),
  title: {
    default: "Mackay Biohazard Cleaning",
    template: "%s | Mackay Biohazard Cleaning",
  },
  description:
    "Discrete, practical support for biohazard cleaning, trauma cleaning, hoarding and squalor recovery, vacate property recovery, decluttering and crisis navigation across Mackay and surrounding regions.",
  keywords: [
    "Mackay biohazard cleaning",
    "biohazard cleaning Mackay",
    "trauma cleaning Mackay",
    "crime scene cleaning Mackay",
    "unattended death cleaning Mackay",
    "hoarding cleanup Mackay",
    "squalor cleanup Mackay",
    "vacate property recovery Mackay",
    "decluttering Mackay",
    "crisis navigation Mackay",
    "meth lab clean up Mackay",
  ],
  applicationName: "Mackay Biohazard Cleaning",
  authors: [{ name: "Mackay Biohazard Cleaning" }],
  creator: "Mackay Biohazard Cleaning",
  publisher: "Mackay Biohazard Cleaning",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://www.mackaybiohazardcleaning.com.au",
    siteName: "Mackay Biohazard Cleaning",
    title: "Mackay Biohazard Cleaning",
    description:
      "Discrete, practical support for biohazard cleaning, trauma cleaning, hoarding and squalor recovery, vacate property recovery, decluttering and crisis navigation across Mackay and surrounding regions.",
    images: [
      {
        url: "/hoarded-room-mackay-before.jpg",
        width: 1200,
        height: 630,
        alt: "Mackay Biohazard Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mackay Biohazard Cleaning",
    description:
      "Discrete, practical support for biohazard cleaning, trauma cleaning, hoarding and squalor recovery, vacate property recovery, decluttering and crisis navigation across Mackay and surrounding regions.",
    images: ["/hoarded-room-mackay-before.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
