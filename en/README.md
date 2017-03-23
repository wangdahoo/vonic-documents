---
title: Guide
nav: english
---

## <div class="code-name">VONIC</div>

<div class="code-desc">
  Mobile UI Components, based on Vue.js and ionic CSS.
</div>

### Introduction

What is **vonic** ？

Vonic is a UI framework based on **vue.js** and **ionic** Styles，used to quickly build a mobile single page applications.

<p class="tip">
  Any relationship with ionic?：No relationship, except that, from the style aspect vonic uses ionic css as a foundation（with some few adjustments）
</p>

<hr/>

### Basic standards

#### font

**vonic** just like ionic **ionic**, uses Apple's font stack

```css
font-family: '-apple-system', "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;
```

#### Color

**vonic** Provide the following scene colors

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
These colors are incorporated into many plug-ins as theme elements, such as: Material Design Button, radio box, check box, switch button, counter, tab, dialog box and so on.
</p>

#### icon
Since **vonic** is based on ionic style，it obviously contains  [ionicons](http://ionicons.com/) Icon set.

<hr/>

### ready

#### Dependencies

**vonic** depends on the following libraries, include them before creating your **vonic** project.
 - vue.js
 - vue-router.js
 - axios.js (**vue.js** officially recommended ajax solution)

#### CDN

Use [unpkg/vonic](https://unpkg.com/vonic) to get the latest files and resources（including **vonic** Custom version, ionic style resources）.

```html
<!-- Custom ionic style -->
<link rel="stylesheet" href="https://unpkg.com/vonic@2.0.0-beta.6/dist/ionic/css/ionic.css">

<!-- Dependent library axios/vue/vue-router -->
<script src="https://unpkg.com/axios@0.15.3/dist/axios.min.js"></script>
<script src="https://unpkg.com/vue@2.1.10/dist/vue.min.js"></script>
<script src="https://unpkg.com/vue-router@2.2.0/dist/vue-router.min.js"></script>

<!-- vonic core files -->
<script src="https://unpkg.com/vonic@2.0.0-beta.6/dist/vonic.min.js"></script>
```

<p class="danger">
  The latest **vonic** version is **2.0.0-beta.6**
</p>

<hr/>

### Hello Vonic

Ok, it's now time to build our first Vonic app: Hello World.

<p class="tip">
  **vonic**  is a UI framework for single page applications. But, in the Hello world, we'll discuss just a single page application skeleton.
</p>

The whole single page application build process is very simple, and only requires four steps

###### Application mount point

```html
<von-app></von-app>
```

###### Page component

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

###### Routes Definition

```js
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About }
]
```

###### Bootstrapping the application

```js
Vue.use(Vonic.app, {
  routes: routes
})
```

Yes, it's that simple.

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/getting_started.html" frameborder="0"></iframe>
</div>

<hr/>

### Components and services

#### Overview

Once **vonic** has completely loaded, certain components are directly set as **Global components** using `Vue.component`, and those components are used just like Vue js standards components; Some other components are registered as **Global components services**, and they are invoked as `$toast`、`$dialog` etc.

Let's use MdButton、$toast as example for better understanding：

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

#### **vonic** Components

| Component Name | Component Selector | Description |
|-----|-----|-----|
| MdButton | `<md-button>` |Material Design style button |
| VonInput | `<von-input>` | Input box |
| Search | `<search>` | Seach Box |
| VonRadio | `<von-radio>` | Radio Button |
| VonCheckbox | `<von-checkbox>` | checkbox |
| VonToggle | `<von-toggle>` | toggle buttons |
| VonRange | `<von-range>` |ranges |
| VonHeader | `<von-header>` | header |
| VonBadge | `<badge>` | badge |
| List | `<list>` | list |
| Item | `<item>` | list item |
| Cells | `<cells>` | list cells |
| Tabs | `<tabs>` | tabs |
| ButtonBar | `<button-bar>` | Button bar |
| Scalable | `<scalable>` | scale |
| Swiper | `<swiper>` | swiper |
| SwiperItem | `<swiper-item>` | swiper item |
| Scroll | `<scroll>` | scroll container |
| Scroller | `<scroller>` | scroll container based on vue-scroller |
| Cascade | `<cascade>` | cascade |
| Accordion | `<accordion>` | accordion |
| AccordionItem | `<accordion-item>` | accordion item |
| Datepicker | `<datepicker>` | datepicker |


#### **vonic** Services

| Service Name（Global Variable） | describe |
|-----|-----|
| `$toast` | toast |
| `$loading` | loading indicator |
| `$dialog` | dialog |
| `$popup` | popup |
| `$actionSheet` | action sheet |
| `$tabbar` | tab bar |
| `$sidebar` | side bar |
| `$modal` | modal |
| `$storage` | local storage |

#### **vonic** Instruction

| Instruction | Description |
|-----|-----|
| `v-nav` | Navigation bar instructions |
| `v-tabbar` | Tab bar command |
| `v-tabbar-menu-index` | tabbar default index |

<hr/>

### Pages and Routes

#### Pages

**vonic** use the classes `.page` and `.page-content` as well as the `v-nav` instruction to customize the page and routes information

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Page title'}">
    <div class="page-content">
      <!-- Page Content -->
    </div>
  </div>
</template>
```

#### `v-nav` command parameters

| Paramerter name | Description | type | required | default |
|-----|-----|-----|-----|-----|
| title | Navbar title | String | no | None |
| showBackButton | show or hide back button | Boolean | No | false |
| backButtonText | backbutton text（template） | String | No | See Note Below|
| onBackButtonClick | back button on click callback | Function | No |  |
| showMenuButton | show or hide menu button | Boolean | No | false |
| menuButtonText | menu button text（template） | String | No | See Note Below |
| onMenuButtonClick | menu button click callback | Function | No |  |
| hideNavbar | hide or show Navbar | Boolean | No | false |

> `backButtonText` default:  `<i class="icon ion-ios-arrow-back"></i>` <br>
> `menuButtonText` default:  `<i class="icon ion-navicon"></i>`


#### Routes

VueRouter is registered right after vonic has been loaded **vonic**, with `$router` service as an instance.

<p class="tip">
`$router.forward()` and `$router.back()` both use the push from VueRouter instance by default, to implement router navigation.But the push method will define the navigation direction in advance.
</p>

```js
/* Before starting your app, set the pushMethod option of the Vonic.app as replace. This will globally disable the browser's history */
/* That's $router.forward()、$router.back() will not increase the navigation history*/

Vonic.app.setConfig('pushMethod', 'replace')

Vue.use(Vonic.app, {
  routes: routes
})
```

### Webpack

If you are used to `vue init webpack my-project` , Please check the following project.

https://github.com/wangdahoo/vonic-webpack-starter


<div style="height: 300px;"></div>
