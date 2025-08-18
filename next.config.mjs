/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://avatar.vercel.sh/**'), new URL('https://i.ibb.co/**'), new URL('https://icons.veryicon.com/**')],
    },
};

export default nextConfig;
