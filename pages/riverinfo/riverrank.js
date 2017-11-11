// pages/riverinfo/riverrank.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    PAGE: "RIVER_LIST",
    rivers: [],
    background: [{
      id: "item-1",
      url: "https://www.yondo.cc/ris/images/102.jpg"
    }, {
      id: "item-2",
      url: "https://www.yondo.cc/ris/images/101.jpg"
    }, {
      id: "item-2",
      url: "https://www.yondo.cc/ris/images/103.jpg"
    }]
  },

  onLoad: function (options) {
    //调用应用实例的方法获取全局数据
    var that = this
    util.Post(this, "LOAD", null, function (that, data) {
      for (var i = 0; i < data.data.length; i++) {
        data.data[i].DO = ((Math.round(10 * Math.random()) + 40) * 100) / 100
        data.data[i].ORP = ((Math.round(10 * Math.random()) + 7) * 100) / 100
        data.data[i].CODmn = ((Math.round(10 * Math.random()) + 60) * 100) / 100
        data.data[i].NH3 = ((Math.round(10 * Math.random()) + 40) * 100) / 100
        data.data[i].Tp = ((Math.round(10 * Math.random()) + 25) * 100) / 100
        data.data[i].Transp = ((Math.round(10 * Math.random()) + 57) * 100) / 100
        if (data.data[i].riverNo == "HD0004") {
          data.data[i].rate = 1
        } else if (data.data[i].riverNo == "HD0009") {
          data.data[i].rate = 2
        } else if (data.data[i].riverNo == "HD0010") {
          data.data[i].rate = 3
        } else {
          data.data[i].rate = data.data[i].DO * 0.4 + data.data[i].ORP * 0.9 + data.data[i].CODmn * 0.3 + data.data[i].NH3 * 0.9 + data.data[i].Tp * 0.2 + data.data[i].Transp * 0.7
        }
      }

      that.setData({
        rivers: data.data.sort(util.compare("rate"))
      })
    });
  },
  onPullDownRefresh() {
    util.Post(this, "LOAD", null, function (that, data) {
      that.setData({
        rivers: data.data
      })
    });
    wx.stopPullDownRefresh()
  },
  onReachBottom: function (e) {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
