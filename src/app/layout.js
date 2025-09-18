import { AuthUserProvider } from "@/context/AuthUserContext";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingNav from "@/components/floatnav";
import FloatingCart from "@/components/floatcart";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import Cart from "@/components/Cart";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthUserProvider>
          <CartProvider>
            <Navbar />
            <FloatingNav />
            <FloatingCart />
            {children}
            <Toaster position="top-right" reverseOrder={false} />
            <Footer />
          </CartProvider>
        </AuthUserProvider>
      </body>
    </html>
  );
}
