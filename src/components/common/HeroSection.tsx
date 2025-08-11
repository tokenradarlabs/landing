'use client';

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";

export default function HeroSection() {
  const [statsVisible] = useState(true);
  
  const marketStats = [
    { label: "Market Cap", value: "$2.1T", change: "+5.2%" },
    { label: "24h Volume", value: "$142B", change: "+12.7%" },
    { label: "BTC Dominance", value: "48.7%", change: "-0.8%" },
    { label: "Active Coins", value: "12,856", change: "+124" }
  ];
  
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#0A0F23] dark:via-[#0A0F23] dark:to-[#0A0F23] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="flex flex-col items-center justify-center py-16 pt-32 px-4 text-center max-w-7xl mx-auto relative z-10">
        {/* Logo and title in one line */}
        <div className="mb-8 flex items-center justify-center">
          <Image src="/Icon.png" alt="" aria-hidden width={60} height={60} className="w-15 h-15 rounded-lg" />
          <h3 className="text-xl font-medium font-sans bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">TokenRadar Labs</h3>
        </div>
        
        {/* Main headline with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Real-Time </span>
          <span className="text-slate-800 dark:text-white">Crypto</span><br/>
          <span className="text-slate-800 dark:text-white">Market Intelligence</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl">
          TokenRadar delivers real-time token price tracking and market insights for your crypto community. 
          Stay ahead with instant alerts and comprehensive market data.
        </p>
        
        {/* Live Market Stats */}
        {statsVisible && (
          <div className="w-full max-w-4xl mb-12 p-4 bg-white dark:bg-slate-800/40 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">LIVE MARKET OVERVIEW</h3>
              <div className="flex items-center space-x-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-500">LIVE</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {marketStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="text-xl font-bold text-slate-800 dark:text-white">{stat.value}</p>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 font-sans">
          <CustomButton 
            className="get-started-btn text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-6 rounded-lg flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>}
          >
            Start Tracking
          </CustomButton>
          <CustomButton
            className="bg-slate-800 text-white dark:bg-white dark:text-slate-900 px-8 py-6 rounded-lg flex items-center border border-slate-200 dark:border-slate-700 hover:bg-slate-900 dark:hover:bg-slate-100 transition-all duration-300 shadow-md hover:shadow-lg"
            leftIcon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
          >
            View Features
          </CustomButton>
        </div>
        
        {/* Trusted By Section */}
        <div className="w-full mb-16">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">TRUSTED BY TOP CRYPTO COMMUNITIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 0L25.9904 12L14 24L2.00962 12L14 0Z" fill="#6E7CE5"/>
                <path d="M47.316 17.98V10.94H48.936V17.96C48.936 20.72 47.236 22.22 44.576 22.22C41.916 22.22 40.236 20.72 40.236 17.98V10.94H41.856V17.96C41.856 19.74 42.776 20.82 44.576 20.82C46.376 20.82 47.316 19.74 47.316 17.98Z" fill="#606683"/>
                <path d="M51.6539 22V10.94H53.2739V20.68H58.1739V22H51.6539Z" fill="#606683"/>
                <path d="M62.5672 22L58.5872 10.94H60.3072L63.4672 20.14L66.6672 10.94H68.3672L64.3872 22H62.5672Z" fill="#606683"/>
                <path d="M73.1003 22.22C71.1803 22.22 69.7003 21.48 68.8203 20.02L70.0603 19.16C70.6603 20.26 71.7403 20.84 73.1803 20.84C74.7803 20.84 75.6803 20.12 75.6803 19.04C75.6803 18.14 75.0403 17.58 73.3603 17.22L72.0403 16.94C69.8603 16.48 68.9003 15.38 68.9003 13.78C68.9003 11.96 70.4203 10.72 72.7003 10.72C74.4603 10.72 75.7803 11.36 76.5603 12.52L75.3603 13.36C74.7603 12.46 73.8203 12.1 72.6403 12.1C71.2203 12.1 70.4603 12.78 70.4603 13.7C70.4603 14.56 71.0403 15.04 72.6403 15.38L73.9603 15.66C76.2403 16.14 77.2403 17.2 77.2403 18.92C77.2403 20.9 75.6403 22.22 73.1003 22.22Z" fill="#606683"/>
                <path d="M83.0367 22.22C80.1567 22.22 78.1367 20.14 78.1367 16.98V16.94C78.1367 13.78 80.1967 11.68 83.0567 11.68C85.9567 11.68 87.8967 13.7 87.8967 16.94C87.8967 20.14 85.9367 22.22 83.0367 22.22ZM83.0367 20.84C84.9967 20.84 86.2967 19.4 86.2967 16.96V16.92C86.2967 14.5 84.9767 13.06 83.0367 13.06C81.0967 13.06 79.7567 14.48 79.7567 16.92V16.96C79.7567 19.38 81.0767 20.84 83.0367 20.84Z" fill="#606683"/>
                <path d="M90.2236 22V10.94H91.8436V14.6H96.9036V10.94H98.5236V22H96.9036V15.92H91.8436V22H90.2236Z" fill="#606683"/>
                <path d="M105.274 22V10.94H106.874V15.9H107.014L111.994 10.94H113.954L109.154 15.82L114.094 22H112.174L108.094 16.82L106.874 18.02V22H105.274Z" fill="#606683"/>
              </svg>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.6367 16.7368L37.6013 20.7723L35.5836 18.7546L39.6191 14.7192L35.5836 10.6837L37.6013 8.66602L41.6367 12.7015L45.6722 8.66602L47.6899 10.6837L43.6544 14.7192L47.6899 18.7546L45.6722 20.7723L41.6367 16.7368Z" fill="#5865F2"/>
                <path d="M13.7281 6.80469C17.8289 6.80469 21.1502 10.1261 21.1502 14.2268C21.1502 18.3276 17.8289 21.649 13.7281 21.649C9.62736 21.649 6.30597 18.3276 6.30597 14.2268C6.30597 10.1261 9.62736 6.80469 13.7281 6.80469ZM24.7781 14.2268C24.7781 8.11914 19.8358 3.17676 13.7281 3.17676C7.62042 3.17676 2.67804 8.11914 2.67804 14.2268C2.67804 20.3345 7.62042 25.2769 13.7281 25.2769C19.8358 25.2769 24.7781 20.3345 24.7781 14.2268Z" fill="#5865F2"/>
                <path d="M65.3859 14.2822C65.3859 18.6414 62.3961 21.8402 57.6797 21.8402C52.9633 21.8402 49.9711 18.6414 49.9711 14.2822C49.9711 9.92304 52.963 6.7168 57.6795 6.7168C62.3959 6.7168 65.3859 9.92276 65.3859 14.2822ZM57.6795 19.1908C60.5234 19.1908 62.3461 17.1772 62.3461 14.2822C62.3461 11.3872 60.5234 9.36621 57.6795 9.36621C54.8355 9.36621 53.0107 11.3872 53.0107 14.2822C53.0107 17.1772 54.8355 19.1908 57.6795 19.1908Z" fill="#606683"/>
                <path d="M75.2559 21.6399V15.0684C75.2559 11.4102 77.2693 9.38403 80.9274 9.38403C84.5856 9.38403 86.599 11.4102 86.599 15.0684V21.6399H83.5586V15.0684C83.5586 13.1328 82.6035 12.1055 80.9274 12.1055C79.2513 12.1055 78.2935 13.1328 78.2935 15.0684V21.6399H75.2559Z" fill="#606683"/>
                <path d="M112.5 9.58398L107.979 21.6396H104.771L100.25 9.58398H103.577L106.375 17.9805L109.173 9.58398H112.5Z" fill="#606683"/>
                <path d="M70.0894 21.6396V9.58398H73.1294V21.6396H70.0894Z" fill="#606683"/>
                <path d="M93.0879 21.6396V9.58398H96.1279V21.6396H93.0879Z" fill="#606683"/>
              </svg>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300">
              <svg width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0001 4L20.7847 17.5L14.0001 24L7.21545 17.5L14.0001 4Z" fill="#1EBEA5"/>
                <path d="M44.2617 19.376C43.7004 20.528 42.5004 21.284 40.9164 21.284C38.5804 21.284 36.9004 19.64 36.9004 16.888V16.86C36.9004 14.108 38.6084 12.52 40.9164 12.52C42.4724 12.52 43.6584 13.248 44.2477 14.4H46.0677C45.3124 12.352 43.3964 10.96 40.9164 10.96C37.5324 10.96 35.1964 13.416 35.1964 16.888V16.916C35.1964 20.388 37.5044 22.844 40.9164 22.844C43.3964 22.844 45.3124 21.452 46.0957 19.376H44.2617Z" fill="#606683"/>
                <path d="M48.1359 22.704H49.7559V16.776C49.7559 14.36 51.0399 12.772 53.1119 12.772C55.1839 12.772 56.3559 14.36 56.3559 16.776V22.704H57.9759V16.664C57.9759 13.36 56.0319 11.324 53.1399 11.324C51.5279 11.324 50.3839 11.94 49.7559 12.772V11.52H48.1359V22.704Z" fill="#606683"/>
                <path d="M70.1588 22.704V11.52H68.5388V17.448C68.5388 19.864 67.2268 21.452 65.1548 21.452C63.0828 21.452 61.9388 19.864 61.9388 17.448V11.52H60.3188V17.56C60.3188 20.864 62.2348 22.9 65.1548 22.9C66.7668 22.9 67.9108 22.284 68.5388 21.452V22.704H70.1588Z" fill="#606683"/>
                <path d="M72.7289 22.704H74.3489V16.776C74.3489 14.36 75.6329 12.772 77.7049 12.772C79.7769 12.772 80.9489 14.36 80.9489 16.776V22.704H82.5689V16.664C82.5689 13.36 80.6249 11.324 77.7329 11.324C76.1209 11.324 74.9769 11.94 74.3489 12.772V7.56H72.7289V22.704Z" fill="#606683"/>
                <path d="M93.3332 22.704V21.424C92.7052 22.256 91.5612 22.9 89.9492 22.9C87.0292 22.9 85.1132 20.864 85.1132 17.56V11.52H86.7332V17.448C86.7332 19.864 87.8772 21.452 89.9492 21.452C92.0212 21.452 93.3332 19.864 93.3332 17.448V11.52H94.9532V22.704H93.3332Z" fill="#606683"/>
                <path d="M97.4934 22.704H99.1134V7.56H97.4934V22.704Z" fill="#606683"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1: Live Alerts */}
          <CustomCard variant="transparent" className="text-center p-8 font-sans bg-white dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-blue-500 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Live Alerts</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Real-time price alerts and market notifications
              </p>
              <div className="text-blue-500 dark:text-blue-400 text-sm font-medium flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </CustomCard>
          
          {/* Card 2: Market Insights */}
          <CustomCard variant="transparent" className="text-center p-8 font-sans bg-white dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Market Insights</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Comprehensive market analysis and trends
              </p>
              <div className="text-cyan-500 dark:text-cyan-400 text-sm font-medium flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </CustomCard>
          
          {/* Card 3: Community Tools */}
          <CustomCard variant="transparent" className="text-center p-8 font-sans bg-white dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex flex-col items-center">
              <div className="mb-4 text-purple-500 bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="22 12 18 16 14 12"></polyline></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">Community Tools</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Discord bots and community integrations
              </p>
              <div className="text-purple-500 dark:text-purple-400 text-sm font-medium flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </CustomCard>
        </div>
        
        {/* Demo Stats Visual */}
        <div className="w-full mt-16 relative">
          <div className="absolute -top-12 left-0 w-full h-12 bg-gradient-to-b from-transparent to-white/5 dark:to-slate-900/20"></div>
          <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 overflow-hidden relative">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-white font-medium text-lg">Market Overview</h3>
                <p className="text-slate-400 text-sm">Live data visualization</p>
              </div>
              <div className="flex space-x-2" role="tablist" aria-label="Time range">
                <button className="text-xs bg-slate-800 hover:bg-slate-700 text-white rounded-md px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" role="tab" aria-selected={false}>24H</button>
                <button className="text-xs bg-blue-600 text-white rounded-md px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" role="tab" aria-selected={true}>7D</button>
                <button className="text-xs bg-slate-800 hover:bg-slate-700 text-white rounded-md px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" role="tab" aria-selected={false}>30D</button>
              </div>
            </div>
            <div className="flex justify-between h-32 relative">
              {/* Simulated Chart */}
              <svg viewBox="0 0 400 100" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,50 C20,40 40,80 60,70 C80,60 100,20 120,30 C140,40 160,90 180,80 C200,70 220,40 240,50 C260,60 280,30 300,20 C320,10 340,30 360,40 C380,50 400,30 400,40" 
                      stroke="#3B82F6" strokeWidth="2" fill="none" className="animate-pulse" />
                <path d="M0,50 C20,40 40,80 60,70 C80,60 100,20 120,30 C140,40 160,90 180,80 C200,70 220,40 240,50 C260,60 280,30 300,20 C320,10 340,30 360,40 C380,50 400,30 400,40 L400,100 L0,100 Z" 
                      fill="url(#chartGradient)" opacity="0.5" />
              </svg>
              
              {/* Data points */}
              <div className="absolute top-3 left-[10%] bg-blue-500 w-2 h-2 rounded-full animate-ping"></div>
              <div className="absolute top-[70%] left-[30%] bg-blue-500 w-2 h-2 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-[20%] left-[60%] bg-blue-500 w-2 h-2 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-[40%] left-[85%] bg-blue-500 w-2 h-2 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="text-center">
                <p className="text-slate-400 text-xs">BTC</p>
                <p className="text-white font-semibold">$41,234</p>
                <p className="text-green-500 text-xs">+2.4%</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-xs">ETH</p>
                <p className="text-white font-semibold">$2,789</p>
                <p className="text-green-500 text-xs">+3.8%</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-xs">SOL</p>
                <p className="text-white font-semibold">$98.45</p>
                <p className="text-green-500 text-xs">+5.2%</p>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-xs">DOGE</p>
                <p className="text-white font-semibold">$0.097</p>
                <p className="text-red-500 text-xs">-1.3%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 