/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhoWeAre } from "./components/WhoWeAre";
import { OurVision } from "./components/OurVision";
import { RetailExperience } from "./components/RetailExperience";
import { BrazilianMarket } from "./components/BrazilianMarket";
import { WhyBragaBotassi } from "./components/WhyBragaBotassi";
import { Partnership } from "./components/Partnership";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "brazilian-market" | "why">("home");

  // Scroll to top immediately when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-brand-bg text-gray-800 font-sans antialiased selection:bg-brand-secondary/20 selection:text-brand-primary">
      {/* 1. Top Minimalist & Blur Sticky Navbar with Active Tab props */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="relative">
        {activeTab === "home" && (
          <>
            {/* 2. Sophisticated Hero Showcase */}
            <Hero />

            {/* 3. "Who We Are" Exact Presentation Block (includes Growth Model) */}
            <WhoWeAre />

            {/* 3.5. "Our Vision" Section */}
            <OurVision />

            {/* 3.6. "Retail Experience" Section */}
            <RetailExperience />

            {/* 3.7. "Partnership Philosophy" Section */}
            <Partnership />
          </>
        )}

        {activeTab === "brazilian-market" && (
          <div className="pt-24 md:pt-32">
            {/* 3.8. "Brazilian Market" Section */}
            <BrazilianMarket />
          </div>
        )}

        {activeTab === "why" && (
          <div className="pt-24 md:pt-32">
            {/* 3.9. "Why Braga & Botassi" Section */}
            <WhyBragaBotassi />
          </div>
        )}
      </main>

      {/* 5. Classy Editorial Footer */}
      <Footer onTabChange={setActiveTab} />
    </div>
  );
}
