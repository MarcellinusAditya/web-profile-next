/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Layout } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcellinus Aditya | Software Engineer",
  description:
    "I'm Marcellinus Aditya, a software engineer focused on full-stack and backend development building reliable web applications with modern technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script defer data-site="marcellinus.vitroweb.site" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}