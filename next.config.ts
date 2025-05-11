import { NextConfig } from 'next';
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
});

const config: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  webpack(config) {
    config.resolve.modules.push(`${__dirname}/src`); // Resolve src directory for imports
    return config;
  },
};

module.exports = withPWA(config);
