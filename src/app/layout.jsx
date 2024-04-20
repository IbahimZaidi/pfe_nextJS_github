import Header from "../layoutHF/Header";
import "./globals.css";
import { Footer } from "../layoutHF/Footer";
import UnderHeader from "../layoutUnderHeader/UnderHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-100vh bg-red-300">
        <Header />
        <UnderHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
