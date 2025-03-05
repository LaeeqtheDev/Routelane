/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*", // Match all paths
        destination: "https://routelanellc.vercel.app/:path*", // Redirect to new domain
        permanent: true, // 301 Redirect
      },
    ];
  },
};

export default nextConfig;
