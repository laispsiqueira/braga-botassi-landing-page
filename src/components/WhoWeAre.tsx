/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, Globe, Users } from "lucide-react";
import { motion } from "motion/react";

export const WhoWeAre: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="text-brand-secondary" size={24} />,
      title: "Curated Brand Portfolio",
      description: "Our portfolio is intentionally selective. Every fragrance house we represent is chosen for its craftsmanship, market relevance and long-term potential, ensuring every partnership strengthens the overall positioning of our retail experience."
    },
    {
      icon: <Globe className="text-brand-secondary" size={24} />,
      title: "Omnichannel Retail",
      description: "Our retail ecosystem integrates a flagship boutique in Brazil with ecommerce operations serving both Brazil and the United States, creating a seamless customer journey across physical and digital channels."
    },
    {
      icon: <Users className="text-brand-secondary" size={24} />,
      title: "Strategic Partnerships",
      description: "Our expansion strategy is built on disciplined growth, focusing on carefully selected brand partnerships, operational excellence and gradual market development. We believe sustainable expansion creates stronger value for customers, partners and the brands we represent."
    }
  ];

  return (
    <section id="who-we-are" className="relative py-24 md:py-32 bg-brand-bg overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subtle Section Divider line */}
        <div className="w-12 h-[1px] bg-brand-secondary mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Exact Text Presentation */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <motion.h2
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-display text-xs md:text-sm tracking-[0.25em] text-brand-secondary uppercase font-semibold mb-6"
            >
              Who We Are
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-brand-primary leading-tight tracking-[0.05em] mb-8">
                Introducing Exceptional International Fragrances to the Brazilian Market.
              </h3>
            </motion.div>

            {/* Exact user-provided text block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-gray-600 font-sans font-light text-sm md:text-base leading-relaxed tracking-wide"
            >
              <p>
                <strong className="font-medium text-brand-secondary">Braga & Botassi</strong> is a curated fragrance retailer dedicated to introducing exceptional international fragrance houses to the Brazilian market through thoughtful selection, elevated retail experiences and long-term brand partnerships.
              </p>
              <p>
                Our ambition is to become one of Brazil's leading destinations for authentic international perfumery, connecting discerning customers with fragrance houses defined by craftsmanship, authenticity and timeless elegance.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Visual Accent Card and Strategic Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="p-8 bg-brand-surface border border-brand-accent/25 rounded-none relative overflow-hidden shadow-sm"
            >
              {/* Highlight background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/5 rounded-full blur-2xl" />

              <h4 className="font-display text-xs tracking-[0.2em] uppercase text-brand-primary font-bold mb-6 pb-2 border-b border-brand-accent/30">
                Growth Model
              </h4>

              <div className="space-y-6">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="p-2 bg-brand-surface-light rounded-none border border-brand-accent/20 shadow-2xs">
                      {pillar.icon}
                    </div>
                    <div>
                      <h5 className="font-display text-xs tracking-wider uppercase font-semibold text-brand-secondary mb-1">
                        {pillar.title}
                      </h5>
                      <p className="text-xs text-gray-500 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
