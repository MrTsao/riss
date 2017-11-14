// pages/riverinfo/allriver.js
var util = require('../../utils/util.js');
var Charts = require('../../utils/wxcharts-min.js');
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
    idx: 0,
    status: 0,
    array: ['水文段1', '水文段2', '水文段3', '水文段4'],
    index: 0,
    chart: null,
    DO: 0,
    ORP: 0,
    CODmn: 0,
    NH3: 0,
    Tp: 0,
    Transp: 0,
    src: null
  },
  takePhoto: function () {
    var that = this
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: function (res) {
        that.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  createfeedback:function(e){
    wx.navigateTo({
      url: '/pages/riverinfo/addworkinfo',
    })
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
        idx: idx,
        DO: ((Math.round(20 * Math.random()) + 40) * 100) / 100,
        ORP: ((Math.round(60 * Math.random()) + 7) * 100) / 100,
        CODmn: ((Math.round(20 * Math.random()) + 60) * 100) / 100,
        NH3: ((Math.round(40 * Math.random()) + 40) * 100) / 100,
        Tp: ((Math.round(30 * Math.random()) + 25) * 100) / 100,
        Transp: ((Math.round(20 * Math.random()) + 57) * 100) / 100
      })
    });
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
    let chart = new Charts({
      canvasId: 'wxChartCanvas',
      type: 'line',
      categories: ['1月', '3月', '5月', '7月', '9月', '11月'],
      series: [{
        name: 'DO',
        data: [((Math.round(20 * Math.random()) + 40) * 100) / 100
          , ((Math.round(20 * Math.random()) + 40) * 100) / 100
          , ((Math.round(20 * Math.random()) + 40) * 100) / 100
          , ((Math.round(20 * Math.random()) + 40) * 100) / 100
          , ((Math.round(20 * Math.random()) + 40) * 100) / 100
          , ((Math.round(20 * Math.random()) + 40) * 100) / 100],
        format: function (val) {
          return val.toFixed(2);
        }
      }, {
        name: 'ORP',
        data: [((Math.round(60 * Math.random()) + 7) * 100) / 100
          , ((Math.round(60 * Math.random()) + 7) * 100) / 100
          , ((Math.round(60 * Math.random()) + 7) * 100) / 100
          , ((Math.round(60 * Math.random()) + 7) * 100) / 100
          , ((Math.round(60 * Math.random()) + 7) * 100) / 100
          , ((Math.round(60 * Math.random()) + 7) * 100) / 100],
        format: function (val) {
          return val.toFixed(2);
        }
      }, {
        name: 'CODmn',
        data: [((Math.round(20 * Math.random()) + 60) * 100) / 100
          , ((Math.round(20 * Math.random()) + 60) * 100) / 100
          , ((Math.round(20 * Math.random()) + 60) * 100) / 100
          , ((Math.round(20 * Math.random()) + 60) * 100) / 100
          , ((Math.round(20 * Math.random()) + 60) * 100) / 100
          , ((Math.round(20 * Math.random()) + 60) * 100) / 100],
        format: function (val) {
          return val.toFixed(2);
        }
      }, {
        name: 'NH3-H',
        data: [((Math.round(40 * Math.random()) + 40) * 100) / 100
          , ((Math.round(40 * Math.random()) + 40) * 100) / 100
          , ((Math.round(40 * Math.random()) + 40) * 100) / 100
          , ((Math.round(40 * Math.random()) + 40) * 100) / 100
          , ((Math.round(40 * Math.random()) + 40) * 100) / 100
          , ((Math.round(40 * Math.random()) + 40) * 100) / 100],
        format: function (val) {
          return val.toFixed(2);
        }
      }, {
        name: 'Tp',
        data: [((Math.round(30 * Math.random()) + 25) * 100) / 100
          , ((Math.round(30 * Math.random()) + 25) * 100) / 100
          , ((Math.round(30 * Math.random()) + 25) * 100) / 100
          , ((Math.round(30 * Math.random()) + 25) * 100) / 100
          , ((Math.round(30 * Math.random()) + 25) * 100) / 100
          , ((Math.round(30 * Math.random()) + 25) * 100) / 100],
        format: function (val) {
          return val.toFixed(2);
        }
      }, {
        name: 'Transp',
        data: [((Math.round(20 * Math.random()) + 57) * 100) / 100
          , ((Math.round(20 * Math.random()) + 57) * 100) / 100
          , ((Math.round(20 * Math.random()) + 57) * 100) / 100
          , ((Math.round(20 * Math.random()) + 57) * 100) / 100
          , ((Math.round(20 * Math.random()) + 57) * 100) / 100
          , ((Math.round(20 * Math.random()) + 57) * 100) / 100],
        format: function (val) {
          return val.toFixed(2);
        }
      }],
      yAxis: {
        title: '历史数据展示',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200
    });

    this.setData({
      chart: chart
    })
  },
  changestatus: function (e) {
    this.setData({
      status: e.target.dataset.status
    })
    if (e.target.dataset.status == "0") {
      this.data.chart.updateData()
    }
  }, bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
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