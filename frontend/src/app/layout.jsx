import { Geist, Geist_Mono, Funnel_Display} from "next/font/google";
import "./globals.css";

//! Components
import Header from "@/components/layout/Header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const funnelDisplay = Funnel_Display({
  variable: '--funnel-display',
  subsets: ['latin'],
})

export const metadata = {
  title: "dvcDaniel",
  description: "Portfolio of Daniel Stenberg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" translate="no">
      <body
        className={`${funnelDisplay.variable} antialiased`}
      >
        <Header />
          {children}
      </body>
    </html>
  );
}
