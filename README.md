## react 脚手架 3.0 fig-pure-kms

> 开启全新的旅程
>
> 上个版本，请去 release/v2.0 分支

## 主要应用场景

- 公司内部的管理后台

## 使用方式

### 使用 fig-cli

```bash
npm set registry https://kvd.kaikeba.com
npm install -g @kkb/fig-cli

fig create <projectName>

# selected `pure-kms`

...

```

[点击查看 fig-cli 介绍](https://fe.kaikeba.com/fig-cli/v2)

### 使用 git

```bash
git clone <projectRepo>
```

### 开发

```bash
yarn

yarn run start
```

## 部署

```bash
开发环境： yarn run build:dev
测试环境： yarn run build:test
预发布环境： yarn run build:pre
生产环境： yarn run build:prod
```

## fig.config.js 配置

```js
module.exports = {
  name: 'pitaya', // 项目名字
  dingdingNoticeId: 'xxx', // 钉钉发送通知,联系sdwang@kaikeba.com
};
```

[点击查看更多配置](https://fe.kaikeba.com/fig-cli/v2/options)

## 脚手架结构介绍

```bash
├── node_modules # 依赖
├── public # 公共目录
│   ├── index.html
├── src # 源文件
│   ├── components # 公共组件
│   ├── consts # 公共变量
│   ├── routes # 路由
│   ├── services # 请求
│   ├── store # 状态管理
│   ├── utils # 工具函数集合 -> 可以看一下下面提供的 utils 库链接
│   ├── views # 页面文件
│   ├── App.js # 入口组件
│   ├── index.js # 主入口
├── README.md # 项目介绍
├── fig.config.js # fig-cli 配置文件
├── package.json # 项目管理说明
```

[点击查看 utils 库](https://fe.kaikeba.com/utils-pages)

> utils 是一个通用 util 仓库，封装了多个适用于开课吧内部使用的工具函数或函数集合。

## 样式风格（基于 antd 使用了 less）

use less

## 特性

- 拿来即用
- 状态管理：rematch
- 灵活的用户配置 fig.config.js
- 编译完成后 钉钉通知
- 集成 Antd4
