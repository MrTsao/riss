//index.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    PAGE: "INDEX",
    userInfo: {},
    height: 0,
    width: 0,
    news: [{ CPID: '001', CNME: '党的十九届一中全会选举习近平为中央委员会总书记' }, { CPID: '002', CNME: '水利部召开2017年第8次中央水利投资计划执行月调度会商会议' }, { CPID: '003', CNME: '水利部 环境保护部印发《贯彻落实<关于全面推行河长制的意见>实施方案》' }, { CPID: '004', CNME: '三峡水库连续八年实现175米试验性蓄水目标 国家防总长江防总科学调度水库群实现多赢' }, { CPID: '005', CNME:'李克强主持召开国务院常务会部署节水供水重大工程建设等'}],
    COLOR: ['#6699cc', '#778899', '#99cc66', '#5F9EA0', '#8FBC8F', '#BDB76B'],
    goodrivers: [{ CPID: 'HD0004', CNME: '滠水河' }, { CPID: 'HD0009', CNME: '金水河' }, { CPID: 'HD0010', CNME: '断琴小河' }],
    riverinfo: [{ CPID: 'HD0001', CNME: '长江武汉段' }, { CPID: 'HD0002', CNME: '汉江武汉段' }, { CPID: 'HD0003', CNME: '府环河' }, { CPID: 'HD0004', CNME: '滠水河' }],
    feedbacks: [{ CPID: '001', CNME: '长江武汉段大量漂浮物未清理' }, { CPID: '003', CNME: '府环河水质变差' }],
    workitems: [{ CPID: '001', CNME: '长江武汉段大量漂浮物已安排清理' }, { CPID: '003', CNME: '府环河水质变差情况说明' }],
    COLOR: ['#6699cc', '#778899', '#99cc66', '#5F9EA0', '#8FBC8F', '#BDB76B']
  },
  //事件处理函数
  bindViewTap: function () {
  },
  subitemcontrol: function (e) {
    this.setData({
      menuIndex: e.currentTarget.dataset.idx
      , menuhide: !this.data.menuhide
    });
  },
  onLoad: function () {
    var SysInfo = wx.getSystemInfoSync()
    this.setData({
      height: SysInfo.windowHeight,
      width: SysInfo.screenWidth
    })
  },
  onPullDownRefresh() {    
    wx.stopPullDownRefresh()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    var that = this
    return {
      title: "亚润河长",
      desc: '',
      path: '/pages/index/index'
    }
  }
})
