import Header from "../layoutHF/Header";
import "./globals.css";
import { Footer } from "../layoutHF/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-100vh bg-red-300">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
