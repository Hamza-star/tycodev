import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgressBar from "@/components/progress-bar";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tycodev | Web, App & Marketing Experts",
    template: "%s | Tycodev",
  },
  description:
    "Tycodev is your partner for professional websites, mobile apps, and digital growth. Trusted by startups and enterprises.",
  metadataBase: new URL("https://tycodev.com"),
  openGraph: {
    title: "Tycodev",
    description: "Web, App & Marketing Experts",
    url: "https://tycodev.com",
    siteName: "Tycodev",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tycodev",
    description: "Premium design & development",
    creator: "@tycodev",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body className="antialiased dark">
        <ProgressBar />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
