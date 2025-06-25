import React from "react";
import { CustomCard } from "./CustomCard";
import { CustomButton } from "./CustomButton";
import { Mail, Globe, MapPin, Send } from "lucide-react";

export const GetInTouch = () => {
  return (
    <section className="bg-white dark:bg-gray-800 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Get In Touch
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400">
            Ready to integrate TokenRadar into your community? Have questions
            about our crypto tools? Let&apos;s discuss how we can help power your
            blockchain project.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <CustomCard className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 h-full flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Connect with TokenRadar Labs
            </h3>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
              Join thousands of crypto communities already using our tools.
              We&apos;re here to help you harness the power of real-time blockchain
              data for your project.
            </p>
            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Email Us
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    contact@tokenradar.xyz
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Website
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    tokenradar.xyz
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    United States of America
                  </p>
                </div>
              </div>
            </div>
          </CustomCard>

          <CustomCard className="bg-gray-50 dark:bg-gray-800 p-6 md:p-8 h-full flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Contact Form
            </h3>
            <form className="mt-6 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Your full name"
                    className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-700 border-none rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-700 border-none rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or questions..."
                    className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-700 border-none rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <CustomButton
                  className="w-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  leftIcon={<Send size={16} />}
                >
                  Send Message
                </CustomButton>
              </div>
            </form>
          </CustomCard>
        </div>
      </div>
    </section>
  );
}; 