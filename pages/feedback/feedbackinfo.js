// pages/works/works.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workitems: [{
      CPID: '001', CNME: '小杨河大量漂浮物', CNTNT: '2017年8月13日，小杨河，星罗密布的水葫芦、水白菜顺江漂流，其中一些被浪花推向岸边，聚集如同绿色“草坪”。据了解，这些水葫芦是上游湖泊开闸放水流入所致!', handler: '河长已安排清漂人员正在进行紧急清理。已于2017年8月14日清理完毕！！'
      , img: '/image/gs/0001.jpg'
    }, { CPID: '003', CNME: '鲁班河水质变差', CNTNT: '今年以来，我区持续干旱少雨，本地水源几近枯竭，供水水源主要依靠来自鲁班河水，鲁班河水的主要特征是含盐量高、总硬度高（在250-280mg/l之间），原水轻度富营养化，夏秋季节藻类繁殖较快，导致二甲基异冰片等代谢产物释放到水体，产生土腥味。', handler: '水是人类赖以生存的资源，保护水资源就是保护我们自己，对于我国大江大河水资源的保护和治理应是重中之重。专家们呼吁：“以人为本，建设文明和谐社会，改善人与自然的环境，减少污染。”', img: '/image/gs/0003.jpg'}, {
        CPID: '004', CNME: '严重工业污染', CNTNT: '严重工业污染!', handler: '河长已安排清漂人员正在进行紧急调查！！', img: '/image/gs/0.jpg'
    }, {
        CPID: '005', CNME: '河水变黑', CNTNT: '河水变黑!', handler: '河长已安排清漂人员正在进行紧急调查！！', img: '/image/gs/0.jpg'
    }],
    idx: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.txt,
    })

    let idx = -1
    for (var i = 0; i < this.data.workitems.length; i++) {
      if (this.data.workitems[i].CPID == options.id) {
        idx = i;
        break;
      }
    }
    this.setData({
      idx: idx
    })
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

    wx.stopPullDownRefresh();
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