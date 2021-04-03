// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        current: 0,
        active: 0,
        posterList: [{}, {}, {}, {}],
        roomList: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}, {id: '5'}, {id: '6'}]
    },

    clickRoom(e) {
        wx.navigateTo({
            url: '/pages/room/room?id=' + e.currentTarget.dataset.id
        })
    },

    swiperChange(e) {
        this.setData({
            current: e.detail.current
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

})