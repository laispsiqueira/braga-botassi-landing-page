/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { TrendingUp } from "lucide-react";

export const BrazilianMarket: React.FC = () => {
  const points = [
    {
      num: "01",
      title: "World's Second Largest Fragrance Market",
      desc: "Brazil is the world's second-largest fragrance market, generating approximately R$18 billion annually and representing one of the most important opportunities for premium fragrance brands worldwide.",
    },
    {
      num: "02",
      title: "Rapid Growth of Middle Eastern Fragrances",
      desc: "Middle Eastern fragrance houses have become one of the fastest-growing categories in Brazil, reflecting a structural shift in consumer demand rather than a temporary trend, with the number of officially imported brands increasing by 89% between Q1 2025 and Q1 2026.",
    },
    {
      num: "03",
      title: "Consumer Behavior is Changing",
      desc: "Brazilian consumers are moving beyond mass-market fragrances in search of authenticity, long-lasting performance and unique olfactory identities. Premium, niche and Middle Eastern fragrances are leading this transformation.",
    },
    {
      num: "04",
      title: "Why It Matters",
      desc: "Brazil's evolving fragrance landscape creates an ideal opportunity for international fragrance houses seeking thoughtful retail representation, sustainable growth and long-term market development.",
    },
  ];

  return (
    <section id="brazilian-market" className="relative py-24 md:py-32 bg-brand-surface-light border-y border-brand-accent/20 scroll-mt-20 overflow-hidden">
      {/* Decorative clean background mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b7b6c02_1px,transparent_1px),linear-gradient(to_bottom,#6b7b6c02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex justify-center mb-4">
            <span className="p-2 bg-brand-surface border border-brand-accent/20 rounded-full text-brand-secondary shadow-2xs">
              <TrendingUp size={16} />
            </span>
          </div>
          <span className="font-display text-[10px] tracking-[0.3em] text-brand-secondary uppercase font-bold block mb-3">
            Strategic Insights
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-brand-primary tracking-wide">
            Brazilian Market
          </h2>
          <div className="w-8 h-[1px] bg-brand-secondary mx-auto mt-6" />
        </div>

        {/* 4-Column Grid exactly representing the image's layout and style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {points.map((point, index) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col text-left group"
            >
              {/* Number Index Indicator */}
              <span className="font-display text-3xl md:text-4xl font-light text-brand-secondary/40 mb-4 block group-hover:text-brand-secondary transition-colors duration-300">
                {point.num}
              </span>

              {/* Title */}
              <h3 className="font-display text-lg md:text-xl font-normal text-brand-primary leading-tight tracking-wide mb-4 min-h-[56px] flex items-end">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-sans font-light text-xs md:text-sm leading-relaxed tracking-wide">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
