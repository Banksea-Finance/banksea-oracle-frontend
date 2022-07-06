const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    configure: config => {
      const resolve = config.resolve
      const plugins = config.plugins
      const fallback = resolve.fallback

      return {
        ...config,
        resolve: {
          ...resolve,
          fallback: {
            ...fallback,
            assert: false,
            fs: false,
            os: false,
            process: false,
            util: false,
            path: false,
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),
            crypto: require.resolve('crypto-browserify')
          }
        },
        plugins: [
          ...plugins,
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          }),
          new webpack.ProvidePlugin({
            process: 'process/browser',
          }),
        ]
      }
    }
  }
}
