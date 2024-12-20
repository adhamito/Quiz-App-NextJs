import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

// Define fonts
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "Quiz App",
  description: "Generated by Adham Almechkor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Quiz YPOL</title>
      </head>
      <body className={`${inter.className} ${poppins.className} antialiased`}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
