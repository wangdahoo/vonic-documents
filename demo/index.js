var MdButton = {
  template: '#md-button',
  methods: {
    onButtonClicked() {
      $toast.show('button clicked!')
    }
  }
}

var VonInput = {
  template: '#von-input',
  data() {
    return {
      username: '',
      password: '',
      username2: ''
    }
  }
}

var Search = {
  template: '#search',

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

var VonRadio = {
  template: '#von-radio',
  data() {
    return {
      gender: 0,
      genderOptions: ["男", "女"]
    }
  }
}

var VonCheckbox = {
  template: '#von-checkbox',
  data() {
    return {
      chosenTopics: [],
      topics: ["娱乐", "电影", "减肥", "搞笑", "科技"]
    }
  }
}

var VonToggle = {
  template: '#von-range',

  data(){
    return {
      toggleText: "是否开启推送",
      pushNotification: true,
      values: [true, true, true, true, true]
    }
  },

  methods: {
    triggerToggle() {
      this.pushNotification = !this.pushNotification
    }
  }
}

var VonRange = {
  template: '#von-range',
  data() {
    return {
      volume: 33,
      volume2: 66,
      min: 0,
      max: 100
    }
  }
}

var VonHeader = {
  template: '#von-header',
  data() {
    return {
      themes: [
        'light',
        'stable',
        'positive',
        'calm',
        'balanced',
        'energized',
        'assertive',
        'dark'
      ],
      themeIndex: 0
    }
  }
}

var Badge = {
  template: '#badge'
}

var List = {
  template: '#list'
}

var Cells = {
  template: '#cells',
  data() {
    return {
      icons: [
        'ion-android-arrow-up',
        'ion-android-arrow-down',
        'ion-android-arrow-back',
        'ion-android-arrow-forward',

        'ion-ios-arrow-up',
        'ion-ios-arrow-down',
        'ion-ios-arrow-left',
        'ion-ios-arrow-right',

        'ion-ios-arrow-thin-up',
        'ion-ios-arrow-thin-down',
        'ion-ios-arrow-thin-left',
        'ion-ios-arrow-thin-right',

        'ion-android-arrow-up',
        'ion-android-arrow-down',
        'ion-android-arrow-back',
        'ion-android-arrow-forward',
      ],

      entrances: [
        '<div class="entrance assertive"><i class="icon ion-ios-flame"></i><br><span>热门</span></div>',
        '<div class="entrance energized"><i class="icon ion-ios-star"></i><br><span>好评</span></div>',
        '<div class="entrance balanced"><i class="icon ion-ios-location"></i><br><span>附近</span></div>',
        '<div class="entrance positive"><i class="icon ion-ios-search"></i><br><span>搜索</span></div>',
      ]
    }
  },

  methods: {
    onCellClick(cellIndex) {
      console.log('cell ' + cellIndex + ' clicked');
    },

    getIcon(iconName, color) {
      return '<i class="' + iconName + '"></i>'
    },

    getItems(n) {
      let items = []
      for (let i = 0; i < n; i++) {
        items.push(this.getIcon(this.icons[i]))
      }
      return items
    }
  }
}

var Tabs = {
  template: '#tabs',
  data() {
    return {
      tabs: [
        "tab 1",
        "tab 2",
        "tab 3"
      ],

      tabIndex: 0,

      categories: [
        "女装",
        "男装",
        "内衣",
        "鞋靴",
        "箱包",
        "更多"
      ],

      categoryIndex: 0
    }
  },

  methods: {
    onTabClick(index) {
      console.log(index)
      this.tabIndex = index
    },

    onCategoryClick(index) {
      this.categoryIndex = index
      console.log('category changed, current tab index is:', index);
    }
  }
}

var ButtonBar = {
  template: '#button-bar',
  data() {
    return {
      tabs: [
        "tab 1",
        "tab 2",
        "tab 3"
      ],
      tab_0: 0,
      tab_1: 1,
      tab_2: 2,
      tab_3: 1,
      tab_4: 0,
      tab_5: 1,
      tab_6: 2,
      promotions: ["往期热卖", "抢购进行中"],
      promotionIndex: 0
    }
  },

  methods: {
    onTabClick(index) {
      this.tab_0 = index
    }
  }
}

var Scalable = {
  template: '#scalable'
}

var Swiper = {
  template: '#swiper',
  methods: {
    onClick() {
      $toast.show('clicked!')
    },

    next() {
      this.$refs.swiper.next()
    },

    prev() {
      this.$refs.swiper.prev()
    }
  }
}

var Scroll = {
  template: '#scroll',
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

var Cascade = {
  template: '#cascade',

  data() {
    return {
      fields: [
        "省", "市", "区"
      ],

      cities: [
        ['北京市', '市辖区', '东城区'],
        ['北京市', '市辖区', '西城区'],
        ['北京市', '市辖区', '朝阳区'],
        ['北京市', '市辖区', '丰台区'],
        ['北京市', '市辖区', '石景山区'],
        ['北京市', '市辖区', '海淀区'],
        ['北京市', '市辖区', '门头沟区'],
        ['北京市', '市辖区', '房山区'],
        ['北京市', '市辖区', '通州区'],
        ['北京市', '市辖区', '顺义区'],
        ['北京市', '市辖区', '昌平区'],
        ['北京市', '市辖区', '大兴区'],
        ['北京市', '市辖区', '怀柔区'],
        ['北京市', '市辖区', '平谷区'],
        ['北京市', '县', '密云县'],
        ['北京市', '县', '延庆县'],
        ['上海市', '市辖区', '黄浦区'],
        ['上海市', '市辖区', '徐汇区'],
        ['上海市', '市辖区', '长宁区'],
        ['上海市', '市辖区', '静安区'],
        ['上海市', '市辖区', '普陀区'],
        ['上海市', '市辖区', '闸北区'],
        ['上海市', '市辖区', '虹口区'],
        ['上海市', '市辖区', '杨浦区'],
        ['上海市', '市辖区', '闵行区'],
        ['上海市', '市辖区', '宝山区'],
        ['上海市', '市辖区', '嘉定区'],
        ['上海市', '市辖区', '浦东新区'],
        ['上海市', '市辖区', '金山区'],
        ['上海市', '市辖区', '松江区'],
        ['上海市', '市辖区', '青浦区'],
        ['上海市', '市辖区', '奉贤区'],
        ['上海市', '县', '崇明县'],
        ['浙江省', '杭州市', '上城区'],
        ['浙江省', '杭州市', '下城区'],
        ['浙江省', '杭州市', '江干区'],
        ['浙江省', '杭州市', '拱墅区'],
        ['浙江省', '杭州市', '西湖区'],
        ['浙江省', '杭州市', '滨江区'],
        ['浙江省', '杭州市', '萧山区'],
        ['浙江省', '杭州市', '余杭区'],
        ['浙江省', '杭州市', '富阳区'],
        ['浙江省', '杭州市', '桐庐县'],
        ['浙江省', '杭州市', '淳安县'],
        ['浙江省', '杭州市', '建德市'],
        ['浙江省', '杭州市', '临安市'],
        ['浙江省', '宁波市', '海曙区'],
        ['浙江省', '宁波市', '江东区'],
        ['浙江省', '宁波市', '江北区'],
        ['浙江省', '宁波市', '北仑区'],
        ['浙江省', '宁波市', '镇海区'],
        ['浙江省', '宁波市', '鄞州区'],
        ['浙江省', '宁波市', '象山县'],
        ['浙江省', '宁波市', '宁海县'],
        ['浙江省', '宁波市', '余姚市'],
        ['浙江省', '宁波市', '慈溪市'],
        ['浙江省', '宁波市', '奉化市'],
        ['浙江省', '温州市', '鹿城区'],
        ['浙江省', '温州市', '龙湾区'],
        ['浙江省', '温州市', '瓯海区'],
        ['浙江省', '温州市', '洞头区'],
        ['浙江省', '温州市', '永嘉县'],
        ['浙江省', '温州市', '平阳县'],
        ['浙江省', '温州市', '苍南县'],
        ['浙江省', '温州市', '文成县'],
        ['浙江省', '温州市', '泰顺县'],
        ['浙江省', '温州市', '瑞安市'],
        ['浙江省', '温州市', '乐清市'],
        ['浙江省', '嘉兴市', '南湖区'],
        ['浙江省', '嘉兴市', '秀洲区'],
        ['浙江省', '嘉兴市', '嘉善县'],
        ['浙江省', '嘉兴市', '海盐县'],
        ['浙江省', '嘉兴市', '海宁市'],
        ['浙江省', '嘉兴市', '平湖市'],
        ['浙江省', '嘉兴市', '桐乡市'],
        ['浙江省', '湖州市', '市辖区'],
        ['浙江省', '湖州市', '吴兴区'],
        ['浙江省', '湖州市', '南浔区'],
        ['浙江省', '湖州市', '德清县'],
        ['浙江省', '湖州市', '长兴县'],
        ['浙江省', '湖州市', '安吉县'],
        ['浙江省', '绍兴市', '越城区'],
        ['浙江省', '绍兴市', '柯桥区'],
        ['浙江省', '绍兴市', '上虞区'],
        ['浙江省', '绍兴市', '新昌县'],
        ['浙江省', '绍兴市', '诸暨市'],
        ['浙江省', '绍兴市', '嵊州市'],
        ['浙江省', '金华市', '婺城区'],
        ['浙江省', '金华市', '金东区'],
        ['浙江省', '金华市', '武义县'],
        ['浙江省', '金华市', '浦江县'],
        ['浙江省', '金华市', '磐安县'],
        ['浙江省', '金华市', '兰溪市'],
        ['浙江省', '金华市', '义乌市'],
        ['浙江省', '金华市', '东阳市'],
        ['浙江省', '金华市', '永康市'],
        ['浙江省', '衢州市', '柯城区'],
        ['浙江省', '衢州市', '衢江区'],
        ['浙江省', '衢州市', '常山县'],
        ['浙江省', '衢州市', '开化县'],
        ['浙江省', '衢州市', '龙游县'],
        ['浙江省', '衢州市', '江山市'],
        ['浙江省', '舟山市', '定海区'],
        ['浙江省', '舟山市', '普陀区'],
        ['浙江省', '舟山市', '岱山县'],
        ['浙江省', '舟山市', '嵊泗县'],
        ['浙江省', '台州市', '椒江区'],
        ['浙江省', '台州市', '黄岩区'],
        ['浙江省', '台州市', '路桥区'],
        ['浙江省', '台州市', '玉环县'],
        ['浙江省', '台州市', '三门县'],
        ['浙江省', '台州市', '天台县'],
        ['浙江省', '台州市', '仙居县'],
        ['浙江省', '台州市', '温岭市'],
        ['浙江省', '台州市', '临海市'],
        ['浙江省', '丽水市', '莲都区'],
        ['浙江省', '丽水市', '青田县'],
        ['浙江省', '丽水市', '缙云县'],
        ['浙江省', '丽水市', '遂昌县'],
        ['浙江省', '丽水市', '松阳县'],
        ['浙江省', '丽水市', '云和县'],
        ['浙江省', '丽水市', '庆元县'],
        ['浙江省', '丽水市', '景宁畲族自治县'],
        ['浙江省', '丽水市', '龙泉市']
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

var Accordion = {
  template: '#accordion'
}

var Datepicker = {
  template: '#datepicker',
  data() {
    return {
      birthday: '2000-01-01'
    }
  }
}

var ToastAndLoading = {
  template: '#toast-and-loading',
  methods: {
    loading(tips) {
      $loading.show(tips)

      setTimeout(() => {
        $loading.hide()
      }, 2000)
    },

    toast() {
      $toast.show('发送成功', 1500).then(() => {
        console.log('toast hide')
      })

      // $toast.show('发送成功', 3600*1000)

      // setTimeout(function () {
      //   $toast.hide()
      // }, 5000)
    },

    loadingAndToast(tips) {
      $loading.show(tips);

      setTimeout(() => {
        $toast.show('加载完成！')
      }, 1000)
    }
  }
}

var Dialog = {
  template: '#dialog',

  methods: {
    showAlert(effect) {
      $dialog.alert({
        content: 'Hello!',
        okTheme: 'positive',
        effect: effect || 'default'
      }).then(() => {
        console.log('alert hide.')
      })
    },

    showConfirm() {
      $dialog.confirm({
        content: '在"微信"中打开链接吗?',
        okText: '打开'
      }).then((res) => {
        console.log('confirm result: ', res)
      })
    },

    showAlertIOS() {
      $dialog.alert({
        theme: 'ios',
        title: '无法打开网页',
        content: 'Safari打不开网页，因为网址无效。',
        okText: '好'
      }).then(() => {
        console.log('alert hide.')
      })
    },

    showConfirmIOS() {
      $dialog.confirm({
        theme: 'ios',
        title: '在"微信"中打开链接吗?',
        cancelText: '取消',
        okText: '打开'
      }).then((res) => {
        console.log('confirm result: ', res)
      })
    },

    multiMode() {
      let options = {
        theme: 'ios',
        title: '测试',
        okText: '好'
      }

      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          options.content = `第${i+1}条消息`
          $dialog.alert(options)
        }, 500 * i)
      }
    }
  }
}

var Popup = {
  template: '#popup',

  methods: {
    showCustomPopup() {
      let options = {
        effect: 'scale',
        title: '',
        buttons: [
          {text: '确定'},
          {text: '取消'},
        ]
      }

      let popup = $popup.fromTemplate('<p style="margin-bottom: 0; text-align: center;">自定义内容</p>', options)

      popup.show().then((buttonIndex) => {
        console.log(buttonIndex)
      })
    },

    showCustomPopup2() {
      let options = {
        effect: 'scale',
        title: '',
        buttons: [
          {text: '确定', theme: 'assertive'}
        ],
        showClose: true
      }

      let template = `
        <p style="margin-bottom: 10px; text-align: center; font-size: 16px;">带有关闭按钮</p>
        <p style="margin-bottom: 0; text-align: center;">自定义内容</p>
      `

      let popup = $popup.fromTemplate(template, options)

      popup.show().then((buttonIndex) => {
        console.log(buttonIndex)
      })
    }
  }
}

var ActionSheet = {
  template: '#actionsheet',
  methods: {
    showActionSheet(theme) {
      $actionSheet.show({
        theme: theme || '',
        title: '标题',
        buttons: {
          'Action - 1': () => {
            console.log('action 1 called.')
          },

          'Action - 2': () => {
            console.log('action 2 called.')
          }
        }
      })
    }
  }
}

var routes = [
  { path: '/MdButton', component: MdButton },
  { path: '/VonInput', component: VonInput },
  { path: '/Search', component: Search },
  { path: '/VonRadio', component: VonRadio },
  { path: '/VonCheckbox', component: VonCheckbox },
  { path: '/VonToggle', component: VonToggle },
  { path: '/VonRange', component: VonRange },
  { path: '/VonHeader', component: VonHeader },
  { path: '/Badge', component: Badge },
  { path: '/List', component: List },
  { path: '/Cells', component: Cells },
  { path: '/Tabs', component: Tabs },
  { path: '/ButtonBar', component: ButtonBar },
  { path: '/Scalable', component: Scalable },
  { path: '/Swiper', component: Swiper },
  { path: '/Scroll', component: Scroll },
  { path: '/Cascade', component: Cascade },
  { path: '/Accordion', component: Accordion },
  { path: '/Datepicker', component: Datepicker },
  { path: '/ToastAndLoading', component: ToastAndLoading },
  { path: '/Dialog', component: Dialog },
  { path: '/Popup', component: Popup },
  { path: '/ActionSheet', component: ActionSheet }
]

Vue.use(Vonic.app, {
  routes: routes
})