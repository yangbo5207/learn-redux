# learn-redux
react redux学习

#### 在create-react-app 创建的项目中添加`sass/scss`支持  


+ 安装sass需要的loader

```js
> npm install sass-loader node-sass --save-dev
```

+ 最初创建的项目中我们无法看到webpack相关的配置文件。因此我们需要执行下面的操作，让配置文件显示出来。

```js
> npm run eject
```

> 如果你的项目中有未track的文件，会提示先删除这些文件，直接提交一次commit即可。

eject之后，会在项目中出现`scripts`与`config`2个文件夹。我们只需要修改`config/webpack.config.dev.js`即可。

+ 往`module.exports.module.rules[1].exclude`中添加如下子项

```js
/\.scss$/,
/\.sass$/,
```

+ 往`module.exports.module.rules`中添加如下子项

```js
{
  test: /\.s[ac]ss$/,
  include: paths.appSrc,
  loaders: ["style-loader", "css-loader", "sass-loader"]
},
```

修改完毕之后，保存文件，重启项目`npm start`即可。现在的项目已经支持`.scss`文件了。

> 参考资料 https://medium.com/@Connorelsea/using-sass-with-create-react-app-7125d6913760
