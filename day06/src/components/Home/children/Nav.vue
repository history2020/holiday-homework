<template>
  <div class="nav">
    <ul>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav0.png" alt="京东超市图片" />
          <span>京东超市</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav1.png" alt />
          <span>全球购</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav2.png" alt />
          <span>服装城</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav3.png" alt />
          <span>京东生鲜</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav4.png" alt />
          <span>京东到家</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav5.png" alt />
          <span>充值中心</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav6.png" alt />
          <span>惠赚钱</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav7.png" alt />
          <span>领券</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav8.png" alt />
          <span>物流查询</span>
        </a>
      </li>
      <li class="nav_item">
        <a href="#" class="nav_item_link">
          <img src="../../../assets/images/nav9.png" alt />
          <span>我的关注</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      msg: "Nav"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav ul {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}
.nav ul .nav_item {
    width: 72px;
    height: 71px;
}
.nav ul .nav_item  img {
    display: block;
    width: 39px;
    height: 39px;
    margin-left: 15px
}
.nav ul .nav_item  span {
    display: block;
    color: #666;
    font-size: 11px;
    text-align: center;
    margin-top: 5px;
}
</style>