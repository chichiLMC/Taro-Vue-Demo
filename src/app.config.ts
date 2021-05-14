export default {
  pages: [
    'pages/index/index',
    'pages/center/index',
    'pages/other/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    list:[
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './assets/all.png',
        selectedIconPath: './assets/all-fill.png'
      },
      {
        pagePath: 'pages/center/index',
        text: '中心',
        iconPath: './assets/user.png',
        selectedIconPath: './assets/user-fill.png'
      }
    ],
    selectedColor: '#6190E8',
    backgroundColor: '#fff',
  }
}
