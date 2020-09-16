// pages/shopCart/shopCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    totalPrice:0,
    num:1,
    display1: "block",
    display2: "none"
  },
  onChange(event) {
    console.log(event.detail);
    if(event.detail == true ){
      var price = this.data.num*127
      console.log(price);
      console.log(this.data.num);
      this.setData({
        totalPrice:price,
        num:this.data.num,
        checked:event.detail,
        display1: "none",
        display2: "block"
      })
    }else{
      this.setData({
        totalPrice:0,
        checked:event.detail,
        display1: "block",
        display2: "none"
      })
    }
    
    
  },
  onStepper(event) {
    if(this.data.checked == true ){
      var price = event.detail*127
      console.log(price);
      this.setData({
        totalPrice:price,
        num:event.detail
      })
    }
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(this.data.checked == false){
      this.data({
        display1: "block",
        display2: "none"
      })
    }else{
      this.data({
        display1: "none",
        display2: "block"
      })
    }
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