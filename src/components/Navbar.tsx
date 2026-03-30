"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "PROTEX 소개", href: "#about" },
  { name: "무진동 특수차", href: "#technology" },
  { name: "서비스 영역", href: "#services" },
  { name: "운송 사례", href: "#portfolio" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-outfit font-bold text-xl">P</span>
          </div>
          <span
            className={cn(
              "font-outfit font-bold text-2xl tracking-tighter",
              isScrolled ? "text-primary-navy" : "text-white"
            )}
          >
            PROTEX
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary-orange",
                isScrolled ? "text-gray-700" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95",
              isScrolled
                ? "bg-primary-navy text-white hover:bg-blue-900"
                : "bg-primary-orange text-white hover:bg-orange-600"
            )}
          >
            견적 문의
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary-navy" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary-navy" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-primary-navy z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-transform duration-500",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-bold hover:text-primary-orange transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="bg-primary-orange text-white px-8 py-3 rounded-full text-xl font-bold"
        >
          견적 문의
        </Link>
        <div className="absolute bottom-10 flex items-center text-white/60 space-x-2">
          <Phone size={18} />
          <span>1588-0000</span>
        </div>
      </div>
    </nav>
  );
}
