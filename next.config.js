/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = {
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY
  }
};
