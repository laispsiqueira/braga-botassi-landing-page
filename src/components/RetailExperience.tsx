/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export const RetailExperience: React.FC = () => {
  return (
    <section id="retail-experience" className="relative py-24 md:py-32 bg-brand-bg scroll-mt-20 overflow-hidden">
      {/* Delicate background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#b68a5a03_1px,transparent_1px),linear-gradient(to_bottom,#b68a5a03_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Subtle decorative icon/badge */}
        <div className="flex justify-center mb-6">
          <div className="p-2.5 bg-brand-surface border border-brand-accent/20 rounded-full text-brand-secondary shadow-xs">
            <Sparkles size={18} />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="font-display text-[10px] tracking-[0.3em] text-brand-secondary uppercase font-bold block mb-3">
            Scent & Service
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-primary tracking-wide">
            Retail Experience
          </h2>
        </div>

        {/* Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="bg-brand-surface border border-brand-accent/20 p-8 md:p-12 shadow-sm text-center"
        >
          <p className="text-base md:text-lg text-gray-700 font-sans font-light leading-relaxed tracking-wide mb-6">
            Every customer interaction is designed to reflect the identity of the brands we represent. Rather than transactional sales, we provide a guided fragrance consultation where knowledgeable fragrance consultants help customers discover scents that genuinely fit their preferences, lifestyle and personality.
          </p>
          <p className="text-sm md:text-base text-gray-600 font-sans font-light leading-relaxed tracking-wide">
            Our retail environment combines education, sensory discovery and personalized service, creating an experience that builds trust, strengthens brand perception and encourages long-term customer loyalty.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
