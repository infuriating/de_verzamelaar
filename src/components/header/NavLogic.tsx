"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavPages } from "@/lib/NavPages";

export default function NavLogic() {
  const pathname = usePathname();

  return (
    <>
      {NavPages.map((link) => (
        <Link href={link.href} key={link.href} passHref>
          <div
            className={`group flex items-center font-semibold transition-all duration-300 hover:font-semibold hover:text-white hover:opacity-80 ${
              pathname === link.href
                ? "text-white bg-clip-text text-transparent"
                : "text-neutral-400"
            }`}
          >
            <p>{link.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
