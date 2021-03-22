// pages/room/room.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoHeight: 0,
        //视频分辨率
        ratio: 2560 / 1600,
    },

    onClickLeft() {
        wx.showToast({title: '点击返回', icon: 'none'});
        wx.navigateBack({delta: 1})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let windowWidth = wx.getSystemInfoSync().windowWidth;
        this.setData({
            videoHeight: windowWidth / this.data.ratio
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log(wx.getSystemInfoSync().windowWidth)
        console.log(this.data.videoHeight)
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