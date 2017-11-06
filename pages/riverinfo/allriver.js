// pages/riverinfo/allriver.js
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
      }],
  },

  onLoad: function (options) {
    //调用应用实例的方法获取全局数据
    var that = this
    util.Post(this, "LOAD", null, function (that, data) {
      that.setData({
        rivers: data.data
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