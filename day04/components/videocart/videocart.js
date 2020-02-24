// components/videocart/videocart.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Object,
            value: []
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        goTvDetail() {
            // 路由跳转
            // return console.log(this.data);
            wx.navigateTo({
                url: '/pages/tvDetail/tvDetail?id=' + this.properties.data.id
            })

        }
    }
})
