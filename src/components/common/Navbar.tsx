'use client';

import { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  /**
   * Navigation links to display in the navbar
   */
  links?: NavLink[];
}

/**
 * Navbar component for TokenRadar Labs
 * - Uses glassmorphism effect
 * - Responsive navigation
 * - Includes logo, nav links, theme toggle, and CTA
 * - Navigation links are dynamic via the `links` prop
 */
export default function Navbar({
  links = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
}: NavbarProps) {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize theme from localStorage and system preference on component mount
  useEffect(() => {
    // Check if theme preference is saved in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Update document with current theme
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Handle scroll to section when clicking on anchor links
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
    setMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between relative">
          {/* Logo and Brand (flex-1 to push right content) */}
          <div className="flex items-center space-x-3 flex-1 min-w-0">
            <img src="/Icon.png" alt="Logo" className="w-10 h-10 rounded-lg flex-shrink-0" />
            <div className="font-display font-bold text-2xl gradient-text truncate">TokenRadar Labs</div>
          </div>
          {/* Nav Links (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              link.href.startsWith('#') ? (
                <button
                  key={link.label}
                  className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right side: nav links (desktop), actions, hamburger (mobile) */}
          <div className="flex items-center space-x-4">
            {/* Nav Links (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                link.href.startsWith('#') ? (
                  <button
                    key={link.label}
                    className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Actions: Theme toggle & CTA */}
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center text-white gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-blue-400 h-10 w-10 rounded-full hover:bg-white/10 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun h-5 w-5">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon h-5 w-5">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
            <CustomButton
              className="get-started-btn rounded-md h-10 px-4 py-2 cursor-pointer"
            >
              Get Started
            </CustomButton>

            {/* Hamburger menu button (mobile only) */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
              type="button"
            >
              {mobileMenuOpen ? (
                // Close icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/95 shadow-lg rounded-b-lg flex flex-col items-start px-6 py-4 space-y-4 md:hidden animate-fade-in z-40">
              {links.map((link) => (
                link.href.startsWith('#') ? (
                  <button
                    key={link.label}
                    className="text-gray-900 dark:text-white text-lg font-medium hover:text-blue-500 transition-colors cursor-pointer w-full text-left"
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-900 dark:text-white text-lg font-medium hover:text-blue-500 transition-colors cursor-pointer w-full block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
} 