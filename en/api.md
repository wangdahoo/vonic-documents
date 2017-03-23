---
title: API
nav: english
---

## API

<p class="danger">
  All the demo codes from this documentation，can be found [here](https://github.com/wangdahoo/vonic-documents/blob/master/demo/)
</p>

### Components

----------

#### MdButton

##### Usage

```html
  <md-button class="button button-positive" @click.native="clicked()">
    Click Me
  </md-button>

  <!-- In addition to all the button-related classes from ionic, there is a new `button-fab` class, added to support the fab style button -->

  <md-button class="button button-energized button-fab">
    <i class="icon ion-home"></i>
  </md-button>
```

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/MdButton)

----------

#### VonInput

##### Usage

```html
<von-input
  type="text"
  v-model="username"
  placeholder="username/phone/email"
  label="username">
</von-input>
```

##### Properties

| property | description | type | required | default |
| ----- | ----- | ----- | ----- | ----- |
| type  | Type | String | No | text |
| label  | Lable | String | No | -  |
| value  | Value (use `v-model` for two-way binding) | String、Number | Yes | -  |
| placeholder | Placeholder | String | No | -  |
| floatingLabel | Floating Label | String | No | false |

<p class="warning">
   The `type` in `VonInput`  only supports the following values `text`、`password`、`email`、`tel`
</p>

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/VonInput)

----------

#### Search

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Search Box'}">
    <div class="page-content">
      <search v-model="keywords" placeholder="enter key words" :on-search="onSearch" :on-cancel="onCancel"></search>

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

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| value | Value (use `v-model` for two-way binding) |  String | Yes | - |
| placeholder | Placeholder |  String | No | Search |
| onSearch | search callback |  Function | No |  -  |
| onCancel | cancel callback |  Function | No |  -  |
| cancelText | cancel text |  String | No | Cancel |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Search)

----------

#### VonRadio

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Radio box'}">
    <div class="page-content">
      <div class="item item-divider">
        Select Gender:
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
        genderOptions: ["Male", "Female"]
      }
    }
  }
</script>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| value | Value（ Use`v-model` to support two-way binding) |  Number | Yes |  -  |
| options | Radio button options | Array | Yes |  -  |
| theme | Theme |  String | No | assertive |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/VonRadio)

----------

#### VonCheckbox

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Checkbox'}">
    <div class="page-content">
      <div class="item item-divider">
        Select Topic:
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
        topics: ["Entertainment", "Movie", "Lose weight", "Funny", "Technology"]
      }
    }
  }
</script>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| value | Value（ Use`v-model` to support two-way binding) |  Array | Yes |  -  |
| options | Options| Array | Yes |  -  |
| theme |  |  String | No | assertive |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/VonCheckbox)

----------

#### VonToggle

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Switch'}">
    <div class="page-content padding-top">
      <von-toggle :text="toggleText" v-model="pushNotification"></von-toggle>
      <div class="item item-divider">Switch: <span>{{ pushNotification ? 'open' : 'close' }}</span></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        toggleText: "Enable push",
        pushNotification: true
      }
    }
  }
</script>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| text | Label text | String | Yes |  -  |
| value | Value（Use`v-model` to support two-way binding） |  Boolean | Yes |  -  |
| theme | Theme | String | No | assertive |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/VonToggle)

----------

#### VonRange

##### Usage

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
  <!-- use the slots text-left / text-right for better text distribution around the range slider -->
  <i class="icon ion-volume-low" slot="text-left"></i>
  <i class="icon ion-volume-high" slot="text-right"></i>
</von-range>

```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| value | Value (Use`v-model` to support two-way binding） | Number | Yes |  -  |
| min | Minimum value | Number | Yes |  -  |
| max | Maximum value | Number | Yes |  -  |
| theme | Theme | String | No | assertive |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/VonRange)

----------

#### VonHeader

##### Usage

```html
<!-- Use title / left / right respectively for titles, left button, and right button -->
<von-header theme="dark">
  <button class="button button-icon ion-ios-arrow-back" slot="left"></button>
  <span slot="title">Text Label</span>
  <button class="button button-icon ion-navicon" slot="right"></button>
</von-header>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| theme | Theme | String | No | light |


> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/VonHeader)

----------

#### Badge

##### Usage

```html
<badge num="2"></badge>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| num | Badge number、Text | String | No |  -  |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Badge)

----------

#### List

Use `<list>` and `<item>` to make effortless list layout

##### Usage

```html

<!-- Use .list-ios to implement ios style list (with Left indent) -->
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

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/List)

----------

#### Cells

##### Usage

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
          '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>Hot</span></div>',
          '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>Good ratings</span></div>',
          '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>Nearby</span></div>',
          '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>Search</span></div>'
        ]
      }
    }
  }
</script>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| row | number of rows | Number | No | 3 |
| col | number of columns |  Number | No | 3 |
| items | Items |  Array | Yes |  -  |
| onCellClick | Cell click callback |  Function | No |  -  |
| outerBorder | whether to show outer borders | Boolean, String | No | true |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Cells)

----------

#### Tabs

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'NavBar'}">
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

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| position | top/bottom | String | No | top |
| bgColor | background color | String | No | light |
| tabColor | Color | String | No | positive |
| tabItems | tab items | Array | Yes |  -  |
| activeIndex | active index | Number | Yes |  -  |
| onTabChanged | tab click callback | Function | No |  -  |

<p class="tip">
bgColor、tabColor values are all vonic scene color
</p>

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Tabs)

----------

#### ButtonBar

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'Button bar'}">
    <div class="page-content padding-top">
      <div class="padding">
        Categories:
      </div>
      <div class="padding light-bg">
        <button-bar theme="assertive" :tab-items="promotions" :tab-index="promotionIndex"
          :on-tab-click="index => promotionIndex = index"></button-bar>
      </div>
      <div class="item thin-border">
        Selected: {{ promotions[promotionIndex] }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        promotions: ["Recent hot sell", "Purchase in progress"],
        promotionIndex: 0
      }
    }
  }
</script>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| tabItems | Tab Items | Array | Yes |  -  |
| tabIndex | Tab Index | Number | Yes |  -  |
| theme | Theme | String | No | positive |
| onTabClick | Tab click callback | Function | No |  -  |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/ButtonBar)

----------

#### Scalable

##### Usage

```html
<template>
  <div class="padding">

    <!-- Set the width to parent container width, and height to 100px -->
    <scalable width="100%" height="100" style="background-color: #FFF;">
      <p>
        Font Size = 16px (equal 8px)
      </p>
    </scalable>
  </div>
</template>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| scale | scale | Number | No | 2 |
| width | container width | String | No | 100% |
| height | container height | String | No | 100% |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Scalable)

----------

#### Swiper

##### Usage

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

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| direction | vertical/horizontal | String | No | vertical |
| width | width | String | No | 100% |
| height | height | String | No | 100% |
| pagerColor | pager color | String | No | #333 |
| pagerBgColor | pager background color | String | No | #333 opacity 40% |

##### Methods

- go(index: Integer) Slide to the specified page
- next() Next Page
- prev() Previous Page

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Swiper)

----------

#### Scroll

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'scroll'}">
    <scroll class="page-content"
            :on-refresh="onRefresh"
            :on-infinite="onInfinite">
      <item v-for="(item, index) in items" @click.native="onItemClick(index)" :class="{'item-stable': index % 2 == 0}">
        {{ item }}
      </item>

      <div v-if="infiniteCount >= 2" slot="infinite" class="text-center">No more data</div>
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
The above example is uses `slot="infinite"` to replace the Loading effect with  `No more data`
</p>

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| onRefresh | Refresh callback | Function | No | - |
| onInfinite | infinite Loading callback | Function | No | - |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Scroll)

----------

#### Scroller

<p class="tip">
**vonic** Integrated [VueScroller](https://github.com/wangdahoo/vue-scroller)。See usage and examples about VueScroller [Here](https://wangdahoo.github.io/vue-scroller/)。
</p>

----------

#### Cascade

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'cascade'}">
    <div class="page-content padding-top">
      <div class="item item-divider">
        Choose your administrative divisions:
      </div>
      <cascade :fields="fields" :data="cities" :value="value" :on-change="onChange"></cascade>

      <!-- Use remote data -->
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
          "province", "city", "district"
        ],

        cities: [
          ['Beijing', 'City area', 'Dongcheng district'],
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

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| fields | Field List | Array | Yes | - |
| data | Two-dimensional array | Array | No | - |
| value | Value | Array | Yes | - |
| ajaxUrl | Data Return url | Array | No | - |
| ajaxData | Returns the field corresponding to the data from the url | String | No | - |
| onChange | Option change callback | Function | No | - |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Cascade)

----------

#### Accordion

##### Usage

```html
<accordion>
  <accordion-item title="farmer" content-height="110">
    <p>
      Each day I go into the fields
      to see what is growing
      and what remains to be done.
      It is always the same thing: nothing
      is growing, everything needs to be done.
      Plow, harrow, disc, water, pray
      till my bones ache and hands rub
      blood-raw with honest labor—
      all that grows is the slow
      intransigent intensity of need.
    </p>
  </accordion-item>
  <accordion-item title="Fisherman" content-height="110">
    <p>
      Three summers since I chose a maid,
     Too young maybe—but more’s to do
     At harvest-time than bide and woo.
     When us was wed she turned afraid
     Of love and me and all things human;
     Like the shut of a winter’s day
     Her smile went out, and ’twadn’t a woman—
     More like a little frightened fay.
     One night, in the Fall, she ran away.
    </p>
  </accordion-item>
</accordion>
```

##### Properties

- AccordionItem

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| title | Accordion Title | String | Yes | - |
| contentHeight | Accordion container height | Number | No | 100 |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Accordion)

----------

#### Datepicker

##### Usage

```html
<datepicker v-model="birthday" label="birthday" date-format="yyyy-mm-dd"></datepicker>
```

##### Properties

| Property | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| label | Label text | String | No | - |
| value  | Value | String | Yes |  - |
| placeholder | placeholder | String | No |-   |
| dateFormat | date format yyyy-mm-dd or yyyy/mm/dd | String | No | - |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Datepicker)

----------

### Services

#### $toast、$loading

##### Usage

```js
/* Show a text prompt, and close after 3 seconds*/
$toast.show('This is a Yes prompt', 3000).then(() => {
  console.log('toast hide')
})

/* Display a text prompt and close it manually*/
$toast.show('connecting..', 1E10)

/* close programmatically */
$toast.hide()

/* Display a load prompt and close it programmatically*/
$loading.show('loading..')

setTimeout(() => {
  $loading.hide()
}, 2000)
```

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/ToastAndLoading)

----------

#### $dialog

##### Usage

```js
/* Warning dialog */
$dialog.alert({
  effect: 'default',
  title: 'dialog',
  content: 'This is a Yes dialog',
  // button text
  okText: 'confirm',
  // button theme
  okTheme: 'assertive'
})

/* Confirm dialog */
$dialog.confirm({
  // set theme to ios style
  theme: 'ios',
  title: 'open the link on Wechat?',
  // cancel button text
  cancelText: 'cancel',
  // confirm button text
  okText: 'open'
}).then((res) => {
  console.log('confirm result: ', res)
})
```

[More use cases](https://github.com/wangdahoo/vonic/blob/master/demo/components/Dialog.vue)

##### Methods

###### Promise alert(options: Object)

options

| Field name | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| effect |  possible values: default、scale、slide | String | No | default |
| title | title | String | No | prompt |
| content | content | String | No | - |
| okText | ok button text | String | No | confirm |
| okTheme | ok button theme | String | No | assertive |
| theme | theme style default、ios | String | No | default |

<p class="warning">
When the theme is set to iot, other theme related parameters(okTheme, cancelTheme，effect etc.) will no longer take effect.
</p>

###### Promise confirm(options: Object)

options

| Field name| Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| effect | possible values:  default/scale/slide | String | No | default |
| title | title | String | No | prompt |
| content | content | String | No | - |
| okText | ok button text | String | No | confirm |
| okTheme | ok button theme | String | No | assertive |
| cancelText | cancel button text | String | No | confirm |
| cancelTheme | cancel button theme | String | No | default |
| theme | theme style default、ios | String | No | default |

<p class="warning">
When the theme is set to iot, other theme related parameters(okTheme, cancelTheme，effect etc.) will no longer take effect.
</p>

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Dialog)

----------

#### $popup

##### Usage

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'popup'}">
    <div class="page-content padding-top">
      <div class="item item-icon-right thin-border" @click="showPopup()">
        Show Popup
        <i class="icon ion-ios-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      showPopup() {
        let options = {
          effect: 'scale',
          title: 'title',
          buttons: [
            {text: 'confirm'},
            {text: 'cancel'},
          ]
        }

        let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;"> content</p>', options)

        popup.show().then((buttonIndex) => {
          console.log(buttonIndex)
        })
      }
    }
  }
</script>
```

##### Methods

###### Popup fromTemplate(template: String, options: Object)

Create a popup instance based on string template

- template

String template

- options

| Field name | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| effect | effect default/scale/slide | String | No | default |
| title | title | String | No | - |
| cssClass | class for custom style | String | No | - |
| showClose | show or hide the close button | Boolean | No | false |
| buttons | button definition | Array | No | - |

###### Popup fromTemplateUrl(templateUrl: String, options: Object)

 Create popup instance from templateUrl. The template is fetched via an ajax Request from the templateUrl.

- templateUrl

returns template url (string)

- options

same as above

##### Popup example method

###### show()

show modal，returns a Promise after close event

###### hide()

close modal

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/Popup)

----------

#### $actionSheet

##### Usage

```js
$actionSheet.show({
  // supports 3 types of themes ios/android/weixin (Wechat)
  theme: 'weixin',
  title: 'title',
  buttons: {
    // Action sheet theme (Text) and Callback Functions
    'Action - 1': () => {
      console.log('action 1 called.')
    },

    'Action - 2': () => {
      console.log('action 2 called.')
    }
  }
})
```

##### Methods

###### show(options: Object)

- options

| Field name | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| theme | Action sheet theme | String | No | ios |
| title | Action sheet title | String | Yes | - |
| buttons | Action sheet options text and callback functions | Object | Yes | - |
| cancelText | Cancel text（ applicable when the theme is ios or weixin） | String | No | Cancel |

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/#/ActionSheet)

----------

#### $tabbar

##### Usage

```html
<template>
  <div class="page" v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#44CC00', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home-outline',
            text: 'home',
            path: '/home'
          },
          {
            iconOn: 'ion-ios-pricetags',
            iconOff: 'ion-ios-pricetags-outline',
            text: 'discount',
            path: '/discount'
          },
          {
            iconOn: 'ion-ios-cart',
            iconOff: 'ion-ios-cart-outline',
            text: 'cart',
            path: '/cart',
            badge: '5'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person-outline',
            text: 'Me',
            path: '/user'
          }
        ]
      }
    },

    methods: {
      menuClicked(menuIndex) {
        console.log(menuIndex)
      }
    },

    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>
```

Corresponding nested routing configuration:

```js
  let routes = [
    {
      path: '/',
      component: Index,
      children: [
        { path: 'home', component: Home },
        { path: 'discount', component: Discount },
        { path: 'cart', component: Cart },
        { path: 'user', component: User }
      ]
    }
  ]
```

[Complete code](https://github.com/wangdahoo/vonic-documents/blob/master/demo/tabbar.html)

##### `v-tabbar`

| Parameter name | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| menus | menu items list| Array | Yes | - |
| menuColor | menu color | String | No | #888 |
| activeMenuColor | active menu color | String | No | #EA5A49 |
| onMenuClick | menu click callback | Function | No | - |

##### menu item

| Parameter name | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| iconOn | icon class for selected item | String | Yes | - |
| iconOff | icon class for unselected item | String | Yes | - |
| text | menu item text | String | Yes | - |
| path | corresponding routing path  | String | No | - |
| badge | corresponding badge text | String | No | - |


> [Demo](https://wangdahoo.github.io/vonic-documents/demo/tabbar.html#/home)

----------

#### $modal

##### Usage

Create a `.page-content` class to package the content component `MyModal.vue`

```html
<template>
  <div class="page-content padding padding-top">
    <p>
      I have a little donkey and I never ride it.
    </p>

    <button v-if="!showMore" class="button button-assertive button-small" @click="more()">show more</button>
    <p v-if="showMore">
      One day I rush to ride it to go to the market.
    </p>

    <button class="button button-assertive button-small" @click="showAlert()">show dialog</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMore: false
      }
    },

    methods: {
      more() {
        this.showMore = true
      }
    }
  }
</script>
```

Create a page component for loading the above components, use `$modal.fromComponent` to load a component as a modal

```html
<template>
  <div class="page has-navbar" v-nav="{title: 'modal'}">
    <div class="page-content padding padding-top">
      <button class="button button-assertive button-block" @click="showModal()">default</button>
    </div>
  </div>
</template>
<script>
  import MyModal from './MyModal.vue'

  export default {
    data() {
      return {
        modal: undefined
      }
    },

    mounted() {
      $modal.fromComponent(MyModal, {
        title: 'modal title',
        theme: 'default'
      }).then((modal) => {
        this.modal = modal
      })
    },

    destroyed() {
      if (this.modal)
        $modal.destroy(this.modal)
    },

    methods: {
      showModal() {
        this.modal.show()
      }
    }
  }
</script>
```

##### Methods

###### Promise $modal.fromComponent(contentComponent: VueComponent, options: Object)

Create modal

- contentComponent: content component to be loaded into the modal

- options

| Field name | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| title | modal title | String | No | - |
| theme | modal theme | String | No | - |
| destroyOnHide | destroy on hide | Function | No | false |

##### Modal Example method

###### show()

show modal

###### hide()

hide modal

> [Demo](https://wangdahoo.github.io/vonic-documents/demo/modal.html)

----------

### Other

#### Vonic.app

##### setConfig(name: String)

set `Vonic.app` as Default startup item

| Start item | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| beforeEach | Global before Navigation hook | Func | No | - |
| afterEach | Global after Navigation hook | Func | No | - |
| routerOptions | Router constructor parameters（except routes) | Object | No | - |
| pushMethod | Route switching, push or replace | String | No | push |
| pageTransition | custom page transition for ios and android  | String | No | - |

##### getConfig(name: String)

get `Vonic.app` Default startup item

##### nextDirection(direction: String)

Programmatically define the direction of the next route

| Parameter name | Description | Type | Required | Default |
|-----|-----|-----|-----|-----|
| direction | page switch direction methods: forward or back | String | Yes | - |

##### pageContentScrollTop(value: Integer)

set or get the scrolling position of the container `.page-content` （call without the value argument to get the position）
