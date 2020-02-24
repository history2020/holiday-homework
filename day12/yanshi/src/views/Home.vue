<template>
  <div class="home">
    <!-- 搜索 -->
    <van-search
      v-model="value"
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
    />
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img
          class="img01"
          src="http://www.jq22.com/demo/jqueryappgwmoban202002121018/images/banner2.png"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          class="img01"
          src="http://www.jq22.com/demo/jqueryappgwmoban202002121018/images/banner2.png"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 宫格图标 -->
    <van-grid>
      <van-grid-item icon="photo-o" text="签到福利" />
      <van-grid-item icon="photo-o" text="排行榜" />
      <van-grid-item icon="photo-o" text="百科" />
      <van-grid-item icon="photo-o" text="海淘" />
    </van-grid>
    <van-grid>
      <van-grid-item icon="photo-o" text="白菜专区" />
      <van-grid-item icon="photo-o" text="优惠券" />
      <van-grid-item icon="photo-o" text="优惠日历" />
      <van-grid-item icon="photo-o" text="经验" />
    </van-grid>
    <!-- 商品列表 -->
    <van-card
      num="45"
      price="100.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://www.bing.com/images/search?view=detailV2&ccid=lYitjsl8&id=44279A11540A91CFDDCA62CA21C3D3AC4A726843&thid=OIP.lYitjsl8gIWfxiHKHL_dkwHaJe&mediaurl=http%3a%2f%2fimg04.tooopen.com%2fimages%2f20130907%2ftooopen_09473610.jpg&exph=1024&expw=800&q=%e5%95%86%e5%93%81%e5%9b%be%e7%89%87&simid=607996373096139814&selectedIndex=33"
    />
    <van-card
      num="999"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://dj.1688.com/ci_bb?spm=a261b.12436357.ul20190116.7.5387320cB5vyoB&a=1255876754&e=JLDboVwu2f68djb2oewKG7FQed1BQ4i00xgWlnnentF0g3B2C.wrW4eNuXqqPiDC4NqGxLk7SsUO0kbaA8hLnyHnA3mRabytRYosPxzPN06LQzJ601WtDXOv9-OSOGMSgrzzE83j9lXzEviv-CxPHAryF0ayDtUovnHTjEf.gcfkmFCBPPinTpFoERlEBLuClfzPv0xhAyPkzX.O47P3S0ID-4L1Wh.AErS4j0svUBTvBjMhxTgSOh-Dkop.wSKVq8xZnOZGRwb4VphgOC.yBENSdFE7VHjYsscR02DeBqw.vB8BZNZ4wy5GkQ-hScrklTesE1s72r3FsDcHlgzWuczRVGYkpSR0jCVe2affFSphFWDlz5gpCk26TG9OsrSWrkpeRfMB2yxpU4FRksq9.15TXxQYEHehOWwSRrogjTOjqOfOoMy2TbzvgDpwFwDwq6ENoK4fVTv9PObHudSo0pGZ9WEnsfZBtJdAeM3yeVCK03AIpfXzvC5gqBVUpNHzGek1dPytxLyquEDpRZEql.YjxH0mzc5OAHSSEbugKok4yBNHWyG-w.iDdzvaDSRgwhmYNTcBUZecIj.d.ZR94amttNLJCWOWTblb3VG5-cxKgPVsbwc9W5U4r3iiypiNMT-fdarmIqKouLKg7xOnTjpMM.2gR6fT9s3YYugcoevewRRxDMP6dX7zZm-iuqFympxQ-hUtGgHYIlMzugqg.4RgW-ud4JIw&v=4&ap=3&rp=3"
    />
    <van-card
      num="5"
      price="100.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://www.bing.com/images/search?view=detailV2&ccid=lYitjsl8&id=44279A11540A91CFDDCA62CA21C3D3AC4A726843&thid=OIP.lYitjsl8gIWfxiHKHL_dkwHaJe&mediaurl=http%3a%2f%2fimg04.tooopen.com%2fimages%2f20130907%2ftooopen_09473610.jpg&exph=1024&expw=800&q=%e5%95%86%e5%93%81%e5%9b%be%e7%89%87&simid=607996373096139814&selectedIndex=33"
    />
    <van-card
      num="5"
      price="100.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://www.bing.com/images/search?view=detailV2&ccid=lYitjsl8&id=44279A11540A91CFDDCA62CA21C3D3AC4A726843&thid=OIP.lYitjsl8gIWfxiHKHL_dkwHaJe&mediaurl=http%3a%2f%2fimg04.tooopen.com%2fimages%2f20130907%2ftooopen_09473610.jpg&exph=1024&expw=800&q=%e5%95%86%e5%93%81%e5%9b%be%e7%89%87&simid=607996373096139814&selectedIndex=33"
    />
    <van-card
      num="5"
      price="100.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://www.bing.com/images/search?view=detailV2&ccid=lYitjsl8&id=44279A11540A91CFDDCA62CA21C3D3AC4A726843&thid=OIP.lYitjsl8gIWfxiHKHL_dkwHaJe&mediaurl=http%3a%2f%2fimg04.tooopen.com%2fimages%2f20130907%2ftooopen_09473610.jpg&exph=1024&expw=800&q=%e5%95%86%e5%93%81%e5%9b%be%e7%89%87&simid=607996373096139814&selectedIndex=33"
    />
    <van-card
      num="5"
      price="100.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://www.bing.com/images/search?view=detailV2&ccid=lYitjsl8&id=44279A11540A91CFDDCA62CA21C3D3AC4A726843&thid=OIP.lYitjsl8gIWfxiHKHL_dkwHaJe&mediaurl=http%3a%2f%2fimg04.tooopen.com%2fimages%2f20130907%2ftooopen_09473610.jpg&exph=1024&expw=800&q=%e5%95%86%e5%93%81%e5%9b%be%e7%89%87&simid=607996373096139814&selectedIndex=33"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld
  },

}
</script>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;

  text-align: center;
  background-color: #39a9ed;
}

.van-swipe-item {
  height: 150px;
}
</style>
