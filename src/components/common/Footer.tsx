'use client';

import React from "react";
import Link from "next/link";

/**
 * Footer component for TokenRadar Labs
 * - Logo and company name with gradient styling
 * - Company description
 * - Four columns: Features, Company, Connect
 * - Copyright text
 * - Dark/light mode support (black for dark, navy blue for light)
 */
export default function Footer() {
  return (
    <footer className="bg-[#0A0F23] dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="font-display font-bold text-2xl gradient-text">TokenRadar Labs</div>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Real-time token price tracking and market insights for your crypto community. 
              Empowering blockchain communities with cutting-edge web3 tools.
            </p>
          </div>

          {/* Features Column */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features/discord-bot" className="text-gray-300 hover:text-blue-400 text-sm">
                  Discord Bot
                </Link>
              </li>
              <li>
                <Link href="/features/price-tracking" className="text-gray-300 hover:text-blue-400 text-sm">
                  Price Tracking
                </Link>
              </li>
              <li>
                <Link href="/features/smart-alerts" className="text-gray-300 hover:text-blue-400 text-sm">
                  Smart Alerts
                </Link>
              </li>
              <li>
                <Link href="/features/market-analytics" className="text-gray-300 hover:text-blue-400 text-sm">
                  Market Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-300 hover:text-blue-400 text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-300 hover:text-blue-400 text-sm">
                  API
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-blue-400 text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://discord.gg/tokenradar" className="text-gray-300 hover:text-blue-400 text-sm">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/tokenradarlabs" className="text-gray-300 hover:text-blue-400 text-sm">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://github.com/tokenradarlabs" className="text-gray-300 hover:text-blue-400 text-sm">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://t.me/tokenradar" className="text-gray-300 hover:text-blue-400 text-sm">
                  Telegram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2025 TokenRadar Labs. All rights reserved. Forging next-generation open-source web3 tools.
        </div>
      </div>
    </footer>
  );
} 