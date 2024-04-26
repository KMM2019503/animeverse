import { Press_Start_2P } from "next/font/google";
import "./globals.css";

const ps_2p = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Animeverse",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ps_2p.className}>{children}</body>
    </html>
  );
}
