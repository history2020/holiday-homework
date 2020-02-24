Component({
    data: {
        /* 表示被激活的元素的下标 */
        activeIndex: wx.setStorageSync('activeIndex') || 0
    },
    properties: {
        data: {

            type: Array,
            value: []
        }


    },
    methods: {
        setIndex(event) {
            const index = event.currentTarget.dataset.index
            this.setData({
                activeIndex: index
            })
            // console.log(event.currentTarget.dataset.index);
            console.log(event);
            wx.getStorageSync('activeIndex', index)
        }
    }
})