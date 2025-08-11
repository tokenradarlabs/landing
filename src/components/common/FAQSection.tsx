'use client';

import React from "react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What is TokenRadar Labs?",
    answer: "TokenRadar Labs is a cutting-edge platform that provides advanced analytics and tracking tools for blockchain and cryptocurrency markets, helping users make informed decisions through real-time data analysis and market insights."
  },
  {
    question: "How do I get started with TokenRadar Labs?",
    answer: "Getting started is easy! Simply create an account, choose your subscription plan, and you'll get immediate access to our comprehensive suite of tools and features. We also offer a guided tour and documentation to help you make the most of our platform."
  },
  {
    question: "What features does TokenRadar Labs offer?",
    answer: "Our platform offers a wide range of features including real-time market analysis, token tracking, portfolio management, price alerts, custom watchlists, advanced charting tools, and comprehensive market research capabilities."
  },
  {
    question: "Is my data secure with TokenRadar Labs?",
    answer: "Yes, we take security very seriously. We employ industry-standard encryption, secure authentication methods, and regular security audits to ensure your data and investments are protected at all times."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through multiple channels including email, live chat, and our help center. Our dedicated support team is always ready to assist you with any questions or concerns."
  },
  {
    question: "What are the technical requirements to use TokenRadar Labs?",
    answer: (
      <>
        To ensure the best experience with TokenRadar Labs, please review the following technical requirements:
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><strong>Minimum Requirements:</strong> Modern device with at least 2GB RAM and a dual-core processor.</li>
          <li><strong>Recommended:</strong> Latest version of Windows, macOS, or Linux with 4GB+ RAM and a recent multi-core processor.</li>
          <li><strong>Supported Browsers:</strong> Chrome, Firefox, Edge, and Safari (latest two versions recommended).</li>
          <li><strong>Device Compatibility:</strong> Fully compatible with desktop and most modern tablets and smartphones.</li>
          <li><strong>Internet Speed:</strong> Minimum 5 Mbps for basic use; 20 Mbps or higher recommended for real-time analytics.</li>
          <li><strong>Troubleshooting:</strong> If you encounter issues, try clearing your browser cache, disabling extensions, or updating your browser.</li>
          <li><strong>Note:</strong> We regularly update our platform, so please check this FAQ for the latest requirements.</li>
        </ul>
      </>
    )
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-indigo-50 dark:bg-slate-950 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Find answers to common questions about TokenRadar Labs and our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-indigo-50/50 dark:bg-slate-800/60 dark:from-transparent dark:to-transparent rounded-lg border shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors duration-150 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
              >
                <span className="text-lg font-medium text-slate-800 dark:text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    } text-slate-700 dark:text-white`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className="px-6 pb-4"
                >
                  <div className="text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 