'use client';

import React from "react";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-7xl mx-auto">
      {/* Logo and title in one line */}
      <div className="mb-8 flex items-center justify-center">
        <div className="w-14 h-14 mr-3 bg-primary rounded-2xl flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
        <h3 className="text-xl font-medium font-sans gradient-text">TokenRadar Labs</h3>
      </div>
      
      {/* Main headline with gradient */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
        <span className="gradient-text">Real-Time </span>
        <span className="text-white dark:text-black">Crypto</span><br/>
        <span className="text-white dark:text-black">Market Intelligence</span>
      </h1>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-white/80 dark:text-black/80 mb-12 max-w-4xl">
        TokenRadar delivers real-time token price tracking and market insights for your crypto community. 
        Stay ahead with instant alerts and comprehensive market data.
      </p>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16 font-sans">
        <CustomButton 
          className="get-started-btn text-white px-8 py-6 rounded-lg flex items-center transition-all duration-300"
          leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>}
        >
          Start Tracking
        </CustomButton>
        <CustomButton
          className="bg-black text-white dark:bg-white dark:text-black px-8 py-6 rounded-lg flex items-center"
          leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
        >
          View Features
        </CustomButton>
      </div>
      
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {/* Card 1: Live Alerts */}
        <CustomCard variant="transparent" className="text-center p-8 font-sans">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-primary-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            </div>
            <h3 className="text-xl font-semibold text-white dark:text-black mb-2">Live Alerts</h3>
            <p className="text-white">
              Real-time price alerts and market notifications
            </p>
          </div>
        </CustomCard>
        
        {/* Card 2: Market Insights */}
        <CustomCard variant="transparent" className="text-center p-8 font-sans">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-semibold text-white dark:text-black mb-2">Market Insights</h3>
            <p className="text-white">
              Comprehensive market analysis and trends
            </p>
          </div>
        </CustomCard>
        
        {/* Card 3: Community Tools */}
        <CustomCard variant="transparent" className="text-center p-8 font-sans">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-secondary-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="22 12 18 16 14 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-semibold text-white dark:text-black mb-2">Community Tools</h3>
            <p className="text-white">
              Discord bots and community integrations
            </p>
          </div>
        </CustomCard>
      </div>
    </section>
  );
} 