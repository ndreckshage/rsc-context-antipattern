import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const linkStyle = { textDecoration: "none", paddingRight: 20 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{padding: 10}}>
        <Link href="/global-provider" style={linkStyle}>
          Global Provider ❌
        </Link>
        <Link href="/leaf-providers" style={linkStyle}>
          Leaf Providers ⏸️
        </Link>
        <Link href="/refresh-root" style={linkStyle}>
          Refresh Root ✅
        </Link>
        <Link href="/server-action" style={linkStyle}>
          Sever Action 🥇
        </Link>
        {children}
      </body>
    </html>
  );
}
