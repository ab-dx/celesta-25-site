import { AuthUserProvider } from "@/context/AuthUserContext";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthUserProvider>
          <Navbar />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </AuthUserProvider>
      </body>
    </html>
  );
}
