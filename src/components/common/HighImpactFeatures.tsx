import React from "react";
import { Eye, BarChart4, Twitter } from "lucide-react";

const features = [
  {
    icon: <BarChart4 size={28} className="text-blue-500" />, // DeFi Protocol Monitoring
    title: "DeFi Protocol Monitoring",
    items: [
      { label: "Liquidity Pool Tracking", desc: "Monitor DEX liquidity across Uniswap, PancakeSwap, SushiSwap" },
      { label: "Yield Farming Alerts", desc: "Track APY changes, new farming opportunities" },
      { label: "TVL Monitoring", desc: "Real-time protocol health metrics" },
      { label: "Impermanent Loss Calculator", desc: "Help users make informed LP decisions" },
    ],
  },
  {
    icon: <Eye size={28} className="text-purple-500" />, // Whale Watching & On-Chain Analytics
    title: "Whale Watching & On-Chain Analytics",
    items: [
      { label: "Large Transaction Alerts", desc: "Notify when whales move significant amounts" },
      { label: "Wallet Tracking", desc: "Follow specific addresses and their activities" },
      { label: "Token Flow Analysis", desc: "Track where tokens are moving (exchanges, DEXs, wallets)" },
      { label: "Smart Money Tracking", desc: "Follow successful traders' movements" },
    ],
  },
  {
    icon: <Twitter size={28} className="text-cyan-500" />, // Social Sentiment Analysis
    title: "Social Sentiment Analysis",
    items: [
      { label: "Twitter/X Sentiment Tracking", desc: "Aggregate social media buzz around tokens" },
      { label: "News Impact Scoring", desc: "Rate how news affects price movements" },
      { label: "Community Growth Metrics", desc: "Track Discord/Telegram member growth" },
      { label: "Influencer Activity Monitoring", desc: "Track when key figures mention tokens" },
    ],
  },
];

export default function HighImpactFeatures() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            🔥 High-Impact Features to Come
          </h2>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Next-level tools and analytics to supercharge your crypto experience. Here’s what’s coming soon:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-gradient-to-br from-white to-orange-50/50 dark:bg-zinc-900 dark:from-transparent dark:to-transparent rounded-xl shadow-[0_4px_12px_0px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-4">{feature.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i}>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{item.label}:</span> <span className="text-gray-600 dark:text-gray-400">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 