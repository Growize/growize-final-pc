import type { Metadata } from "next";
import { Space_Grotesk, Cairo } from "next/font/google";
import "./globals.css";

// 1. Initialize the Futuristic English Font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap", // Ensures text remains visible while the font loads
});

// 2. Initialize the Modern Arabic Font
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gro-Wize | Web Agency",
  description: "High-performance, futuristic web agency in the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

// Satisfies architecture for future RTL/Arabic support
  const lang = "en" as string; 
  const dir = lang === "ar" ? "rtl" : "ltr"; //

  return (
    <html 
      lang={lang} 
      dir={dir} 
      // 3. Inject both font variables into the root HTML
      className={`${spaceGrotesk.variable} ${cairo.variable}`}
    >
      {/* 4. Apply the default sans font via Tailwind */}
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}