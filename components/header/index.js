// components/header/index.js
const app = getApp();
Component({

    lifetimes: {
        attached: function () {
        },
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },

    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: 'Home page'
        },
        description: {
            type: String,
            value: 'Welcome to my application'
        },
        icon: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        NavBarTop: app.globalData.NavBarTop
    },

    /**
     * 组件的方法列表
     */
    methods: {}
})
