Page({

    data: {
        active: 0,
        scrollViewHeight: 0,
        pageList: [],
    },

    onLoad() {
        let query = wx.createSelectorQuery();
        query.select('#my-header').boundingClientRect()
        query.exec((res) => {
            this.setData({
                scrollViewHeight: wx.getSystemInfoSync().windowHeight - res[0].height
            })
        })
    },

    onChange(event) {
        // event.detail 的值为当前选中项的索引
        this.setData({active: event.detail});
    },

});