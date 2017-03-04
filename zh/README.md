---
title: 指南
---

### 介绍

什么是 **vonic** ？

一个基于 **vue.js** 和 **ionic** 样式的 UI 框架，用于快速构建移动端单页应用。

<p class="tip">
  和 ionic 的关系：没有关系，只是在样式方面以 ionic 的 css 文件为基础（做了一些调整）
</p>

### 基础规范

#### 字体

**vonic** 沿用了 **ionic** 跟随苹果系统的字体栈

```css
font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
```

#### 颜色

**vonic** 提供以下几种场景色

<div class="color assertive">
  Assertive <span>#EA5A49</span>
</div>
<div class="color positive">
  Assertive <span>#4A90E2</span>
</div>
<div class="color balanced">
  Balanced <span>#44CC00</span>
</div>
<div class="color energized">
  Energized <span>#FFBD17</span>
</div>
<div class="color calm">
  Calm <span>#11C1F3</span>
</div>
<div class="color dark">
  Dark <span>#484746</span>
</div>
<div class="color royal">
  Royal <span>#B5B5B5</span>
</div>
<div class="color stable">
  Stable <span>#F5F5F5</span>
</div>
<div class="color light">
  Light <span>#FFFFFF</span>
</div>

<p class="tip">
这些场景色将作为主题元素融入到很多插件中去，如：Material Design Button、单选框、多选框、开关按钮、计数器、选项卡、对话框等。
</p>

#### 图标

既然 **vonic** 是以 ionic 样式为基础的，那它当然也包含 [ionicons](http://ionicons.com/) 图标集。

### 准备

#### 依赖
**vonic** 依赖以下几个库，在创建 **vonic** 项目之前，请确保引入它们。
 - vue.js
 - vue-router.js
 - axios.js (**vue.js** 官方推荐的 ajax 方案)

#### CDN
通过 [unpkg/vonic](https://unpkg.com/vonic) 你可以快速获取最新的相关资源文件（含 **vonic** 定制版 ionic 样式资源文件）。

```html
<!-- 定制版 ionic 样式 -->
<link rel="stylesheet" href="https://unpkg.com/vonic@2.0.0-beta.5/dist/ionic/css/ionic.css">

<!-- 依赖库 axios/vue/vue-router -->
<script src="https://unpkg.com/axios@0.15.3/dist/axios.min.js"></script>
<script src="https://unpkg.com/vue@2.1.10/dist/vue.min.js"></script>
<script src="https://unpkg.com/vue-router@2.2.0/dist/vue-router.min.js"></script>

<!-- vonic 核心文件 -->
<script src="https://unpkg.com/vonic@2.0.0-beta.5/dist/vonic.min.js"></script>
```

<p class="danger">
  **vonic** 当前最新版本为 **2.0.0-beta.5**
</p>

### Hello Vonic

好了，是时候整一个 Hello World 了。

<p class="tip">
  **vonic** 是一个用来做单页应用的UI框架。所以，我们这里谈论的 Hello World 不是一个单个的页面，而是一个单页应用骨架。
</p>

整个单页应用的搭建过程很简单，只要4个步骤。

###### 应用挂载点

```html
<von-app></von-app>
```

###### 页面组件

```js
const Index = {
  template: `
    <div class="page has-navbar" v-nav="{ title: 'Home' }">
      <div class="page-content text-center">
        <h2 class="padding" v-text="msg"></h2>

        <router-link class="button button-assertive" to="/about">
          <i class="ion-information-circled"></i> About
        </router-link>
      </div>
    </div>
  `,
  data() {
  	return {
	    msg: 'Hello! Vonic.'  
    }
  }
}

const About = {
  template: `
    <div class="page has-navbar" v-nav="{ title: 'About', showBackButton: true }">
      <div class="page-content text-center">
        <h2 class="padding">Nothing here.</h2>
      </div>
    </div>
  `
}
```

###### 路由定义

```js
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]
```

###### 启动应用

```js
Vue.use(Vonic.app, {
  routes: routes
})
```

没错，就这么简单。

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/getting_started.html" frameborder="0"></iframe>
</div>
