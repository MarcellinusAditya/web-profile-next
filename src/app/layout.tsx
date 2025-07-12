/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marcellinus Aditya | Portfolio",
  description: "Welcome to my portfolio! I'm Marcellinus Aditya, a passionate software engineer with expertise in web development. Explore my projects and skills to see how I can help bring your ideas to life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer data-site="marcellinus.vitroweb.site" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
