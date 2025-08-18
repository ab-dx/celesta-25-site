import { AuthUserProvider } from "@/context/AuthUserContext";
import "./globals.css";
import Navbar from "@/components/navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthUserProvider>
          <Navbar />
          {children}
        </AuthUserProvider>
      </body>
    </html>
  );
}
