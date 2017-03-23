---
title: 指南
---

## <div class="code-name">VONIC</div>

<div class="code-desc">
  Mobile UI Components, based on Vue.js and ionic CSS.
</div>

### 介绍

什么是 **vonic** ？

一个基于 **vue.js** 和 **ionic** 样式的 UI 框架，用于快速构建移动端单页应用。

<p class="tip">
  和 ionic 的关系：没有关系，只是在样式方面以 ionic 的 css 文件为基础（做了一些调整）
</p>

<hr/>

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
  Positive <span>#4A90E2</span>
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

<hr/>

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
<link rel="stylesheet" href="https://unpkg.com/vonic@2.0.0-beta.11/dist/vonic.min.css">

<!-- 依赖库 axios/vue/vue-router -->
<script src="https://unpkg.com/axios@0.15.3/dist/axios.min.js"></script>
<script src="https://unpkg.com/vue@2.1.10/dist/vue.min.js"></script>
<script src="https://unpkg.com/vue-router@2.2.1/dist/vue-router.min.js"></script>

<!-- vonic 核心文件 -->
<script src="https://unpkg.com/vonic@2.0.0-beta.11/dist/vonic.min.js"></script>
```

<p class="danger">
  **vonic** 当前最新版本为 **2.0.0-beta.11**
</p>

<hr/>

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

<hr/>

### 组件和服务

#### 概述

**vonic** 加载完成后，一部分组件已通过`Vue.component`方法注册为**全局组件**，以 Vue 标准组件方式进行使用；另一部分组件则注册为**全局组件服务**，调用其方法即可使用，如：`$toast`、`$dialog` 等。

下面以 MdButton、$toast 为例进行说明：

```html
<template>
  <div class="page has-navbar" v-nav="{'title': 'Component and Service'}">
    <div class="page-content padding padding-top">
      <md-button class="button button-assertive button-block">
        just a button
      </md-button>

      <md-button class="button button-balanced button-block" @click.native="onClick()">
        show toast
      </md-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      onClick() {
        $toast.show("button clicked.")
      }
    }
  }
</script>
```

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/component_and_service.html" frameborder="0"></iframe>
</div>

#### **vonic** 组件

| 组件名称 | 组件标签 | 描述 |
|-----|-----|-----|
| MdButton | `<md-button>` |Material Design 风格按钮 | 
| VonInput | `<von-input>` | 输入框 | 
| Search | `<search>` | 搜索框 | 
| VonRadio | `<von-radio>` | 单选框 |
| VonCheckbox | `<von-checkbox>` | 复选框 |
| VonToggle | `<von-toggle>` | 开关按钮 |
| VonRange | `<von-range>` |滑块 |
| VonHeader | `<von-header>` | 页头 |
| VonBadge | `<badge>` | 徽章 |
| List | `<list>` | 列表 |
| Item | `<item>` | 列表选项 |
| Cells | `<cells>` | 宫格 |
| Tabs | `<tabs>` | 选项卡 |
| ButtonBar | `<button-bar>` | 按钮栏 |
| Scalable | `<scalable>` | 缩放 |
| Swiper | `<swiper>` | 轮播容器 |
| SwiperItem | `<swiper-item>` | 轮播项 |
| Scroll | `<scroll>` | 滚动容器 |
| Scroller | `<scroller>` | 基于 vue-scroller 插件的滚动容器 |
| Cascade | `<cascade>` | 级联 |
| Accordion | `<accordion>` | 手风琴容器 |
| AccordionItem | `<accordion-item>` | 手风琴内容项 |
| Datepicker | `<datepicker>` | 日期选择器 |


#### **vonic** 服务

| 服务名称（全局变量） | 描述 |
|-----|-----|
| `$toast` | 文字提示 | 
| `$loading` | 加载提示 | 
| `$dialog` | 对话框 | 
| `$popup` | 弹层 | 
| `$actionSheet` | 操作列表 | 
| `$tabbar` | 选项栏 | 
| `$sidebar` | 侧边栏 | 
| `$modal` | 模态窗 | 
| `$storage` | 本地存储 |

#### **vonic** 指令

| 指令 | 描述 |
|-----|-----|
| `v-nav` | 导航栏指令 | 
| `v-tabbar` | 选择栏指令 | 
| `v-tabbar-menu-index` | 选择栏默认菜单指令 |

<hr/>

### 页面与路由

#### 页面

**vonic** 通过 `.page`、`.page-content` 这两个基类和`v-nav`指令来定义页面及导航栏信息

```html
<template>
  <div class="page has-navbar" v-nav="{title: '页面标题'}">
    <div class="page-content">
      <!-- 页面内容 -->
    </div>
  </div>
</template>
```

#### `v-nav` 指令参数列表

| 参数名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| title | 导航栏标题 | String | 否 | 无 |
| showBackButton | 是否显示返回按钮 | Boolean | 否 | false |
| backButtonText | 返回按钮文字（模板） | String | 否 | 见备注 |
| onBackButtonClick | 返回按钮点击回调 | Function | 否 | 无 |
| showMenuButton | 是否显示菜单按钮 | Boolean | 否 | false |
| menuButtonText | 菜单按钮文字（模板） | String | 否 | 见备注 |
| onMenuButtonClick | 菜单按钮点击回调 | Function | 否 | 无 |
| hideNavbar | 隐藏导航栏 | Boolean | 否 | false |

> `backButtonText` 默认值为 `<i class="icon ion-ios-arrow-back"></i>` <br>
> `menuButtonText` 默认值为 `<i class="icon ion-navicon"></i>`


#### 路由

**vonic** 加载完成后，即注册 VueRouter 实例为 `$router` 服务

<p class="tip">
`$router.forward()` 和 `$router.back()` 两个方法默认通过调用 VueRouter 实例的 push 方法来进行路由切换，但在调用 push 方法前会预先定义页面切换方向。
</p>

```js
/* 启动应用前，设置 Vonic.app 的 pushMethod 选项为 replace 可以全局禁用浏览器 history */
/* 即，$router.forward()、$router.back() 不再新增浏览记录 */

Vonic.app.setConfig('pushMethod', 'replace')

Vue.use(Vonic.app, {
  routes: routes
})
```

### Webpack

习惯使用 `vue init webpack my-project` 构建项目的同学，请参考这个项目。

https://github.com/wangdahoo/vonic-webpack-starter


### Vuex

可以在启动单页应用的时候注入全局 Store 以支持 Vuex

```js
let store = Vuex.Store({
  // ...
})

Vue.use(Vonic.app, {
  routes,
  store
})
```

#### Counter Example

- [演示](https://wangdahoo.github.io/vonic-documents/demo/vuex/counter.html) 
- [完整代码](https://github.com/wangdahoo/vonic-documents/blob/master/demo/vuex/counter.html)


<div style="height: 300px;"></div>