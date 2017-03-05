---
title: API
---

## API

<p class="danger">
  该文档内所有演示代码，均可在[这里](https://github.com/wangdahoo/vonic-documents/blob/master/demo/)找到。
</p>

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

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/MdButton)

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

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/VonInput)

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
| value | 值（用`v-model`替代以支持双向绑定） |  String | 是 | 无 |
| placeholder | 占位符 |  String | 否 | Search |
| onSearch | 搜索回调函数 |  Function | 否 | 无 |
| onCancel | 取消回调函数 |  Function | 否 | 无 |
| cancelText | 取消按钮文案 |  String | 否 | Cancel |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Search)

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
| value | 值（用`v-model`替代以支持双向绑定） |  Number | 是 | 无 |
| options | 选项列表 | Array | 是 | 无 |
| theme | 主题 |  String | 否 | assertive |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/VonRadio)

----------

#### VonCheckbox

##### 用法

```html
<template>
  <div class="page has-navbar" v-nav="{title: '复选框'}">
    <div class="page-content">
      <div class="item item-divider">
        选择感兴趣的板块:
      </div>

      <von-checkbox :options="topics" v-model="chosenTopics" theme="positive"></von-checkbox>

      <p class="padding">
        chosen topics: {{ chosenTopics }}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        chosenTopics: [],
        topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| value | 值（用`v-model`替代以支持双向绑定） |  Array | 是 | 无 |
| options | 选项列表 | Array | 是 | 无 |
| theme | 主题 |  String | 否 | assertive |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/VonCheckbox)

----------

#### VonToggle

##### 用法

```html
<template>
  <div class="page has-navbar" v-nav="{title: '开关按钮'}">
    <div class="page-content padding-top">
      <von-toggle :text="toggleText" v-model="pushNotification"></von-toggle>
      <div class="item item-divider">开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| text | 标签文字 | String | 是 | 无 |
| value | 值（用`v-model`替代以支持双向绑定） |  Boolean | 是 | 无 |
| theme | 主题 | String | 否 | assertive |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/VonToggle)

----------

#### VonRange

##### 用法

```html

<von-range
  v-model="volume"
  :min="min"
  :max="max"
  theme="balanced"
></von-range>

<von-range
  v-model="volume2"
  :min="min"
  :max="max"
  theme="balanced"
>
  <!-- 通过 text-left / text-right 两个 slot 对 range slider 左右两边的文字进行分发 -->
  <i class="icon ion-volume-low" slot="text-left"></i>
  <i class="icon ion-volume-high" slot="text-right"></i>
</von-range>

```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| value | 值（用`v-model`替代以支持双向绑定） | Number | 是 | 无 |
| min | 最小值 | Number | 是 | 无 |
| max | 最大值 | Number | 是 | 无 |
| theme | 主题 | String | 否 | assertive |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/VonRange)

----------

#### VonHeader

##### 用法

```html
<!-- 用 title / left / right 三个slot分发标题、左按钮、右按钮 -->
<von-header theme="dark">
  <button class="button button-icon ion-ios-arrow-back" slot="left"></button>
  <span slot="title">标题文字</span>
  <button class="button button-icon ion-navicon" slot="right"></button>
</von-header>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| theme | 主题 | String | 否 | light |


> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/VonHeader)

----------

#### Badge

##### 用法

```html
<badge num="2"></badge>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| num | 徽章数字、文字 | String | 否 | 无 |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Badge)

----------

#### List

通过 `<list>`、`<item>` 两个标签可快速布局列表

##### 用法

```html

<!-- 使用 .list-ios 类制作左边缩进的ios风格列表 -->
<list class="list-ios">
  <item>
    Item - 1
  </item>
  <item>
    Item - 2
  </item>
  <item>
    Item - 3
  </item>
</list>

```

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/List)

----------

#### Cells

##### 用法

```html
<template>
  <div>
    <cells :items="entrances" :on-cell-click="onCellClick" row="2"></cells>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        entrances: [
          '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
          '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
          '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>'
        ]
      }
    }
  }
</script>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| row | 行数 | Number | 否 | 3 |
| col | 列数 |  Number | 否 | 3 |
| items | 列表项 |  Array | 是 | 无 |
| onCellClick | 宫格单元点击回调 |  Function | 否 | 无 |
| outerBorder | 是否显示宫格容器外边框 | Boolean, String | 否 | true |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Cells)

----------

#### Tabs

##### 用法

```html
<template>
  <div class="page has-navbar" v-nav="{title: '选项卡'}">
    <div class="page-content">
      <tabs :tab-items="tabs" :tab-index="tabIndex" :on-tab-click="onTabClick"></tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      tabs: [
        "tab 1",
        "tab 2",
        "tab 3"
      ],
      tabIndex: 0
    },
    methods: {
      onTabClick(index) {
        this.tabIndex = index
      }
    }
  }
</script>
```

##### 属性：

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| position | 位置，top/bottom | String | 否 | top |
| bgColor | 背景色 | String | 否 | light |
| tabColor | 前景色 | String | 否 | positive |
| tabItems | 选项列表 | Array | 是 | 无 |
| activeIndex | 激活选项索引 | Number | 是 | 无 |
| onTabChanged | 选项卡点击回调 | Function | 否 | 无 |

<p class="tip">
bgColor、tabColor 值均以 vonic 情景色表示。
</p>

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Tabs)

----------

#### ButtonBar

##### 用法

```html
<template>
  <div class="page has-navbar" v-nav="{title: '按钮栏'}">
    <div class="page-content padding-top">
      <div class="padding">
        商品分类:
      </div>
      <div class="padding light-bg">
        <button-bar theme="assertive" :tab-items="promotions" :tab-index="promotionIndex"
          :on-tab-click="index => promotionIndex = index"></button-bar>
      </div>
      <div class="item thin-border">
        选中: {{ promotions[promotionIndex] }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        promotions: ["往期热卖", "抢购进行中"],
        promotionIndex: 0
      }
    }
  }
</script>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| tabItems | 选项列表 | Array | 是 | 无 |
| tabIndex | 当前选项索引 | Number | 是 | 无 |
| theme | 主题 | String | 否 | positive |
| onTabClick | 选项点击回调 | Function | 否 | 无 |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/ButtonBar)

----------

#### Scalable

##### 用法

```html
<template>
  <div class="padding">
    <!-- 设置宽为父容器宽度，高为100px -->
    <scalable width="100%" height="100" style="background-color: #FFF;">
      <p>
        Font Size = 16px (相当于8px)
      </p>
    </scalable>
  </div>
</template>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| scale | 缩小比例 | Number | 否 | 2 |
| width | 容器宽度 | String | 否 | 100% |
| height | 容器高度 | String | 否 | 100% |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Scalable)

----------

#### Swiper

##### 用法

```html
<swiper ref="swiper" 
  direction="horizontal" 
  width="100%" 
  height="150" 
  pager-color="#ea5a49" 
  pager-bg-color="#e5e4e3"
>
  <swiper-item>
    <h1 style="color: #0a9dc7;" @click="onClick()">Item 1</h1>
  </swiper-item>

  <swiper-item>
    <h1 style="color: #44cc00;">Item 2</h1>
  </swiper-item>

  <swiper-item>
    <h1 style="color: #ffc900;">Item 3</h1>
  </swiper-item>
</swiper>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| direction | vertical/horizontal | String | 否 | vertical |
| width | 宽度 | String | 否 | 100% |
| height | 高度 | String | 否 | 100% |
| pagerColor | 导航颜色 | String | 否 | #333 |
| pagerBgColor | 导航颜色 | String | 否 | #333 透明度40% |

##### 方法

- void go(index: Integer) 滑动到指定页
- void next() 下一页
- void prev() 上一页

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Swiper)

----------

#### Scroll

##### 用法

```html
<template>
  <div class="page has-navbar" v-nav="{title: '滚动'}">
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <item v-for="(item, index) in items" @click.native="onItemClick(index)" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </item>

      <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">没有更多数据</div>
    </scroll>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [],
        infiniteCount: 0
      }
    },

    mounted() {
      for (let i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },

    methods: {
      onRefresh(done) {
        setTimeout(() => {
          let start = this.top - 1
          for (let i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10;

          done()
        }, 1500)
      },

      onInfinite(done) {
        setTimeout(() => {
          if (this.infiniteCount < 2) {
            let start = this.bottom + 1
            for (let i = start; i < start + 10; i++) {
              this.items.push(i + ' - keep walking, be 2 with you.')
            }
            this.bottom = this.bottom + 10;

            this.infiniteCount++
          }

          done()
        }, 1500)
      },

      onItemClick(index) {
        console.log(index)
      }
    }
  }
</script>
```

<p class="tip">
上面的例子通过 `slot="infinite"` 将加载更多的Loading效果替换为文字 `没有更多数据`
</p>

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| onRefresh | 下拉刷新回调 | Function | 否 | 无 |
| onInfinite | 无限加载回调 | Function | 否 | 无 |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Scroll)

----------

#### Scroller

<p class="tip">
**vonic** 整合了 [VueScroller](https://github.com/wangdahoo/vue-scroller)。关于 VueScroller 的用法及例子，请[查看这里](https://wangdahoo.github.io/vue-scroller/)。
</p>

----------

#### Cascade

##### 用法

```html
<template>
  <div class="page has-navbar" v-nav="{title: '级联'}">
    <div class="page-content padding-top">
      <div class="item item-divider">
        选择您所属的行政区划：
      </div>
      <cascade :fields="fields" :data="cities" :value="value" :on-change="onChange"></cascade>

      <!-- 使用远程数据 -->
      <!--
      <cascade
        :fields="fields"
        ajax-url="path/to/data"
        :value="value"
        :on-change="onChange"
      ></cascade>
      -->

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fields: [
          "省", "市", "区"
        ],

        cities: [
          ['北京市', '市辖区', '东城区'],
          // ...
        ],
        value: []
      }
    },

    methods: {
      onChange(value) {
        this.value = value
        console.log(this.value)
      }
    }
  }
</script>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| fields | 字段列表 | Array | 是 | 无 |
| data | 数据（二维数组） | Array | 否 | 无 |
| value | 值 | Array | 是 | 无 |
| ajaxUrl | 返回数据的url | Array | 否 | 无 |
| ajaxData | url返回数据对应的字段 | String | 否 | 无 |
| onChange | 选项变更回调 | Function | 否 | 无 |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Cascade)

----------

#### Accordion

##### 用法

```html
<accordion>
  <accordion-item title="农夫" content-height="110">
    <p>
      如果有一天我能够拥有一个大果园，
      我愿放下所有追求做个农夫去种田，
      每一个早晨我耕耘在绿野田园，
      每一个黄昏我守望在乡间的麦田。
      我会把忧虑都融化在夕阳里，
      让孤独的心等待秋收的欢喜。
    </p>
  </accordion-item>
  <accordion-item title="渔夫" content-height="110">
    <p>
      如果有一天我能够拥有一条渔船，
      我愿放下所有执着做个渔夫住在海边，
      每一个早晨我航行在晨曦的海面，
      每一个黄昏我遥望在无际的海云间。
      我会把思绪都消失在波涛里，
      让澎湃的心等待风雨后的平息。
    </p>
  </accordion-item>
</accordion>
```

##### 属性

- AccordionItem

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| title | 手风琴项标题 | String | 是 | 无 |
| contentHeight | 手风琴项容器高度 | Number | 否 | 100 |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Accordion)

----------

#### Datepicker

##### 用法

```html
<datepicker v-model="birthday" label="生日" date-format="yyyy-mm-dd"></datepicker>
```

##### 属性

| 属性名 | 描述 | 类型 | 必选 | 默认值 |
|-----|-----|-----|-----|-----|
| label | 标签文字 | String | 否 | 无 |
| value  | 值（用`v-model`替代以支持双向绑定） | String | 是 | - |
| placeholder | 占位符 | String | 否 | - |
| dateFormat | 日期格式 yyyy-mm-dd 或 yyyy/mm/dd | String | 否 | - |

> [演示](https://wangdahoo.github.io/vonic-documents/demo/#/Datepicker)

----------
