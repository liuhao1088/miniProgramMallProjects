Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    display:"none"
  },
  onPageScroll: function(obj) {

     if (obj.scrollTop > 400) {
         this.setData({
          display: "block"
         })
     }else{
      this.setData({
        display: "none"
       })
     }
  },

  goToTop: function() {
    wx.pageScrollTo({
        scrollTop: 0,
    })
    this.setData({
      display: "none"
    })
  },

  butiedj:function(){
    wx.navigateTo({
      url: '../butie/butie'
    })
  },
  wodedj:function(){
    wx.redirectTo({
      url: '../wode/wode',
    })
  },
  todaydj:function(){
    wx.navigateTo({
      url: '../competitionToday/competitionToday',
    })
  },
  jphydj:function(){
    wx.navigateTo({
      url: '../vipCentre/vipCentre',
    })
  },
  productjd:function(){
    wx.navigateTo({
      url: '../productDetails/productDetails',
    })
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