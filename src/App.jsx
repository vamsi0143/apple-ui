import React from "react";
import Navbar from "./components/Navbar";
import PromoBanner from "./components/PromoBanner";
import Hero from "./components/Hero";
import GuidedTour from "./components/GuidedTour";
import DualPromo from "./components/DualPromo";
import ProductPicker from "./components/ProductPicker";
import ComparisonTable from "./components/ComparisonTable";
import SavingsSection from "./components/SavingsSection";
import WhatMakesIphone from "./components/WhatMakesIphone";
import ServicesGrid from "./components/ServicesGrid";
import SwitchAndAppleOne from "./components/SwitchAndAppleOne";
import AccessoriesPromo from "./components/AccessoriesPromo";
import WhyApplePromo from "./components/WhyApplePromo";
import FitnessGiftResearch from "./components/FitnessGiftResearch";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <PromoBanner />
      <Hero />
      <DualPromo />
      <GuidedTour />
      <ProductPicker />
      <ComparisonTable />
      <SavingsSection />
      <WhyApplePromo />
      <AccessoriesPromo />
      <WhatMakesIphone />
      <SwitchAndAppleOne />
      <ServicesGrid />
      <FitnessGiftResearch />
      <SiteFooter />
    </div>
  );
}
