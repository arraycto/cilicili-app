// pages/room/room.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 1,
        videoHeight: 0,
        barrageInputValue: '',
        anchor: {
            name: 'White五五开',
            follow: 2890,
            title: '我今天必吃鸡芜湖',
            avatar: 'https://gaoyuanming-photo.oss-cn-beijing.aliyuncs.com/logo/logo.png'
        },
        room: {
            url: 'shttps://gaoyuanming-projects.oss-cn-beijing.aliyuncs.com/cilicili/1.mp4',
            id: '',
            ratio: 2560 / 1600,
        },
        barrageList: []
    },

    onClickLeft() {
        wx.showToast({title: '点击返回', icon: 'none'});
        wx.navigateBack({delta: 1})
    },

    barrageInput(e) {
        this.setData({
            barrageInputValue: e.detail.value
        })
    },

    clickSubmit() {
        let item = {
            username: '张三',
            content: this.data.barrageInputValue
        }
        let arr = this.data.barrageList
        arr.unshift(item)
        this.setData({
            barrageList: arr,
            barrageInputValue: ''
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        let windowWidth = wx.getSystemInfoSync().windowWidth;
        this.setData({
            videoHeight: windowWidth / this.data.room.ratio
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
        this.setData({
            barrageList: [{username: '卢本伟', content: '欢迎来到我的直播间'}]
        })
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