/** @type {import('next').NextConfig} */
const nextConfig = {
  // images:{
  //   remotePatterns:[{
  //     protocol: "https",
  //     hostname : "www.prada.com",
  //     port: "",
  //     pathname: "/**"
  //   }]
  // },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;