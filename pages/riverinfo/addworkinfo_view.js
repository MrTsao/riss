// pages/riverinfo/addworkinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [{ id: '001', nme: '2017年10月28日巡河记录', txt: '无特别情况！', img: ['/image/rivers/HD0001.jpg', '/image/rivers/HD0002.jpg', '/image/rivers/HD0003.jpg'] }, { id: '002', nme: '2017年11月2日巡河记录', txt: '无特别情况！', img: ['/image/rivers/HD0001.jpg', '/image/rivers/HD0002.jpg', '/image/rivers/HD0003.jpg'] }],
    idx: -1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: options.txt,
      })

      let content = this.data.content
      let idx = this.data.idx
      for (var i = 0; i < content.length;i++){
        if (content[i].id == options.id){
          idx = i;
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