/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";

interface NavbarProps {
  activeTab: "home" | "brazilian-market" | "why";
  onTabChange: (tab: "home" | "brazilian-market" | "why") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (tab: "home" | "brazilian-market" | "why", sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onTabChange(tab);

    if (sectionId) {
      // Allow a tiny delay for tab render before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Who We Are", tab: "home" as const, sectionId: "who-we-are" },
    { label: "Brazilian Market", tab: "brazilian-market" as const },
    { label: "Why Braga & Botassi", tab: "why" as const },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-accent/20 py-3 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Group */}
          <div
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Logo
              size={34}
              color="#b68a5a"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg md:text-xl tracking-widest text-brand-primary uppercase">
                Braga <span className="font-display font-normal italic lowercase normal-case text-brand-primary mx-0.5">&amp;</span> Botassi
              </span>
              <span className="text-[10px] tracking-[0.25em] text-brand-secondary uppercase font-medium -mt-1">
                Perfumes
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isActive = activeTab === link.tab;
              return (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.tab, link.sectionId)}
                  className={`text-xs tracking-[0.18em] uppercase transition-all duration-300 font-medium cursor-pointer relative py-1 ${
                    isActive ? "text-brand-secondary" : "text-gray-600 hover:text-brand-secondary"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-secondary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleLinkClick("home", "partnership")}
              className="group flex items-center gap-2 px-5 py-2 border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-500 text-xs tracking-[0.18em] uppercase font-semibold rounded-none cursor-pointer"
            >
              Get in Touch
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-brand-bg pt-24 px-6 md:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 mt-6">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.tab, link.sectionId)}
                  className={`text-left py-2 border-b border-brand-accent/20 text-lg font-display tracking-widest uppercase transition-colors ${
                    activeTab === link.tab ? "text-brand-secondary font-semibold" : "text-brand-primary hover:text-brand-secondary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mb-12 flex flex-col gap-6">
              <button
                onClick={() => handleLinkClick("home", "partnership")}
                className="w-full text-center py-4 bg-brand-primary text-white text-xs tracking-[0.2em] uppercase font-bold"
              >
                Partner with us
              </button>
              
              <div className="flex justify-center items-center gap-2">
                <Logo size={24} color="#b68a5a" />
                <span className="font-display text-sm tracking-widest text-brand-primary uppercase">
                  Braga <span className="font-display font-normal italic lowercase normal-case text-brand-primary mx-0.5">&amp;</span> Botassi
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
