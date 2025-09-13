import "./globals.css";
import { Playfair_Display } from "next/font/google";
import TabBar from "./components/TabBar/TabBar";
import Footer from "./components/Footer/Footer";

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
        <main className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-12">
          {children}
          <Footer />
        </main>
        <TabBar />
      </body>
    </html>
  );
}
