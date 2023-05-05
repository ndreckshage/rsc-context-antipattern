import { Inter } from "next/font/google";
import ActiveLink from "./active-link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ padding: 10 }}>
        <ActiveLink href="/global-provider">Global Provider ❌</ActiveLink>
        <ActiveLink href="/leaf-providers">Leaf Providers ⏸️</ActiveLink>
        <ActiveLink href="/refresh-root">Refresh Root ✅</ActiveLink>
        <ActiveLink href="/server-action">Sever Action 🥇</ActiveLink>
        {children}
      </body>
    </html>
  );
}
