/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Scale } from "lucide-react";

export const WhyBragaBotassi: React.FC = () => {
  const comparisonRows = [
    {
      conventional: "Extensive portfolios",
      braga: "Selective curation",
    },
    {
      conventional: "Sales-driven",
      braga: "Experience-driven",
    },
    {
      conventional: "Generic presentation",
      braga: "Premium brand positioning",
    },
    {
      conventional: "Short-term campaigns",
      braga: "Long-term brand development",
    },
    {
      conventional: "Transactional relationship",
      braga: "Strategic partnership",
    },
  ];

  return (
    <section id="why-braga-botassi" className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-accent/20 scroll-mt-20 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b7b6c02_1px,transparent_1px),linear-gradient(to_bottom,#6b7b6c02_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <span className="p-2 bg-brand-bg border border-brand-accent/20 rounded-full text-brand-secondary shadow-2xs">
              <Scale size={16} />
            </span>
          </div>
          <span className="font-display text-[10px] tracking-[0.3em] text-brand-secondary uppercase font-bold block mb-3">
            A New Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-primary tracking-wide">
            Why Braga <span className="font-display font-normal italic lowercase normal-case text-brand-primary">&amp;</span> Botassi
          </h2>
          <div className="w-8 h-[1px] bg-brand-secondary mx-auto mt-6" />
        </div>

        {/* Comparison Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full border border-brand-accent/25 bg-brand-bg/50 backdrop-blur-xs rounded-xs overflow-hidden shadow-xs mb-16"
        >
          {/* Table Headers */}
          <div className="grid grid-cols-2 border-b border-brand-accent/30 bg-brand-surface">
            <div className="p-6 md:p-8 text-center border-r border-brand-accent/25">
              <span className="font-display text-base md:text-xl font-medium text-gray-700 tracking-wide">
                Conventional Retail
              </span>
            </div>
            <div className="p-6 md:p-8 text-center">
              <span className="font-display text-base md:text-xl font-medium text-brand-primary tracking-wide">
                Braga <span className="font-display font-normal italic lowercase normal-case text-brand-primary">&amp;</span> Botassi
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-brand-accent/20 bg-brand-surface/30">
            {comparisonRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-2 group hover:bg-brand-surface/80 transition-all duration-300"
              >
                {/* Conventional Retail Column */}
                <div className="p-5 md:p-6 text-center border-r border-brand-accent/20 flex items-center justify-center">
                  <span className="font-sans text-xs md:text-sm text-gray-500 font-light group-hover:text-gray-700 transition-colors duration-300">
                    {row.conventional}
                  </span>
                </div>
                {/* Braga & Botassi Column */}
                <div className="p-5 md:p-6 text-center flex items-center justify-center bg-brand-primary/[0.01] group-hover:bg-brand-primary/[0.03] transition-all duration-300">
                  <span className="font-sans text-xs md:text-sm text-brand-primary font-medium tracking-wide">
                    {row.braga}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-center border-t border-brand-accent/20 pt-10"
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-sans font-light leading-relaxed tracking-wide max-w-3xl mx-auto">
            We believe exceptional brands deserve exceptional representation. Our commitment is to build long-term brand value through premium retail execution, elevated customer experiences and trusted partnerships.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
