import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Playfair_Display, Plus_Jakarta_Sans, Lora } from "next/font/google";

const heading = Playfair_Display({ subsets: ["latin"], variable: "--font-heading-serif", display: "swap" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const accent = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap", style: ["italic", "normal"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${heading.variable} ${body.variable} ${accent.variable} font-sans antialiased text-[#e0e0e0] bg-[#121214]`}>
      <Component {...pageProps} />
    </div>
  );
}

