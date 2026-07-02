/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";

export const OurVision: React.FC = () => {
  return (
    <section id="our-vision" className="relative py-24 md:py-32 bg-brand-surface border-y border-brand-accent/20 scroll-mt-20 overflow-hidden">
      {/* Delicate background accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b7b6c03_1px,transparent_1px),linear-gradient(to_bottom,#6b7b6c03_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Section Divider */}
        <div className="w-12 h-[1px] bg-brand-secondary mx-auto mb-8" />

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-xs md:text-sm tracking-[0.25em] text-brand-secondary uppercase font-semibold mb-10"
        >
          Our Vision
        </motion.h2>

        {/* Large Signature Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-12"
        >
          <span className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-brand-primary font-light leading-relaxed block max-w-2xl mx-auto">
            “Every great collection begins with a thoughtful choice.”
          </span>
        </motion.div>

        {/* Vision Narrative Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-6 text-gray-600 font-sans font-light text-sm md:text-base leading-relaxed tracking-wide max-w-2xl mx-auto text-center"
        >
          <p>
            We believe that true luxury is never defined by excess. It is found in thoughtful choices, quiet confidence and experiences that leave a lasting impression.
          </p>
          <p>
            Braga & Botassi was created with this philosophy at its core. Every brand we introduce, every product we curate and every space we design reflects our commitment to timeless elegance, authenticity and purposeful growth.
          </p>
          <p>
            As we expand across Brazil and the United States, our goal remains unchanged: to build a fragrance destination recognized not by the number of products it offers, but by the quality of every experience it creates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
