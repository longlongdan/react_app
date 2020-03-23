const Koa = require('koa');
const koaStatic = require('koa-static');

const path = require("path")
const express = require("express")
const webpack = require("webpack")
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');

const webpackConfig = require('./webpack.config.js')

const app = new Koa(),
            DIST_DIR = path.join(__dirname, "src"),// 设置静态访问文件路径
            PORT = 3000, // 设置启动端口
            complier = webpack(webpackConfig) 

app.use(devMiddleware(complier, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,  //向控制台显示任何内容 
    // reload: true
}))

app.use(hotMiddleware(complier));
// 这个方法和下边注释的方法作用一样，就是设置访问静态文件的路径
app.use(koaStatic(DIST_DIR)) 

app.listen(PORT,function(){
    console.log("成功启动：localhost:"+ PORT)
})