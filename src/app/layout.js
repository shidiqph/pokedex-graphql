import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ApolloProvider } from "@/lib/apolloProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`container mt-10 ${inter.className}`}>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
