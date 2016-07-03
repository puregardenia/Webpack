var webpack = require('webpack');
module.exports = {
  resolve: {
    root: 'D:/ESH/webpack', //绝对路径
    alias: {
      jquery: 'js/lib/jquery.min.js'
    }
  },
  entry: 'js/entry.js',
  output: {
    path: __dirname,
    filename: "js/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css"},
      { test: /.(png|jpg)$/, loader: "url?limit=40000"} //当你图片大小小于这个限制的时候，会自动启用base64编码图片。
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by mutouren')  //给文件头部添加信息
  ]
};