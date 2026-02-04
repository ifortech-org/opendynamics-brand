"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const EN_PREFIX = "/en";

type LanguageValue = "IT" | "EN";

function getCurrentLanguage(pathname: string | null) : LanguageValue {
  if (!pathname) return "IT";
  return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`)
    ? "EN"
    : "IT";
}

function getPathWithLanguage(pathname: string | null, lang: LanguageValue) {
  const safePath = pathname && pathname.length > 0 ? pathname : "/";

  if (lang === "EN") {
    if (safePath === EN_PREFIX || safePath.startsWith(`${EN_PREFIX}/`)) {
      return safePath;
    }
    if (safePath === "/") return `${EN_PREFIX}/`;
    return `${EN_PREFIX}${safePath.startsWith("/") ? safePath : `/${safePath}`}`;
  }

  if (safePath === EN_PREFIX) return "/";
  if (safePath.startsWith(`${EN_PREFIX}/`)) {
    return safePath.replace(/^\/en/, "");
  }

  return safePath;
}

export default function LanguageSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentLang = getCurrentLanguage(pathname);

  return (
    <label className="flex items-center gap-2 text-xs text-foreground/70">
      <span className="sr-only">Language</span>
      <select
        className="rounded-md border border-border/60 bg-background px-2 py-1 text-xs text-foreground/80"
        value={currentLang}
        onChange={(event) => {
          const nextLang = event.target.value as LanguageValue;
          const nextPath = getPathWithLanguage(pathname, nextLang);
          const query = searchParams?.toString();
          const url = query ? `${nextPath}?${query}` : nextPath;
          router.push(url);
        }}>
        <option value="IT">IT</option>
        <option value="EN">EN</option>
      </select>
    </label>
  );
}
