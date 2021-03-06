var path = require('path');
var webpack = require('webpack');
var CommonsChunkPlugin = require("./node_modules/webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  devtool: 'eval',
  debug: true,
  entry:{
     app:'./src/index.js',
     vendor: ['react','react-dom','react-bootstrap','lodash']
   },
  output: {
    path: path.resolve(__dirname,'./build'),
    publicPath: '/build/',
    filename: 'app.js'
  },
   resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module:{
    loaders: [
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','stage-1','react'],
        plugins: ['transform-runtime']
      },
    },
    {test: /\.css$/,loader:'style!css?module&localIdentName=[name]__[local]-[hash:base64:5]'},
    {test: /\.less$/,loaders: ['style', 'css', 'less']},
    {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}  
  ]
  },
  plugins: [
      new CommonsChunkPlugin(
    {
      name:'vendor',
      filename:'lib.js',
      minChunks:Infinity
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    ]
};