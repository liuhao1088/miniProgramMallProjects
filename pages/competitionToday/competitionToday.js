// pages/competitionToday/competitionToday.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weight1:700,//HOT
    weight2:600,//HOT
    weight3:300,//预告
    weight4:300,//预告
    display1:"block",//内容1
    display2:"none",//内容2
    display:"none",
    time: 30 * 60 * 60 *60* 1000 ,//倒计时
    timeData: {},

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



  onChange(e) {
    console.log(e);
    this.setData({
      timeData: e.detail,
    });
  },
  tabdj1:function(){
    console.log("11111111111");
    this.setData({
      weight1:700,//HOT
      weight2:600,//HOT
      weight3:300,//预告
      weight4:300,//预告
      display1:"block",//内容1
      display2:"none"//内容2
    })
  },
  tabdj2:function(){
    console.log("122222222");
    this.setData({
      weight1:300,//HOT
      weight2:300,//HOT
      weight3:700,//预告
      weight4:600,//预告
      display1:"none",//内容1
      display2:"block"//内容2
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