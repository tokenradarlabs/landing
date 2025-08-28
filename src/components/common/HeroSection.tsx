"use client";

import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";

export default function HeroSection() {
  const [statsVisible] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);

  function handleClick() {
    setShowEmoji(prev => !prev); 
  }

  const marketStats = [
    { label: "Market Cap", value: "$2.1T", change: "+5.2%" },
    { label: "24h Volume", value: "$142B", change: "+12.7%" },
    { label: "BTC Dominance", value: "48.7%", change: "-0.8%" },
    { label: "Active Coins", value: "12,856", change: "+124" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#0A0F23] dark:via-[#0A0F23] dark:to-[#0A0F23] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -right-32 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center py-16 pt-32 px-4 text-center max-w-7xl mx-auto relative z-10">
        {/* Logo and title in one line */}
        <div className="mb-8 flex items-center justify-center">
          <Image
            src="/Icon.png"
            alt=""
            aria-hidden
            width={60}
            height={60}
            className="w-15 h-15 rounded-lg"
          />
          <h3 className="text-xl font-medium font-sans bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            TokenRadar Labs
          </h3>
        </div>

        {/* Main headline with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
          {/* "Real-Time" text + emoji right side */}
          <span className="inline-flex items-center mr-6" onClick={handleClick}>
            <span className="animate-gradient-move bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-extrabold cursor-pointer transition-all duration-200">
              Real-Time
            </span>
            {/* Emoji right, animated, vertically centered */}
            {showEmoji && (
              <span className="ml-3 text-5xl animate-bounce drop-shadow pointer-events-none">
                👍
              </span>
            )}
          </span>
          <span className="text-slate-800 dark:text-white">Crypto</span>
          <br />
          <span className="text-slate-800 dark:text-white">
            Market Intelligence
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-4xl">
          TokenRadar delivers real-time token price tracking and market insights
          for your crypto community. Stay ahead with instant alerts and
          comprehensive market data.
        </p>

        {/* Live Market Stats */}
        {statsVisible && (
          <div className="w-full max-w-4xl mb-12 p-4 bg-white dark:bg-slate-800/40 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">
                LIVE MARKET OVERVIEW
              </h3>
              <div className="flex items-center space-x-1">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-500">LIVE</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {marketStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center p-2">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                  <p className="text-xl font-bold text-slate-800 dark:text-white">
                    {stat.value}
                  </p>
                  <p
                    className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                  >
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
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            }
          >
            Start Tracking
          </CustomButton>
          <CustomButton
            className="bg-slate-800 text-white dark:bg-white dark:text-slate-900 px-8 py-6 rounded-lg flex items-center border border-slate-200 dark:border-slate-700 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5  hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:border-transparent"
            leftIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="8" rx="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            }
          >
            View Features
          </CustomButton>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1: Live Alerts */}
          <CustomCard
            variant="transparent"
            className="text-center p-8 font-sans bg-white dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 text-blue-500 bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Live Alerts
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Real-time price alerts and market notifications
              </p>
              <div className="text-blue-500 dark:text-blue-400 text-sm font-medium flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </CustomCard>

          {/* Card 2: Market Insights */}
          <CustomCard
            variant="transparent"
            className="text-center p-8 font-sans bg-white dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Market Insights
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Comprehensive market analysis and trends
              </p>
              <div className="text-cyan-500 dark:text-cyan-400 text-sm font-medium flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </CustomCard>

          {/* Card 3: Community Tools */}
          <CustomCard
            variant="transparent"
            className="text-center p-8 font-sans bg-white dark:bg-white/10 border border-slate-200/70 dark:border-slate-700/70 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex flex-col items-center">
              <div className="mb-4 text-purple-500 bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full group-hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <polyline points="22 12 18 16 14 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                Community Tools
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Discord bots and community integrations
              </p>
              <div className="text-purple-500 dark:text-purple-400 text-sm font-medium flex items-center mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
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
                <h3 className="text-white font-medium text-lg">
                  Market Overview
                </h3>
                <p className="text-slate-400 text-sm">
                  Live data visualization
                </p>
              </div>
              <div
                className="flex space-x-2"
                role="tablist"
                aria-label="Time range"
              >
                <button
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-white rounded-md px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  role="tab"
                  aria-selected={false}
                >
                  24H
                </button>
                <button
                  className="text-xs bg-blue-600 text-white rounded-md px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  role="tab"
                  aria-selected={true}
                >
                  7D
                </button>
                <button
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-white rounded-md px-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  role="tab"
                  aria-selected={false}
                >
                  30D
                </button>
              </div>
            </div>
            <div className="flex justify-between h-32 relative">
              {/* Simulated Chart */}
              <svg viewBox="0 0 400 100" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,50 C20,40 40,80 60,70 C80,60 100,20 120,30 C140,40 160,90 180,80 C200,70 220,40 240,50 C260,60 280,30 300,20 C320,10 340,30 360,40 C380,50 400,30 400,40"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                <path
                  d="M0,50 C20,40 40,80 60,70 C80,60 100,20 120,30 C140,40 160,90 180,80 C200,70 220,40 240,50 C260,60 280,30 300,20 C320,10 340,30 360,40 C380,50 400,30 400,40 L400,100 L0,100 Z"
                  fill="url(#chartGradient)"
                  opacity="0.5"
                />
              </svg>

              {/* Data points */}
              <div className="absolute top-3 left-[10%] bg-blue-500 w-2 h-2 rounded-full animate-ping"></div>
              <div
                className="absolute top-[70%] left-[30%] bg-blue-500 w-2 h-2 rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-[20%] left-[60%] bg-blue-500 w-2 h-2 rounded-full animate-ping"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="absolute top-[40%] left-[85%] bg-blue-500 w-2 h-2 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
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
