/** @type {import('next').NextConfig} */
const nextConfig = {
    
    env: {
        API_URL: "http://localhost:3000",
        DB_URI: "mongodb://127.0.0.1:27017/recycle-bin",
        NEXTAUTH_SECRET: "recycle-bin",
    },
    images: {
        domains: ["res.cloudinary.com", "asset.cloudinary.com"],
    },
};

export default nextConfig;
