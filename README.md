# yfhu

## 构建安装

```bash
# 安装依赖
$ npm install

# 运行 默认加载localhost:3000
$ npm run dev

# 为生产服务器和启动服务器构建
$ npm run build
$ npm run start

# 生成静态项目
$ npm run generate
```
## 目录
```
yfhu
├── assets  // 资源目录(需要webpack编译) assets 用于组织未编译的静态资源如 LESS、SASS 或 JavaScript
│   ├── css
│   │   ├── common.css
│   │   └── reset.css
│   ├── less
│   │   ├── antd-variables.less
│   │   ├── blog.less
│   │   ├── colors.less
│   │   ├── media.less
│   │   └── mixin.less
│   └── README.md
├── components  // 组件目录，放置全局组件
│   ├── component.js
│   ├── README.md
│   ├── VAbout.vue
│   ├── VBackTop.vue
│   ├── VContact.vue
│   ├── VFooter.vue
│   ├── VHeader.vue
│   ├── VProject.vue
│   ├── VTitle.vue
│   └── VWork.vue
├── layouts   //布局目录 https://www.nuxtjs.cn/guide/views#%E5%B8%83%E5%B1%80
│   ├── default.vue
│   └── README.md
├── locales   // 语言目录
│   ├── en-US.json  // 英文
│   └── zh-CN.json  // 中文
├── middleware  // 中间件目录 用于存放应用的中间件
│   ├── i18n.js
│   └── README.md
├── pages   // 页面目录
│   ├── index.vue
│   ├── login
│   │   └── index.vue
│   ├── README.md
│   ├── register
│   │   └── index.vue
│   └── _lang
│       ├── index.vue
│       ├── login
│       │   └── index.vue
│       └── register
│           └── index.vue
├── plugins   // 插件目录
│   ├── antd-ui.js
│   ├── axios.js
│   ├── component.js
│   ├── cookies.js
│   ├── i18n.js
│   ├── js-toolkit-fn.js
│   └── README.md
├── static  // 静态文件目录(不需要webpack编译)
│   ├── css
│   │   └── animate.css
│   ├── favicon.ico
│   ├── images
│   │   └── blog
│   │       ├── 01.jpeg
│   │       └── banner_1920x880.jpg
│   ├── js
│   │   └── wow.min.js
│   └── README.md
├── store // store目录
│   ├── component.js
│   └── README.md
├── jsconfig.json
├── nuxt.config.js
├── package-lock.json
├── package.json
├── pm2.config.json
└── README.md


```
关于如何工作的详细解释，请查看[Nuxt.js docs](https://nuxtjs.org).
