/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Handshake } from "lucide-react";

export const Partnership: React.FC = () => {
  return (
    <section id="partnership" className="relative py-24 md:py-32 bg-brand-bg scroll-mt-20 overflow-hidden border-t border-brand-accent/10">
      {/* Abstract vector shape backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-primary/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Symmetrical logo/icon at the top */}
        <div className="flex justify-center mb-6">
          <div className="p-2.5 bg-brand-surface border border-brand-accent/20 rounded-full text-brand-secondary shadow-xs">
            <Handshake size={18} />
          </div>
        </div>

        <span className="font-display text-[10px] tracking-[0.3em] text-brand-secondary uppercase font-bold block mb-4">
          Collaborate With Us
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-primary tracking-wide mb-10">
          Our Partnership Philosophy
        </h2>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-700 font-sans font-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto mb-12 text-center"
        >
          <p>
            Braga & Botassi is committed to building long-term relationships with international fragrance houses that value authenticity, craftsmanship and sustainable growth.
          </p>
          <p>
            We believe every brand should be represented with the same level of care invested in its creation. Our role is to protect its positioning while delivering premium retail execution and exceptional customer experiences.
          </p>
          <p>
            As we grow across Brazil and the United States, our ambition is to build partnerships based on trust, transparency and shared long-term success.
          </p>
        </motion.div>

        {/* Premium Checkmarks Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-brand-accent/20 pt-10 max-w-2xl mx-auto"
        >
          {[
            "Authorized Retail Partnership",
            "Brand Development",
            "Omnichannel Retail",
            "Long-Term Collaboration"
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold">
                ✓
              </span>
              <span className="font-sans text-xs text-brand-primary font-medium tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
