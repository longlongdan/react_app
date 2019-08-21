# 创建流程
# 项目启动流程
```
    npm i
    没有build目录时 npm run build
    npm run dev
```

## 基本打包启动流程
- 安装react react-dom 
- 创建html模板 index.js 入口,使用react-dom提供的render方法去渲染root节点，入口文件需要引入react
- webpack配置 对js安装的babel 如果babel-core为@6版本 则babel-loader必须为@7版本
- entry 如果使用对象模式，output中的name为对应的key值，否则为main；写法是直接放在字符串里面'[name].min.js'
- 安装webpack webpack-cli 调用npm脚本来执行webpack的打包

## 自动嵌入js链接在html模板之中
- html-webpack-plugin将打包好的js插入html中 只能使用require来引入插件，plugins
- 使用webpack-dev来启动命令
- 在npm脚本里面设置NODE_ENV来区分执行的环境 注意NODE_ENV=development 的‘=’两边不要有空格

## webpack-dev启动服务器
- 当我们的html是由htmlPlugin生成的时候 可以不指定contentBase
- 否则需要制定contentBase为我们最终html的路径 否则 服务器指定为与webpack同级，然后进入下次目录build/index.html时会报error：can't find index.js
- 我们启动的服务器引入的打包文件都是在内存里面的，并且默认是热更新

## 样式添加
- 安装style-laoder scss-loader sass-loader (node-sass)
- 自动补全css前缀 安装postcss-loader autoprefixer 
- 添加sass的postcss-loader 创建一个postcss.config.js文件指定自动补全插件

## sourcemap文件配置

