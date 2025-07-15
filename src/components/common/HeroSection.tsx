'use client';

import React from "react";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-7xl mx-auto bg-white dark:bg-zinc-950">
      {/* Logo and title in one line */}
      <div className="mb-8 flex items-center justify-center">
        <div className="w-14 h-14 mr-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
        <h3 className="text-xl font-medium font-sans bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">TokenRadar Labs</h3>
      </div>
      
      {/* Main headline with gradient */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Real-Time </span>
        <span className="text-slate-800 dark:text-white">Crypto</span><br/>
        <span className="text-slate-800 dark:text-white">Market Intelligence</span>
      </h1>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl">
        TokenRadar delivers real-time token price tracking and market insights for your crypto community. 
        Stay ahead with instant alerts and comprehensive market data.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16 font-sans">
        <CustomButton 
          className="get-started-btn text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-6 rounded-lg flex items-center transition-all duration-300"
          leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>}
        >
          Start Tracking
        </CustomButton>
        <CustomButton
          className="bg-slate-800 text-white dark:bg-white dark:text-slate-900 px-8 py-6 rounded-lg flex items-center border border-slate-200 dark:border-slate-700"
          leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
        >
          View Features
        </CustomButton>
      </div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Card 1: Live Alerts */}
        <CustomCard variant="transparent" className="text-center p-8 font-sans bg-white dark:bg-white/10">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Live Alerts</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Real-time price alerts and market notifications
            </p>
          </div>
        </CustomCard>
        
        {/* Card 2: Market Insights */}
        <CustomCard variant="transparent" className="text-center p-8 font-sans bg-white dark:bg-white/10">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Market Insights</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Comprehensive market analysis and trends
            </p>
          </div>
        </CustomCard>
        
        {/* Card 3: Community Tools */}
        <CustomCard variant="transparent" className="text-center p-8 font-sans bg-white dark:bg-white/10">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-purple-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="22 12 18 16 14 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Community Tools</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Discord bots and community integrations
            </p>
          </div>
        </CustomCard>
      </div>
    </section>
  );
} 