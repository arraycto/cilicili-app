Page({
    data: {
        active: 0,
        pageList: [],
    },
    onChange(event) {
        // event.detail 的值为当前选中项的索引
        this.setData({active: event.detail});
    },
});