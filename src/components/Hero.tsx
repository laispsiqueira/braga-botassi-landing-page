/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-brand-bg pt-16 overflow-hidden">
      {/* Decorative luxury abstract backdrops */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-brand-secondary/5 blur-3xl pointer-events-none" />
      
      {/* Ambient background grid pattern (very faint) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c6bcba10_1px,transparent_1px),linear-gradient(to_bottom,#c6bcba10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10 w-full">
        {/* Centered Typography Content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-6 text-brand-secondary"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] font-semibold uppercase">
              Braga & Botassi • Haute Perfumery Hub
            </span>
          </motion.div>

          {/* Main Display Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.08em] text-brand-primary leading-[1.1] mb-6"
          >
            THE ART <br />
            <span className="font-normal text-brand-secondary italic">OF HIGH-END</span> <br />
            FRAGRANCE.
          </motion.h1>

          {/* Luxury Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-gray-600 font-sans font-light text-base md:text-lg tracking-wide leading-relaxed max-w-xl mb-10"
          >
            Introducing extraordinary global scent designers to the sophisticated Brazilian market. Understated luxury, meticulously curated.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <button
              onClick={() => {
                const el = document.getElementById("who-we-are");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-brand-primary hover:bg-brand-primary/90 text-white text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 shadow-sm cursor-pointer"
            >
              Explore Our Story
            </button>
            
            <button
              onClick={() => {
                const el = document.getElementById("partnership");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border border-brand-primary/20 text-brand-primary hover:border-brand-secondary hover:text-brand-secondary text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 bg-transparent cursor-pointer"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
