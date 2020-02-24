// pages/tvDetail/tvDetail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tvid: 1,
        src: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
        this.setData({
            tvid: options.id,
            src: "cloud://zhangguangju-lqf7i.7a68-zhangguangju-lqf7i-1301000122/" + options.id + ".mp4"
        })
    },
    // 当视频播放出差的函数
    playErr() {
        wx.showModal({
            title: "视频播放错误",
            content: "您的视频播放地址出错"
        })
    },
    onReady() {
        // this.addBarrage()
    },
    //   添加弹幕
    addBarrage() {
        const barrageComp = this.selectComponent('.barrage')
        this.barrage = barrageComp.getBarrageInstance({
            font: 'bold 16px sans-serif',
            duration: 50,
            lineHeight: 2,
            mode: 'separate',
            padding: [10, 0, 10, 0],
            tunnelShow: false
        })
        this.barrage.open()
        this.barrage.hideTunnel()
        this.barrage.addData([{
            color: '#000000', // 默认黑色
            content: '123456', // 弹幕内容
        }])
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