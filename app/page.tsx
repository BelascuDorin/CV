"use client";

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AIChat from "./components/AIChat";
import InfoCards from "./components/InfoCards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <HeroSection />
        <AIChat />
        <InfoCards />
      </main>

      <Footer />
    </div>
  );
}
