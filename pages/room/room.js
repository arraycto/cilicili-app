// pages/room/room.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 1,
        sendBottom: 0,
        videoHeight: 0,
        anchor: {
            name: 'White五五开',
            follow: 2890,
            title: '我今天必吃鸡芜湖',
            avatar: 'https://gaoyuanming-photo.oss-cn-beijing.aliyuncs.com/logo/logo.png'
        },
        room: {
            url: 'https://gaoyuanming-projects.oss-cn-beijing.aliyuncs.com/cilicili/1.mp4',
            id: '',
            ratio: 2560 / 1600,
        },
        barrageList: []
    },

    onClickLeft() {
        wx.showToast({title: '点击返回', icon: 'none'});
        wx.navigateBack({delta: 1})
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        let windowWidth = wx.getSystemInfoSync().windowWidth;
        this.setData({
            videoHeight: windowWidth / this.data.room.ratio
        })
        let query = wx.createSelectorQuery();
        query.select('#bottom-bar').boundingClientRect()
        query.exec((res) => {
            console.log(res[0].height)
            this.setData({
                sendBottom: res[0].height
            })
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
        let barrageList = [{title: '张三', content: 'hello'}]
        setTimeout(() => {
            barrageList.unshift({
                title: '里斯本',
                content: 'hello1生命周期函数--监听页面加载生命周期函数--监听页面加载生命周期函数--监听页面加载生命周期函数--监听页面加载'
            })
            this.setData({
                barrageList: barrageList
            })
            setTimeout(() => {
                barrageList.unshift({title: '剋历史', content: 'hello2'})
                this.setData({
                    barrageList: barrageList
                })
            }, 2000)
        }, 2000)
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