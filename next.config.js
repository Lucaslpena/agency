module.exports = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader"],
    });

    return config;
  },
};
