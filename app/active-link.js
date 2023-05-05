'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function ActiveLink(props) {
  const pathname = usePathname();

  return (
    <Link
      href={props.href}
      style={{
        textDecoration: "none",
        paddingRight: 20,
        fontWeight: pathname === props.href ? "bold" : "normal",
      }}
    >
      {props.children}
    </Link>
  );
}
