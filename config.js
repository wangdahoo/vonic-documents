self.$config = {
  home: './zh/README.md',
  nav: {
   default: [
     {title: '指南', path: '/'},
     {title: 'API', path: '/zh/api'},
     {title: 'English', type: 'dropdown', items: [
         {title: '简体中文', path: '/'},
         {title: 'English', path: '/en/'}
     ]}
   ],
   english: [
     {title: 'Guide', path: '/en/'},
     {title: 'API', path: '/en/api'},
     {title: '简体中文', type: 'dropdown', items: [
         {title: '简体中文', path: '/'},
         {title: 'English', path: '/en/'}
     ]}
   ]
  },

  repo: 'wangdahoo/vonic',

  marked: {
    smartypants: true
  },

  tocVisibleDepth: 4
}
