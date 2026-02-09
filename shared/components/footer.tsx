"use client";

import Link from "next/link";
import LogoDynamic from "@/shared/components/logo-dynamic";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "Blog",
    href: "/blog",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
];

export default function Footer() {
  // Recupera il pathname lato client per reagire ai cambi di navigazione
  const pathname = usePathname() || "/";

  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="dark:bg-background p-5 xl:p-5 dark:text-gray-300">
        <Link
          className="block w-[6.25rem] mx-auto"
          href={isEn ? "/en" : "/"}
          aria-label="Home page">
          <LogoDynamic />
        </Link>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-7 text-primary">
          {navItems.map((navItem) => (
            <Link
              key={navItem.label}
              href={isEn ? `/en${navItem.href}` : navItem.href}
              target={navItem.target ? "_blank" : undefined}
              rel={navItem.target ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-foreground/80 text-foreground/60 text-sm">
              {navItem.label}
            </Link>
          ))}
        </div>
        {isEn ? (
          <div className="mt-8 flex flex-col gap-4 justify-center text-center lg:mt-5 text-xs text-foreground/60 border-t pt-8">
            <p className="font-thin">
              OpenDynamics is a brand of iFortech srl
            </p>
            <p className="font-thin">
              SHARE CAPITAL € 40,000.00 I.V. - VAT AND TAX CODE: 07927140967 - REA: MI-1991600
            </p>
            <p className="font-thin">
              REGISTERED OFFICE: VIA PORDENONE 35 - COLOGNO MONZESE - 20093 (MI)
            </p>
            <p className="text-foreground/60">
              &copy; {getCurrentYear()}&nbsp;iFortech. All rights reserved.
            </p>
          </div>
        )
        : (
          <div className="mt-8 flex flex-col gap-4 justify-center text-center lg:mt-5 text-xs text-foreground/60 border-t pt-8">
            <p className="font-thin">
              OpenDynamics è un marchio iFortech srl
              </p>
              <p className="font-thin">
                CAP. SOC. € 40.000,00 I.V. - P.IVA E CF: 07927140967 - REA: MI-1991600
              </p>
              <p className="font-thin">
                SEDE LEGALE: VIA PORDENONE 35 - COLOGNO MONZESE - 20093 (MI) 
              </p>
              <p className="text-foreground/60">
                &copy; {getCurrentYear()}&nbsp;iFortech. All rights reserved.
              </p>
            </div>
          )

        }
        
      </div>
    </footer>
  );
}
