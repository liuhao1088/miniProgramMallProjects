// pages/productDetails/productDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:[
      "https://i.loli.net/2020/09/08/wpj9ChrWl3VcbJO.jpg",
      "https://i.loli.net/2020/09/08/UApIuz5mBCoQWHe.jpg",
      "https://i.loli.net/2020/09/08/4VWd9RBxZCzTY3p.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    settlementShow: false,//结算
    activeNames: ['1'],//折叠面板
    specificationTitle:"选择：规格",//选择规格
    specification: false,//选择规格
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  wzdldj:function(){
    this.setData({ settlementShow: false });
  },

  specificationPopup() {
    this.setData({ specification: true });
  },
  specificationClose() {
    this.setData({ specification: false });
  },

  settlementShowPopup() {
    this.setData({ settlementShow: true });
  },

  settlementClose() {
    this.setData({ settlementShow: false });
  },
  home:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  shopCart:function(){
    wx.switchTab({
      url: '../shopCart/shopCart',
    })
  },

  previewImg:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index);
    wx.previewImage({
      current: this.data.img[index],     //当前图片地址
      urls: this.data.img,               //所有要预览的图片的地址集合 数组形式
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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