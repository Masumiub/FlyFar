import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata = {
  // Basic metadata
  title: {
    default: "FlyFar - Explore the World",
    template: "%s | FlyFar Nest",
  },
  description:
    "FlyFar Nest is your trusted travel companion. Discover amazing destinations, book tours, and share your travel stories with ease.",
  keywords: [
    "Travel",
    "Tours",
    "Tourism",
    "Tour Packages",
    "Book Trips",
    "Travel Stories",
    "Tour Guides",
    "Tourist Nest",
  ],
  authors: [{ name: "FlyFar Team", url: "https://FlyFar.com" }],
  creator: "FlyFar",
  publisher: "FlyFar",

  // Application metadata
  applicationName: "FlyFar",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  metadataBase: new URL("https://touristnest.com"),

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "FlyFar - Explore the World",
    description:
      "Discover and book unforgettable trips with Tourist Nest. Explore destinations, guides, and stories from travelers around the world.",
    url: "https://touristnest.com",
    siteName: "Tourist Nest",
    images: [
      {
        url: "https://touristnest.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tourist Nest",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Tourist Nest - Explore the World",
    description:
      "Tourist Nest makes travel simple. Book tours, discover guides, and share your adventures.",
    creator: "@touristnest",
    images: ["https://touristnest.com/og-image.jpg"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },


  category: "Travel & Tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <head>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
