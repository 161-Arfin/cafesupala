import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lora, Open_Sans, Oswald } from "next/font/google";

const heading = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const body = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });
const accent = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap", style: ["italic", "normal"] });

export default function App({ Component, pageProps }: AppProps) {
  return <div className={`${heading.variable} ${body.variable} ${accent.variable}`}><Component {...pageProps} /></div>;
}
