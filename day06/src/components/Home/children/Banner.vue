<template>
  <div class="banner">
    <ul class="banner-list"
                @touchstart="stoplunbo"
                @touchmove="stoplunbo"
                @touchend="lunbo">
            <img class="banner-item" v-for="(item,index) in bannerImgs" 
            :key="index" :src="item" alt="无法显示"
            v-show="currentIndex===index">
        <li class="banner-circle-wrapper">
            <div class="banner-circle"
                 v-for="(circle,index) in bannerImgs" :key="index"
                 :class="{'selected': currentIndex==index}"
                 @click="changeImg(index)"
                ></div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
     currentIndex: 0,
     delay:1000,
     timeId: -1,
     bannerImgs:[
         require('../../../assets/images/l1.jpg'),
         require('../../../assets/images/l2.jpg'),
         require('../../../assets/images/l3.jpg'),
         require('../../../assets/images/l4.jpg'),
         require('../../../assets/images/l5.jpg')
     ]
    }
  },
  methods:{
      changeImg(index){
          this.currentIndex = index
      },
      lunbo(){
         this.timeId = setInterval(function(){
                this.currentIndex++
                if (this.currentIndex >= this.bannerImgs.length)
                    this.currentIndex = 0
        }.bind(this),this.delay)
      },
      stoplunbo(){
          if (this.timeId != -1){
            clearInterval(this.timeId)
        }
        // alert(111)
      }
  },
  mounted(){
      this.lunbo()
  },
  beforedestroy(){
      if (this.timeId != -1){
          clearInterval(this.timeId)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-list {
    /* 图片高度自动撑开 */
    position: relative;
    width: 100%;

}
.banner-item {
    /* position: absolute; */
    width: 100%;
    margin: 0;
    padding: 0;
}
.banner-circle-wrapper {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
}
.banner-circle {
    display: inline-block;
    border-radius: 50%;
    background:  rgba(0,0,0,.3);
    padding: 5px;
    margin: 2px;
}
.selected {
     background: rgba(0,0,0,.8)!important;
}
</style>