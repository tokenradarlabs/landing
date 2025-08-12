"use client";
import React, { useEffect, useRef, useState } from "react";
import { CustomCard } from "./CustomCard";
import { CustomButton } from "./CustomButton";
import { Mail, Globe, MapPin, Send, Check, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export const GetInTouch = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    const toastId = toast.loading("Sending message...");

    // Simulate form submission
    setTimeout(() => {
      if (formState.email && formState.fullName && formState.message) {
        setFormStatus("success");
        toast.success("Message sent successfully!", { id: toastId });

        // Reset form fields here:
        setFormState({
          fullName: "",
          email: "",
          message: "",
        });
      } else {
        setFormStatus("error");
        toast.error("Please fill out all required fields.", { id: toastId });
      }
      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    if (formStatus === "success") {
      successRef.current?.focus();
    } else if (formStatus === "error") {
      errorRef.current?.focus();
    }
  }, [formStatus]);

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-rose-50 to-slate-50 dark:from-gray-800 dark:to-gray-900 py-12 md:py-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div aria-hidden className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl"></div>
      <div aria-hidden className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block mb-3 px-4 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
            <p className="text-sm font-medium text-purple-600 dark:text-purple-300">
              24/7 Support
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Get In Touch
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Ready to integrate TokenRadar into your community? Have questions
            about our crypto tools? Let&apos;s discuss how we can help power
            your blockchain project.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <span className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400">
              <Check size={16} className="mr-1" /> Fast response
            </span>
            <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
              <Check size={16} className="mr-1" /> Expert support
            </span>
            <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400">
              <Check size={16} className="mr-1" /> Custom solutions
            </span>
          </div>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <CustomCard className="bg-gradient-to-br from-white to-rose-50/50 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm p-6 md:p-8 h-full flex flex-col shadow-lg border border-rose-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 right-0 h-24 w-24 -mt-8 -mr-8 bg-gradient-to-br from-pink-200/30 to-purple-300/20 dark:from-pink-800/20 dark:to-purple-900/10 rounded-full blur-2xl"></div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white relative z-10">
              Connect with TokenRadar Labs
            </h3>

            <div className="mt-3 inline-flex space-x-1">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                Online now
              </span>
            </div>

            <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
              Join thousands of crypto communities already using our tools.
              We&apos;re here to help you harness the power of real-time
              blockchain data for your project.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Email Us
                  </p>
                  <a
                    href="mailto:contact@tokenradar.xyz"
                    className="text-base text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    contact@tokenradar.xyz
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Website
                  </p>
                  <a
                    href="https://tokenradar.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    tokenradar.xyz
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    United States of America
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <span className="sr-only">Discord</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-500"
                >
                  <span className="sr-only">Telegram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.9491 4.83752L16.9295 18.9823C16.715 19.9473 16.1295 20.1948 15.3168 19.7398L10.8863 16.4523L8.76134 18.4923C8.52884 18.7248 8.33509 18.9185 7.88009 18.9185L8.19509 14.401L16.0988 7.27629C16.4501 6.96879 16.0213 6.80004 15.5513 7.10754L5.87759 13.1513L1.46259 11.8348C0.517591 11.536 0.499841 10.8648 1.67009 10.4098L18.7276 3.78754C19.5138 3.48879 20.2013 3.98129 19.9491 4.83877V4.83752Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </CustomCard>

          <CustomCard className="bg-gradient-to-br from-white to-rose-50/50 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm p-6 md:p-8 h-full flex flex-col shadow-lg border border-rose-100/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-3xl"></div>

            <h3 id="contact-form-title" className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              Contact Form
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                Secure
              </span>
            </h3>

            {formStatus === "success" && (
               <div
                 ref={successRef}
                 tabIndex={-1}
                 role="status"
                 aria-live="polite"
                 className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800/30 rounded-lg flex items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
               >
                <div className="flex-shrink-0 mt-0.5">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                    Message sent successfully
                  </h3>
                  <div className="mt-1 text-sm text-green-700 dark:text-green-300">
                    Thank you for reaching out! We&apos;ll get back to you
                    shortly.
                  </div>
                </div>
              </div>
            )}

            {formStatus === "error" && (
               <div
                 ref={errorRef}
                 tabIndex={-1}
                 role="alert"
                 aria-live="assertive"
                 className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 rounded-lg flex items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
               >
                <div className="flex-shrink-0 mt-0.5">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                    There was an error
                  </h3>
                  <div className="mt-1 text-sm text-red-700 dark:text-red-300">
                    Please fill out all required fields and try again.
                  </div>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              aria-labelledby="contact-form-title"
              className="mt-6 space-y-6 flex-1 flex flex-col justify-between"
            >
              <fieldset disabled={isSubmitting} aria-busy={isSubmitting} className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      aria-required="true"
                      placeholder="Your full name"
                      value={formState.fullName}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      aria-required="true"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 sm:text-sm"
                      required
                     />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-required="true"
                      placeholder="Tell us about your project or questions..."
                      value={formState.message}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 sm:text-sm"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-2 block text-sm text-gray-600 dark:text-gray-400"
                  >
                    Subscribe to our newsletter for market updates
                  </label>
                </div>
              </fieldset>

              <div className="mt-auto pt-6">
                <CustomButton
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-md hover:shadow-lg py-3 transition-all duration-300 disabled:opacity-70"
                  leftIcon={isSubmitting ? null : <Send size={16} />}
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? "Sending message" : "Send message"}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </CustomButton>
                <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </CustomCard>
        </div>

        {/* Support banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 md:p-8 relative overflow-hidden shadow-lg">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-multiply"></div>
            <div className="absolute right-0 top-0 transform translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-white opacity-10 rounded-full"></div>
            <div className="absolute left-0 bottom-0 transform -translate-x-1/3 translate-y-1/3 w-96 h-96 bg-white opacity-10 rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Need urgent support?
              </h3>
              <p className="mt-2 text-blue-100">
                Join our Discord server for 24/7 community support
              </p>
            </div>
            <CustomButton
              className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300"
              leftIcon={
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.995a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              }
              aria-label="Join our Discord server"
            >
              Join Discord
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};
