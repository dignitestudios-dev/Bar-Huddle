"use client";

import { useState } from "react";

const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="mx-auto flex min-h-[150px] w-full max-w-[1440px] items-center justify-center px-4 sm:px-6 lg:px-[100px]">
        <div className="flex w-full max-w-[1240px] items-center justify-between gap-4 py-6">
          {/* Logo */}
          <a href="/" className="shrink-0" aria-label="Bar Huddle home">
            <img
              className="h-[72px] w-[73px] object-contain sm:h-[88px] sm:w-[89px] lg:h-[104px] lg:w-[105px]"
              alt="Bar huddle JPEG"
              src="/figmaAssets/bar-huddle---jpeg-1.png"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="mt-[-1.00px] block whitespace-nowrap [font-family:'Poppins',Helvetica] text-sm font-normal leading-[normal] tracking-[-0.18px] text-white transition-opacity hover:opacity-80 lg:text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side: Get Started + hamburger */}
          <div className="flex items-center gap-3">
            <button className="h-auto shrink-0 rounded-full bg-[#b45ff2] cursor-pointer px-5 py-2.5 [font-family:'Poppins',Helvetica] text-sm font-medium leading-[normal] tracking-[-0.48px] text-white hover:bg-[#a44ae8] sm:px-8 sm:py-3 sm:text-base">
              Get Started
            </button>

            {/* Hamburger — mobile only */}
            <button
              id="mobile-menu-toggle"
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                /* X icon */
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="border-t border-white/10 bg-[#000842]/95 px-6 py-5 backdrop-blur-md"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-3 [font-family:'Poppins',Helvetica] text-base font-normal tracking-[-0.18px] text-white transition-colors hover:bg-white/10 hover:opacity-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
