//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // 登录
    //console.log('aaaa');
    var that = this;
    wx.login({
      success: function (r) {
        var code = r.code;//登录凭证
        if (code) {
          //2、调用获取用户信息接口
          //console.log(code);
          wx.request({
            url: 'https://www.atombooster.cn/BabyCarwash/WechatOAuth/OnMiniProgram?code=' + code,//自己的服务接口地址
            method: 'post',
            success: function (data) {
              //4.解密成功后 获取自己服务器返回的结果
              if (data.data.success) {
                //var userInfo_ = data.data.openId;
                //console.log('SessionId: ' + data.data.sessionId);
                that.globalData.sessionId = data.data.sessionId;
                
                if (that.sessionIdCallback) {
                  that.sessionIdCallback(data.data.sessionId);
                }
              } else {
                console.log('解密失败')
              }
            },
            fail: function () {
              console.log('系统错误')
            }
          })//End of Request
        } else {
          console.log('获取用户登录态失败！' + r.errMsg)
        }
      },
      fail: function () {
        console.log('登陆失败')
      }
    })
  },
  globalData: {
    sessionId: ''
  },
})