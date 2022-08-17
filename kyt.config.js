// Base kyt config.
// Edit these properties to make changes.

module.exports = {
  debug: false,
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'postcss-loader', options: { plugins: () => [require('autoprefixer')()] } },
          'sass-loader',
        ],
      },
    ],
  },
};
