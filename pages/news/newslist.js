// pages/news/newslist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [{ CPID: '001', CNME: '党的十九届一中全会选举习近平为中央委员会总书记' }, { CPID: '002', CNME: '水利部召开2017年第8次中央水利投资计划执行月调度会商会议' }, { CPID: '003', CNME: '水利部 环境保护部印发《贯彻落实<关于全面推行河长制的意见>实施方案》' }, { CPID: '004', CNME: '三峡水库连续八年实现175米试验性蓄水目标 国家防总长江防总科学调度水库群实现多赢' }, { CPID: '005', CNME: '李克强主持召开国务院常务会部署节水供水重大工程建设等' }],
    COLOR: ['#6699cc', '#778899', '#99cc66', '#5F9EA0', '#8FBC8F', '#BDB76B']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.stopPullDownRefresh()
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