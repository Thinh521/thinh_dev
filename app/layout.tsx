import "./globals.css";
import { Playfair_Display } from "next/font/google";
import TabBar from "./components/TabBar/TabBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} min-h-screen`}>
        <main>{children}</main>
        <TabBar />
      </body>
    </html>
  );
}
