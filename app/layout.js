import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const linkStyle = { textDecoration: "none" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{padding: 10}}>
        <Link href="/root-provider-context" style={linkStyle}>
          Root Provider Context ❌
        </Link>
        &nbsp;&middot;&nbsp;
        <Link href="/root-refresh" style={linkStyle}>
          Root Refresh ✅
        </Link>
        {children}
      </body>
    </html>
  );
}
