/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
      },
      compiler: { styledComponents: true, },
      webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true }
        return config
      }
}

module.exports = nextConfig
