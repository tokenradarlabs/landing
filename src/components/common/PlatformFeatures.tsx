'use client';

import React from "react";
import {
  Shield,
  Zap,
  BarChart4,
  Bell,
  TrendingUp,
  Bot,
} from "lucide-react";
import CustomCard from "./CustomCard";

const features = [
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600">
        <Bot size={24} className="text-white" />
      </div>
    ),
    title: "Discord Bot Integration",
    description:
      "Seamlessly integrate TokenRadar bot into your Discord server for real-time price tracking and alerts.",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600">
        <TrendingUp size={24} className="text-white" />
      </div>
    ),
    title: "Live Price Tracking",
    description:
      "Monitor cryptocurrency prices in real-time with accurate, up-to-the-second market data.",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
        <Bell size={24} className="text-white" />
      </div>
    ),
    title: "Smart Alerts",
    description:
      "Set custom price alerts and get notified instantly when your tokens hit target prices.",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-green-600">
        <BarChart4 size={24} className="text-white" />
      </div>
    ),
    title: "Market Analytics",
    description:
      "Access comprehensive market insights, charts, and technical analysis for informed decisions.",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-600">
        <Zap size={24} className="text-white" />
      </div>
    ),
    title: "Lightning Fast",
    description:
      "Ultra-fast data delivery with minimal latency for time-sensitive trading decisions.",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-rose-500">
        <Shield size={24} className="text-white" />
      </div>
    ),
    title: "Reliable & Secure",
    description:
      "Built with enterprise-grade security and 99.9% uptime for dependable market monitoring.",
  },
];

export default function PlatformFeatures() {
  return (
    <section id="features" className="py-20 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Platform Features
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive crypto market intelligence tools designed for traders,
            investors, and blockchain communities who demand real-time accuracy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <CustomCard
              key={index}
              className="p-8 bg-white dark:bg-zinc-900 rounded-xl transform transition-transform duration-300 hover:-translate-y-2 shadow-[0_4px_12px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="space-y-4">
                {feature.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </CustomCard>
          ))}
        </div>
      </div>
    </section>
  );
} 