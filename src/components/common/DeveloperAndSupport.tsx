import React from 'react';

const DeveloperAndSupport = () => {
  return (
    <section className="py-16 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Developer and Support
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Coming soon
          </p>
          <a 
            href="https://discord.gg/gAprFGMrPw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-200"
          >
            Join our Discord Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperAndSupport; 