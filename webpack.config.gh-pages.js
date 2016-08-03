const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: [
    'screens/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new ExtractTextPlugin('theme.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  postcss: [
    require('autoprefixer'),
  ],
  resolve: {
    root: [
      __dirname,
    ],
  },
  node: {
    __dirname: true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=react&presets[]=es2015&presets[]=stage-1'],
      include: [
        path.join(__dirname, 'screens'),
        path.join(__dirname, 'components'),
        path.join(__dirname, 'local'),
        path.join(__dirname, 'theme'),
      ],
    },{
      test: /\.json$/,
      loaders: ['json'],
      include: [
        path.join(__dirname, 'theme'),
      ],
    },{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style',
        'css?modules&sourceMap&importLoaders=1&localIdentName=[path][local]_[hash:base64:5]' +
        '!postcss' +
        '!sass?sourceMap' +
        '!jsontosass?path=theme/vars.json'
      ),
      include: [
        path.join(__dirname, 'screens'),
        path.join(__dirname, 'components'),
        path.join(__dirname, 'theme'),
      ],
    },{
      test: /\.jpg$/,
      loader: 'url!img?progressive=true',
      include: [
        path.join(__dirname, 'media'),
      ],
    },{
      test: /\.svg$/,
      loader: 'svg-sprite?name=[path]_[name]_[hash:base64:5]',
      include: [
        path.join(__dirname, 'components'),
      ],
    }],
  },
};
