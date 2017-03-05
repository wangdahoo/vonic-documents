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

<div class="device-ios">
  <iframe class="demo-ios" src="./demo/#/MdButton" frameborder="0"></iframe>
</div>

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