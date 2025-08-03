import { AuthUserProvider } from "@/context/AuthUserContext";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthUserProvider>
          {children}
        </AuthUserProvider>
      </body>
    </html>
  );
}
