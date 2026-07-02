/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Mail, MapPin, ArrowUp, User, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

interface FooterProps {
  onTabChange: (tab: "home" | "brazilian-market" | "why") => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (tab: "home" | "brazilian-market" | "why", sectionId: string) => {
    onTabChange(tab);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const footerLinks = [
    { label: "Who We Are", tab: "home" as const, sectionId: "who-we-are" },
    { label: "Brazilian Market", tab: "brazilian-market" as const, sectionId: "brazilian-market" },
    { label: "Why Braga & Botassi", tab: "why" as const, sectionId: "why-braga-botassi" },
    { label: "Partnership Program", tab: "home" as const, sectionId: "partnership" }
  ];

  return (
    <footer className="bg-brand-surface-light text-gray-800 border-t border-brand-accent/20 py-16 md:py-24 relative overflow-hidden">
      {/* Decorative dark vector grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-accent/30 items-start">
          
          {/* Brand block (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer" onClick={() => handleLinkClick("home", "root")}>
              <Logo size={36} color="#b68a5a" /> {/* Beautiful Gold Logo */}
              <div className="flex flex-col">
                <span className="font-display font-semibold text-lg tracking-widest text-brand-primary uppercase">
                  Braga <span className="font-display font-normal italic lowercase normal-case text-brand-primary mx-0.5">&amp;</span> Botassi
                </span>
                <span className="text-[9px] tracking-[0.25em] text-brand-secondary uppercase font-medium -mt-1">
                  Perfumes
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-600 font-sans font-light leading-relaxed tracking-wider mb-6 max-w-sm">
              Connecting discriminating scent enthusiasts with the world's most authentic, heritage-driven international fragrance houses. Introducing Timeless Scent Journeys to Brazil.
            </p>
          </div>

          {/* Quick links block (Cols 5-7) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-[10px] tracking-widest uppercase text-brand-secondary font-bold mb-6">
              Navigation
            </h4>
            <div className="space-y-4">
              {footerLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.tab, link.sectionId)}
                  className="block text-xs text-gray-600 hover:text-brand-secondary transition-colors duration-300 font-sans font-light tracking-widest uppercase cursor-pointer text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact block (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h4 className="text-[10px] tracking-widest uppercase text-brand-secondary font-bold mb-6">
              Exclusive Contact
            </h4>
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3 text-xs text-gray-600 tracking-wider">
                <User size={14} className="text-brand-secondary shrink-0" />
                <span><strong className="font-medium text-brand-primary">Founder:</strong> Valdirene Botassi</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600 tracking-wider">
                <MapPin size={14} className="text-brand-secondary shrink-0" />
                <span>Curated International Fragrance Retailer | Brazil | United States</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600 tracking-wider">
                <Mail size={14} className="text-brand-secondary shrink-0" />
                <a href="mailto:hello@bragabotassi.com" className="hover:text-brand-secondary transition-colors">
                  hello@bragabotassi.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600 tracking-wider">
                <MessageCircle size={14} className="text-brand-secondary shrink-0" />
                <span>WhatsApp: +1 (857) 312-405</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright section */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-500 tracking-widest uppercase font-light">
          <p>
            © {new Date().getFullYear()} Braga & Botassi. All Rights Reserved.
          </p>
          
          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 hover:text-brand-primary transition-colors mt-6 md:mt-0 font-medium group cursor-pointer"
          >
            Back to Top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
