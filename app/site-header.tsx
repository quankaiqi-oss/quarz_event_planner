"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/portfolio", "Portfolio"],
  ["/team", "Our Team"],
  ["/contact", "Contact"],
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!transparent);
  const pathname = usePathname();

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return <header className={`site-header ${transparent && !scrolled ? "is-transparent" : ""}`}>
    <Link className="brand" href="/" aria-label="QUARZ home">
      <img src="/media/brand/quarz-logo.png" alt="QUARZ Event Planner" />
    </Link>
    <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-navigation" aria-label="Toggle navigation">
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
    <nav id="main-navigation" className={open ? "open" : ""} aria-label="Primary navigation">
      {navItems.map(([href, label]) => <Link href={href} className={isActive(href) ? "active" : ""} aria-current={isActive(href) ? "page" : undefined} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a Project</Link>
    </nav>
  </header>;
}
