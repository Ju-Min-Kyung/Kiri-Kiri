"use client";

import BackgroundPattern from "./ui/MainPage/BackgroundPattern";
import CTAButtons from "./ui/MainPage/CTAButtons";
import Features from "./ui/MainPage/Features";
import Footer from "./ui/MainPage/Footer";
import Header from "./ui/MainPage/Header";
import Hero from "./ui/MainPage/Hero";

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <BackgroundPattern />
      <Header />
      <main className="flex-1 flex flex-col justify-start items-center text-center px-4 pt-12 z-10">
        <Hero />
        <CTAButtons />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
