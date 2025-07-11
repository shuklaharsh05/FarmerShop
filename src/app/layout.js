import "./globals.css"; // optional if you're using a CSS file

import { Orbitron, Krona_One, Poppins } from "next/font/google";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const kronaOne = Krona_One({
  variable: "--font-krona",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Farmershop",
  description: "Farmershop",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${kronaOne.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
