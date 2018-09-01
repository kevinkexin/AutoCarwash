// pages/index/Main.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: 'https://www.atombooster.cn/BabyCarwash/Home/Login'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    var that = this;
    if (!options.url)
    {
      //wx.getStorage({
      //  key: 'userInfo',
      //  success: function (res) {
      //    console.log(res.data)
      //   that.setData({ 
      //      url: 'https://www.atombooster.cn/BabyCarwash/Home/Login?openid=' +
      //      res.data.openId + '&nickname=' + 
      //      res.data.nickName + '&avatarUrl=' +  
      //      res.data.avatarUrl + '&unionId=' + res.data.unionId,
      //    })
      //  }
      //})
    }   
    else
    {
      options.url ? this.setData({ url: options.url }) : wx.navigateBack({ delta: 2 });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //var that = this;
    //console.log("shwn");
    //that.onload();
    var that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        console.log(res.data)
        that.setData({
          url: 'https://www.atombooster.cn/BabyCarwash/Home/Login?openid=' +
          res.data.openId + '&nickname=' +
          new Date() + '&avatarUrl=' +
          res.data.avatarUrl + '&unionId=' + res.data.unionId,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})