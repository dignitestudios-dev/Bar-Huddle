"use client";

import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const tocSections = [
  { id: "commitment", label: "Our Commitment to Child Safety" },
  { id: "age-restrictions", label: "Age Restrictions" },
  { id: "content-moderation", label: "Content Moderation & Reporting" },
  { id: "safety-measures", label: "User Safety Measures" },
  { id: "compliance", label: "Compliance & Law Enforcement" },
  { id: "contact-concerns", label: "Contact for Child Safety Concerns" },
];

const safetyMeasuresList = [
  {
    title: "Profile Verification",
    desc: "We take reasonable steps to discourage fake accounts and impersonation through account validation processes.",
    icon: (
      <svg className="w-6 h-6 text-[#fdf88f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Chat & Interaction Controls",
    desc: "Users can block, mute, or report other users if they feel unsafe or encounter inappropriate behavior.",
    icon: (
      <svg className="w-6 h-6 text-[#fdf88f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Content Monitoring",
    desc: "We use a combination of automated systems, moderation tools, and user reports to detect and remove content that violates our Community Guidelines and Child Safety Policy.",
    icon: (
      <svg className="w-6 h-6 text-[#fdf88f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Data Protection & Privacy",
    desc: "Bar Huddle does not sell or share users' personal information with third parties except where required by law or with the user's consent. Our privacy practices comply with applicable data protection laws.",
    icon: (
      <svg className="w-6 h-6 text-[#fdf88f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const complianceStandards = [
  { name: "COPPA", desc: "Children's Online Privacy Protection Act (where applicable)" },
  { name: "GDPR", desc: "General Data Protection Regulation (where applicable)" },
  { name: "Google Play", desc: "Google Play Child Safety Standards" },
  { name: "Apple App Store", desc: "Apple App Store Child Safety Requirements" },
];

const storeButtons = [
  {
    eyebrow: "Available on the",
    label: "App Store",
    icon: "/figmaAssets/logos-apple-app-store.svg",
    iconClass: "w-[22px] h-[22px]",
    href: "https://apps.apple.com/us/app/bar-huddle/id6780429167",
  },
  {
    eyebrow: "Get it on",
    label: "Google Play",
    icon: "/figmaAssets/google-play-6124997-1-2.png",
    iconClass: "w-[22px] h-[22px] object-cover",
    href: "https://play.google.com/store/apps/details?id=com.dignitestudios.barhuddle",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Contact", href: "/#contact" },
];


const glassCardClass =
  "rounded-3xl overflow-hidden border border-white/10 bg-[linear-gradient(175deg,rgba(132,36,187,0.85)_0%,rgba(180,95,242,0.45)_100%)] shadow-[inset_-10px_10px_20px_#ffffff25,inset_0_1px_0_rgba(255,255,255,0.30),inset_1px_0_0_rgba(255,255,255,0.25)] backdrop-brightness-[110%] backdrop-blur-[12px]";

export const ChildSafetyPolicyPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredToc = tocSections.filter((sec) =>
    sec.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#000842] text-white font-['Manrope',sans-serif]">
      {/* Background Vectors & Glows matching landing theme */}
      <img
        src="/figmaAssets/vector-1.svg"
        alt="Vector Background"
        className="absolute top-[-200px] left-[-300px] w-[1400px] opacity-40 pointer-events-none select-none"
      />
      <img
        src="/figmaAssets/rectangle-23469.svg"
        alt="Glow Shape"
        className="absolute top-[-300px] right-[-200px] w-[1000px] opacity-30 pointer-events-none select-none"
      />
      <div className="absolute left-[-200px] top-[400px] h-[500px] w-[500px] rounded-full bg-[#b45ff2] opacity-30 blur-[140px] pointer-events-none" />
      <div className="absolute right-[-150px] top-[1200px] h-[600px] w-[600px] rounded-full bg-[#8424bb] opacity-35 blur-[160px] pointer-events-none" />

      {/* Floating Decorative Stars */}
      <img
        src="/figmaAssets/star-12.svg"
        alt="Star"
        className="absolute top-[120px] left-[8%] w-[60px] opacity-70 pointer-events-none"
      />
      <img
        src="/figmaAssets/star-12.svg"
        alt="Star"
        className="absolute top-[280px] right-[10%] w-[45px] opacity-60 pointer-events-none"
      />
      <img
        src="/figmaAssets/star-12.svg"
        alt="Star"
        className="absolute top-[900px] left-[4%] w-[50px] opacity-50 pointer-events-none"
      />

      {/* HEADER NAVBAR */}
      <header className="relative z-50 w-full border-b border-white/10 bg-[#000842]/80 backdrop-blur-md">
        <div className="mx-auto flex min-h-[100px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-[100px] py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 shrink-0" aria-label="Bar Huddle home">
            <img
              className="h-[60px] w-[61px] object-contain sm:h-[72px] sm:w-[73px]"
              alt="Bar Huddle Logo"
              src="/figmaAssets/bar-huddle---jpeg-1.png"
            />
            <span className="font-bold text-xl sm:text-2xl tracking-wide text-white">
              Bar<span className="text-[#b45ff2]">Huddle</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-white/90 transition-all hover:text-[#fdf88f] lg:text-base"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action button & Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-full bg-[#b45ff2] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(180,95,242,0.4)] transition-all hover:bg-[#a44ae8] hover:shadow-[0_0_25px_rgba(180,95,242,0.7)] sm:px-7 sm:py-3 sm:text-base"
            >
              Back to Home
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#000842]/95 px-6 py-4 backdrop-blur-lg">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-base font-normal text-white hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-12 pb-8 sm:px-8 lg:px-[100px] text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b45ff2]/40 bg-[#b45ff2]/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#fdf88f] backdrop-blur-md mb-4">
              <svg className="w-4 h-4 text-[#fdf88f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last Updated: July 23, 2026
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Child Safety &amp; <span className="text-[#b45ff2]">Protection Policy</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#e7c7ff] leading-relaxed">
              At Bar Huddle, we take child safety and online protection seriously. Learn about our strict policies, age restrictions, and zero-tolerance measures against Child Sexual Abuse and Exploitation (CSAE).
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full lg:w-[340px]">
            <label htmlFor="safety-search" className="block text-xs font-semibold text-[#e7c7ff] mb-1.5 uppercase tracking-wide">
              Search Policy Topics
            </label>
            <div className="relative">
              <input
                id="safety-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics (e.g. reporting, COPPA...)"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 pl-10 text-sm text-white placeholder-white/50 focus:border-[#b45ff2] focus:bg-white/15 focus:outline-none backdrop-blur-md transition-all"
              />
              <svg
                className="absolute left-3 top-3.5 h-4 w-4 text-white/60"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-xs text-white/60 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA WITH SIDEBAR TOC */}
      <main className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
          
          {/* SIDEBAR TABLE OF CONTENTS */}
          <aside className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 rounded-2xl border border-white/10 bg-[#08083f]/60 p-5 backdrop-blur-md">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#fdf88f] mb-4 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#fdf88f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Table of Contents
            </h2>
            <nav className="flex flex-col gap-1 text-sm">
              {filteredToc.map((sec, idx) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="rounded-lg px-3 py-1.5 text-white/80 transition-all hover:bg-[#b45ff2]/20 hover:text-[#fdf88f] hover:translate-x-1"
                >
                  <span className="text-[#b45ff2] font-semibold mr-1.5">{idx + 1}.</span>
                  {sec.label}
                </a>
              ))}
              {filteredToc.length === 0 && (
                <div className="p-3 text-xs text-white/50 italic">No matching sections found</div>
              )}
            </nav>
          </aside>

          {/* MAIN POLICY CONTENT */}
          <div className="flex flex-col gap-8">
            
            {/* 1. OUR COMMITMENT TO CHILD SAFETY */}
            <section id="commitment" className={`${glassCardClass} p-6 sm:p-8 md:p-10`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b45ff2] text-white font-bold text-lg shadow-md">
                  1
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Our Commitment to Child Safety</h2>
              </div>
              <div className="space-y-4 text-white/90 leading-relaxed text-base">
                <p>
                  At <strong className="text-white">Bar Huddle</strong>, we take child safety and online protection with the utmost seriousness. We are dedicated to maintaining a safe, respectful, and secure environment for all our users.
                </p>
                <div className="rounded-2xl border border-[#b45ff2]/40 bg-[#b45ff2]/15 p-5 text-[#fdf88f] flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-[#b45ff2]/30 text-[#fdf88f] shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Zero Tolerance Policy</h3>
                    <p className="text-sm sm:text-base text-white/90">
                      We strictly enforce robust policies and active prevention mechanisms to prevent Child Sexual Abuse and Exploitation (CSAE) across all parts of our platform.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. AGE RESTRICTIONS */}
            <section id="age-restrictions" className={`${glassCardClass} p-6 sm:p-8 md:p-10`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b45ff2] text-white font-bold text-lg shadow-md">
                  2
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Age Restrictions</h2>
              </div>
              <div className="space-y-4 text-white/90 leading-relaxed text-base">
                <p>
                  Bar Huddle is designed exclusively for adult nightlife discovery and adult social networking.
                </p>
                <div className="rounded-2xl border border-red-500/40 bg-red-950/40 p-5 text-red-200 flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-red-500/20 text-red-400 shrink-0 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white mb-1">Strict 18+ Requirement</h3>
                    <p className="text-sm sm:text-base text-red-100">
                      Bar Huddle is intended exclusively for users who are <strong>18 years of age or older</strong>. Individuals under the age of 18 are strictly prohibited from creating an account or using the platform.
                    </p>
                  </div>
                </div>
                <p>
                  If we discover or suspect that a registered user is under the age of 18, we reserve the right to immediately suspend, block, or permanently delete the account without prior notice.
                </p>
              </div>
            </section>

            {/* 3. CONTENT MODERATION & REPORTING */}
            <section id="content-moderation" className={`${glassCardClass} p-6 sm:p-8 md:p-10`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b45ff2] text-white font-bold text-lg shadow-md">
                  3
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Content Moderation &amp; Reporting</h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                We maintain strict guidelines and active enforcement mechanisms to prevent harmful content on Bar Huddle:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-[#000842]/60 p-5 transition-all hover:border-[#b45ff2]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-red-500/20 text-red-400">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-[#fdf88f]">Prohibited Content</h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Any content involving child sexual abuse material (CSAM), child exploitation, grooming, nudity involving minors, or any form of child abuse is strictly prohibited. Such content will be removed immediately and reported to relevant law enforcement agencies and child protection organizations.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#000842]/60 p-5 transition-all hover:border-[#b45ff2]/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-[#b45ff2]/20 text-[#fdf88f]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 58M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg text-[#fdf88f]">User Reporting System</h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Users can report any suspicious, harmful, or unsafe activity or content directly through the platform. Every report is reviewed promptly by our moderation team, leading to content removal, immediate account termination, and law enforcement escalation where required.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. USER SAFETY MEASURES */}
            <section id="safety-measures" className={`${glassCardClass} p-6 sm:p-8 md:p-10`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b45ff2] text-white font-bold text-lg shadow-md">
                  4
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">User Safety Measures</h2>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                To protect our community and ensure a secure environment, Bar Huddle has implemented multi-layered safety controls:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {safetyMeasuresList.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-[#000842]/60 p-5 transition-all hover:border-[#b45ff2]/50 hover:bg-[#000842]/80"
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="p-2 rounded-xl bg-[#b45ff2]/20">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-[#fdf88f]">{item.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. COMPLIANCE & LAW ENFORCEMENT COLLABORATION */}
            <section id="compliance" className={`${glassCardClass} p-6 sm:p-8 md:p-10`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b45ff2] text-white font-bold text-lg shadow-md">
                  5
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Compliance &amp; Law Enforcement Collaboration</h2>
              </div>
              <div className="space-y-4 text-white/90 leading-relaxed text-base">
                <p>
                  Bar Huddle fully complies with global child protection laws, regional regulations, and digital distribution platform safety requirements:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                  {complianceStandards.map((std) => (
                    <div
                      key={std.name}
                      className="flex items-center gap-3.5 rounded-xl border border-white/10 bg-[#000842]/50 p-4"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b45ff2] text-white font-bold text-xs shrink-0">
                        ✓
                      </div>
                      <div>
                        <div className="font-bold text-[#fdf88f] text-sm">{std.name}</div>
                        <div className="text-xs text-white/70">{std.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-white/90">
                  Any suspected child sexual abuse or exploitation (CSAE) identified on the platform will be immediately reported to appropriate law enforcement agencies (including NCMEC where applicable) and child protection authorities in accordance with applicable governing laws.
                </p>
              </div>
            </section>

            {/* 6. CONTACT FOR CHILD SAFETY CONCERNS */}
            <section id="contact-concerns" className="rounded-3xl border border-[#b45ff2]/40 bg-[linear-gradient(135deg,rgba(180,95,242,0.4)_0%,rgba(132,36,187,0.7)_100%)] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fdf88f] text-[#000842] font-bold text-lg shadow-md">
                  6
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Contact for Child Safety Concerns</h2>
              </div>
              <p className="text-white/90 mb-6 text-base leading-relaxed">
                If you have concerns, reports, or questions regarding child safety on Bar Huddle, please contact our dedicated safety desk immediately:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:info@barhuddle.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 transition-all hover:bg-white/20 hover:scale-[1.02]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b45ff2] text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#e7c7ff] font-semibold">Child Safety Desk</div>
                    <div className="text-lg font-bold text-[#fdf88f]">info@barhuddle.com</div>
                  </div>
                </a>

                <a
                  href="mailto:support@barhuddle.com"
                  className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 transition-all hover:bg-white/20 hover:scale-[1.02]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b45ff2] text-white shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#e7c7ff] font-semibold">General Support</div>
                    <div className="text-lg font-bold text-[#fdf88f]">support@barhuddle.com</div>
                  </div>
                </a>
              </div>

              <p className="mt-6 text-sm text-white/80 leading-relaxed italic">
                We are committed to maintaining a safe, respectful, and secure environment for all users and will continue to continuously improve our child safety policies, moderation practices, and reporting tools.
              </p>
            </section>

          </div>
        </div>
      </main>

      {/* FOOTER matching Landing Page */}
      <footer
        className="relative rounded-t-[80px] sm:rounded-t-[100px] mt-16 w-full overflow-hidden backdrop-blur-[25px]"
        style={{
          background: "linear-gradient(238.16deg, #B45FF2 19.57%, #8424BB 82.32%)",
        }}
      >
        <img
          className="absolute left-[29px] top-[5px] hidden h-[561px] w-[568px] lg:block opacity-20 pointer-events-none"
          alt="Bar Huddle Decoration"
          src="/figmaAssets/bar-huddle---jpeg-2.png"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-10 pt-[100px] sm:px-8 lg:px-[86px] lg:pb-[60px] lg:pt-[130px]">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[180px_320px_360px] lg:justify-between">
            {/* Quick Links */}
            <nav className="flex flex-col items-start gap-5">
              <div className="font-semibold text-[22px] text-white">Quick Links</div>
              <div className="flex flex-col items-start gap-2.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-base font-normal text-white hover:text-[#fdf88f] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Address */}
            <address className="flex flex-col items-start gap-5 not-italic">
              <div className="font-semibold text-[22px] text-white">Contact</div>
              <div className="flex flex-col items-start gap-2.5 text-base text-white">
                <a
                  href="mailto:support@barhuddle.com"
                  className="hover:text-[#fdf88f] transition-colors"
                >
                  support@barhuddle.com
                </a>
                <a
                  href="tel:3233604466"
                  className="hover:text-[#fdf88f] transition-colors"
                >
                  (323) 360-4466
                </a>
                <div>29 Hillside Rd, Greenwich, CT, 06830, United States</div>
              </div>
            </address>

            {/* App Store buttons */}
            <div className="flex flex-col items-start gap-5">
              <div className="font-semibold text-[22px] text-white">Get Bar Huddle</div>
              <p className="text-base text-white">
                Discover real-time nightlife, connect with people, and experience your city safely.
              </p>
              <div className="inline-flex flex-col items-start justify-center gap-4">
                {storeButtons.map((button) => (
                  <a
                    key={`footer-safety-${button.label}`}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-auto w-[180px] rounded-[364.1px] border border-solid border-[#e7c7ff] bg-[#8424bb] px-4 py-2 shadow-[0px_0px_8px_2px_#b45ff2] cursor-pointer hover:bg-[#731da6] transition-all"
                  >
                    <span className="flex items-center justify-center gap-2.5">
                      <img className={button.iconClass} alt={button.label} src={button.icon} />
                      <span className="inline-flex flex-col items-start justify-center gap-px">
                        <span className="text-xs font-medium text-white">{button.eyebrow}</span>
                        <span className="text-sm font-bold text-white">{button.label}</span>
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <img className="h-px w-full" alt="Divider" src="/figmaAssets/vector-2446.svg" />
            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="text-base font-medium text-white">
                © 2026 Bar Huddle App. All Rights Reserved.
              </div>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <a href="/privacy-policy" className="text-base font-medium text-white hover:text-[#fdf88f] transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-and-conditions" className="text-base font-medium text-white hover:text-[#fdf88f] transition-colors">
                  Terms &amp; Conditions
                </a>
                <a href="/child-safety-policy" className="text-base font-medium text-[#fdf88f] underline">
                  Child Safety Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
