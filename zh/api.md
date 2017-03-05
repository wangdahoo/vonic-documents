---
title: API
---

## API

### 组件

----------

#### MdButton

##### 用法

```html
  <md-button class="button button-positive" @click.native="clicked()">
    Click Me
  </md-button>

  <!-- 除了适用所有 ionic 自带的按钮类外，新增 `button-fab` 类以支持绘制 fab 风格按钮 -->

  <md-button class="button button-energized button-fab">
    <i class="icon ion-home"></i>
  </md-button>
```

> [完整代码](./demo/#/MdButton) [演示](./demo/#/MdButton)

----------

#### VonInput

##### 用法

```html
<von-input 
  type="text" 
  v-model="username" 
  placeholder="用户名/手机/邮箱" 
  label="用户名">
</von-input>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| type  | 类型 | String | 否 | text |
| label  | 标签文字 | String | 否 | - |
| value  | 值（用`v-model`替代以支持双向绑定） | String、Number | 是 | - |
| placeholder | 占位符 | String | 否 | - |
| floatingLabel | 开启悬浮标签 | String | 否 | false |

<p class="warning">
  `VonInput` 的 `type` 属性只支持 `text`、`password`、`email`、`tel`
</p>

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/#/VonInput" frameborder="0"></iframe>
</div>

----------

#### Search

##### 用法：

```html
<template>
  <div class="page has-navbar" v-nav="{title: '搜索框'}">
    <div class="page-content">
      <search v-model="keywords" placeholder="输入关键字" :on-search="onSearch" :on-cancel="onCancel"></search>

      <div class="padding" v-show="searching">
        <span v-if="keywords">searching for '{{keywords}}'.</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        keywords: '',
        searching: false
      }
    },

    methods: {
      onSearch(keywords) {
        this.searching = true;
      },

      onCancel() {
        this.searching = false;
        this.keywords = ''
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| value | 值（用`v-model`替代以支持双向绑定）|  String | 是 | 无 |
| placeholder | 占位符 |  String | 否 | Search |
| onSearch | 搜索回调函数 |  Function | 否 | 无 |
| onCancel | 取消回调函数 |  Function | 否 | 无 |
| cancelText | 取消按钮文案 |  String | 否 | Cancel |

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/#/Search" frameborder="0"></iframe>
</div>

----------

#### VonRadio

##### 用法

```html
<template>
  <div class="page has-navbar" v-nav="{title: '单选框'}">
    <div class="page-content">
      <div class="item item-divider">
        选择性别:
      </div>

      <von-radio :options="genderOptions" v-model="gender"></von-radio>

      <p class="padding">
        option index: {{ gender }}<br>
        option text: {{ genderOptions[gender] }}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        gender: 0,
        genderOptions: ["男", "女"]
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| options | 选项列表 | Array | 是 | 无 |
| value | 值 |  Number | 是 | 无 |
| theme | 主题 |  String | 否 | assertive |
