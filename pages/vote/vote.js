// servicelist.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    userInfo: { avatarUrl: "/image/icon.png" },
    HEAD_IMG: "",
    PAGE: "PROFILE",
    items: [{
      txt: "个人资料",
      color: "#3CB371",
      img: "/image/user.png",
      url: "/pages/profile/profile",
      spilted: true
    }, {
      txt: "互动参与",
      color: "#cd853f",
      img: "/image/doller.png",
      url: "/pages/vote/voteact",
      spilted: true
    }, {
      txt: "我的投诉",
      color: "#BDB76B",
      img: "/image/Reading.png",
      url: "/pages/feedback/feedbacklist"
    }, {
      txt: "我的办公",
      color: "#778899",
      img: "/image/class.png",
      url: "/",
      spilted: true
    }, {
      txt: "推荐给朋友",
      color: "#008B8B",
      img: "/image/share.png",
      url: "/"
    }],
    info: [{ RATE: '-', DT: '-', US: '-' }],
    week: 0,
    COLOR: ['#6699cc', '#BC8F8F', '#778899', '#5F9EA0', '#51AD8F', '#81B281', '#A8A35D']
  },
  onLoad: function (options) {
    var that = this
    let dt = new Date()
    //调用应用实例的方法获取全局数据
    app.getUserInfo(null, function (user) {
      that.setData({
        userInfo: user
      })
    })
  }
})