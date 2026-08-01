"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [["Projects", "/projects"], ["Experience", "/experience"], ["About", "/about"], ["Resume", "/resume"], ["Contact", "/contact"]];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const current = document.documentElement.dataset.theme ?? "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("sr-theme", next);
  }

  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Saroswat Roy, home"><span className="brand-mark">SR</span><span>Saroswat Roy</span></Link>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation">Menu</button>
    <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
      {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
    </nav>
    <button className="theme-button" onClick={toggleTheme} aria-label="Toggle light and dark theme"><span aria-hidden="true">◐</span></button>
  </header>;
}
