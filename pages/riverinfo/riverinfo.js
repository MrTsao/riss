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
    id: '',
    nme: '',
    idx: -1
  },

  onLoad: function (options) {
    //调用应用实例的方法获取全局数据
    var that = this
    var stitle = options.nme || ""
    wx.setNavigationBarTitle({
      title: stitle,
    })
    util.Post(this, "LOAD", null, function (that, data) {
      let idx = -1
      for (var i = 0; i < data.data.length; i++) {
        if (data.data[i].riverNo == options.id) {
          idx = i;
          break;
        }
      }
      that.setData({
        rivers: data.data,
        id: options.id,
        nme: options.nme,
        idx: idx
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