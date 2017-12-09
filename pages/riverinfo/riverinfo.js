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
    scrollH: 0,
    id: '',
    nme: '',
    idx: 0,
    status: 0,
    statustxt: ["基本信息", "河道水情", "实时视频", "一河一策", "河道巡视", "投诉信息"],
    array: ['水文段1', '水文段2', '水文段3', '水文段4'],
    index: 0,
    chart: null,
    wvchart: null,
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
  createfeedback: function (e) {
    wx.navigateTo({
      url: '/pages/riverinfo/addworkinfo',
    })
  },
  onLoad: function (options) {
    //调用应用实例的方法获取全局数据
    var that = this
    var SysInfo = wx.getSystemInfoSync()
    let rate = (SysInfo.screenWidth / 750)
    that.setData({
      scrollH: (1 / rate) * SysInfo.windowHeight - 20,
    })
    var stitle = options.nme || ""
    wx.setNavigationBarTitle({
      title: stitle,
    })
    util.Post(this, "LOAD", null, function (that, data) {
      let idx = 0
      for (var i = 0; i < data.rows.length; i++) {
        if (data.rows[i].riverNo == options.id) {
          idx = i;
          break;
        }
      }
      that.setData({
        rivers: data.rows,
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

    let date = new Date();
    console.log(date)
    let wvchart = new Charts({
      canvasId: 'wxWVCanvas',
      type: 'area',
      categories: [
        new Date(date.valueOf() - 3 * 3600 * 1000).getHours().toString() + "点",
        new Date(date.valueOf() - 2 * 3600 * 1000).getHours().toString() + "点", new Date(date.valueOf() - 1 * 3600 * 1000).getHours().toString() + "点", date.getHours().toString() + "点"],
      series: [{
        name: '警戒值',
        color: '#ffffff',
        data: [50
          , 50
          , 50
          , 50],
        format: function (val) {
          return val.toFixed(2);
        }
      }, {
        name: '水位',
        color: '#7cb5ec',
        data: [((Math.round(20 * Math.random()) + 10) * 100) / 100
          , ((Math.round(20 * Math.random()) + 10) * 100) / 100
          , ((Math.round(20 * Math.random()) + 10) * 100) / 100
          , ((Math.round(20 * Math.random()) + 10) * 100) / 100],
        format: function (val) {
          return val.toFixed(2);
        }
      }],
      yAxis: {
        title: '实时水位',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200
    });

    this.setData({
      chart: chart,
      wvchart: wvchart
    })
  },
  changestatus: function (e) {
    this.setData({
      status: e.target.dataset.status
    })
    if (e.target.dataset.status == "0") {
      this.data.chart.updateData()
      this.data.wvchart.updateData()
    }
  }, bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
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
  dwnLogsFile: function (e) {
    let that = this
    const downloadTask = wx.downloadFile({
      url: "https://www.yondo.cc/ris/UpLoad/logs/001.pdf",
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.openDocument(
            {
              filePath: res.tempFilePath,
              fileType:"pdf",
              success: function (res) {
                wx.showToast({
                  title: '成功',
                  icon: 'success',
                  duration: 2000
                })
              }
            })
        }
      }
    })
    downloadTask.onProgressUpdate((res) => {
      that.setData({
        dcent: res.progress
      })
    })
  },
  onReachBottom: function (e) {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})