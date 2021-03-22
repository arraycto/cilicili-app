// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        roomList: [{id: '1'}, {id: '2'}, {id: '3'}, {id: '4'}]
    },

    clickRoom(e) {
        wx.navigateTo({
            url: '/pages/room/room?id=' + e.currentTarget.dataset.id
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