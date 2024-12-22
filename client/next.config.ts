import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      domains: ['res.cloudinary.com'],
   },
   css: {
      preprocessorOptions: {
         scss: {
            api: 'modern-compiler',
         },
      },
   },
};

export default nextConfig;
