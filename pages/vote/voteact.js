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
    let id = options.id || ""
    let rows = []
    util.Post(this, "LOAD", null, function (that, data) {
      for (var i = 0; i < data.rows.length; i++) {
        data.rows[i].voted = false;
        data.rows[i].DO = ((Math.round(10 * Math.random()) + 40) * 100) / 100
        data.rows[i].ORP = ((Math.round(10 * Math.random()) + 7) * 100) / 100
        data.rows[i].CODmn = ((Math.round(10 * Math.random()) + 60) * 100) / 100
        data.rows[i].NH3 = ((Math.round(10 * Math.random()) + 40) * 100) / 100
        data.rows[i].Tp = ((Math.round(10 * Math.random()) + 25) * 100) / 100
        data.rows[i].Transp = ((Math.round(10 * Math.random()) + 57) * 100) / 100
        if (data.rows[i].riverNo == "HD0001") {
          data.rows[i].rate = 1
        } else if (data.rows[i].riverNo == "HD0002") {
          data.rows[i].rate = 2
        } else if (data.rows[i].riverNo == "HD0003") {
          data.rows[i].rate = 3
        } else {
          data.rows[i].rate = data.rows[i].DO * 0.4 + data.rows[i].ORP * 0.9 + data.rows[i].CODmn * 0.3 + data.rows[i].NH3 * 0.9 + data.rows[i].Tp * 0.2 + data.rows[i].Transp * 0.7
        }
      }
      let sortdata = data.rows.sort(util.compare("rate"))
      for (var j = 0; j < sortdata.length; j++) {
        sortdata[j].no = j
        if (id != "" && sortdata[j].riverNo == id) {
          rows.push(sortdata[j])
        }
      }
      if (id != "") {
        that.setData({
          rivers: rows
        })
      } else {
        that.setData({
          rivers: sortdata
        })
      }
    });
  }, dothumbs: function (e) {
    let id = e.currentTarget.dataset.id
    let river = this.data.rivers
    for (let i = 0; i < river.length; i++) {
      if (river[i].riverNo == id) {
        river[i].voted = !river[i].voted
        if (river[i].voted) {
          river[i].DO += 1
        } else {
          river[i].DO -= 1
        }
      }
    }
    this.setData({
      rivers: river
    })
  },
  onPullDownRefresh() {
    util.Post(this, "LOAD", null, function (that, data) {
      that.setData({
        rivers: data.rows
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
