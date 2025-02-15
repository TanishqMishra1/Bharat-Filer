import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BFiler",
  description: "The best app!",
};

export default function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
