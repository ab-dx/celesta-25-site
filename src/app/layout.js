import { AuthUserProvider } from "@/context/AuthUserContext";
import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingNav from "@/components/floatnav";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthUserProvider>
          <Navbar />
          <FloatingNav />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
          <Footer />
        </AuthUserProvider>
      </body>
    </html>
  );
}
