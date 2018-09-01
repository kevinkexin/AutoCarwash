//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    url: '',
    canIUse: wx.canIUse('web-view')
  },
  onLoad: function () {
    var that = this;  
    if (app.globalData.sessionId && app.globalData.sessionId != '') {
      this.setData({url:''});
      this.setData({        
        url: 'https://www.atombooster.cn/BabyCarwash/Home/Index?sessionId=' + app.globalData.sessionId
      });
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      this.setData({ url: '' });
      app.sessionIdCallback = sessionId => {
        if (app.globalData.sessionId && app.globalData.sessionId != '')         {
          this.setData({
            url: 'https://www.atombooster.cn/BabyCarwash/Home/Index?sessionId=' + app.globalData.sessionId
          });
        }
      }
    }    
    //options.url ? this.setData({ url: options.url }) : wx.navigateBack({ delta: 2 });
  },
  onShareAppMessage: function () {
    return {
      title: '分享给好友',
      path: 'pages/index/index'
    }
  }
});