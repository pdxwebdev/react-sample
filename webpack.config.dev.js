const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    'screens/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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
  devServer: {
    port: 3000,
    hot: true,
    contentBase: 'dist',
    quiet: false,
    noInfo: false,
    stats: {
      assets: true,
      version: false,
      hash: false,
      timings: false,
      chuncks: false,
      chunkModules: true,
    },
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=react&presets[]=es2015&presets[]=stage-1&presets[]=react-hmre'],
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
      loaders: [
        'style',
        'css?modules&sourceMap&importLoaders=1&localIdentName=[path][local]_[hash:base64:5]',
        'postcss',
        'sass?sourceMap',
        'jsontosass?path=theme/vars.json',
      ],
      include: [
        path.join(__dirname, 'screens'),
        path.join(__dirname, 'components'),
        path.join(__dirname, 'theme'),
      ],
    },{
      test: /\.jpg$/,
      loader: 'file?name=[path][name].[ext]!img?progressive=true',
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
