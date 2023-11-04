/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NODE_ENV: process.env.API_URL
    }
}

module.exports = nextConfig
