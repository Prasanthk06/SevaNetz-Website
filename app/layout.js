import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SevaNetz — Reduce Waste. Feed Lives.",
  description: "AI-powered food redistribution platform. Connecting donors and NGOs to fight hunger and waste.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
