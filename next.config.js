/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ignorar módulos opcionales de socket.io en el cliente
      config.resolve.fallback = {
        ...config.resolve.fallback,
        bufferutil: false,
        'utf-8-validate': false,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    // Ignorar warnings de módulos opcionales
    config.ignoreWarnings = [
      /Module not found: Can't resolve 'bufferutil'/,
      /Module not found: Can't resolve 'utf-8-validate'/,
    ]
    
    return config
  },
};

module.exports = nextConfig;
