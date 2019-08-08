<template>
  <div>
    <nav class="shop-nav" :style="{backgroundImage: `url(${shoplist.data.bgImg})`}">
      <a class="back" @click="$router.back()">
        <i  class="iconfont icon-jiantou_zuo"></i>
      </a>
    </nav>
    <div class="shop-content">
      <!-- <img class="content-image" src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg" style=" width: 50px; height: 50px;"/> -->
      <div class="header-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <img
            class="content-image"
            src="https://fuss10.elemecdn.com/8/40/02872ce8aefe75c16d3190e75ad61jpeg.jpeg"
            style=" width: 50px; height: 50px;"
          />
          <span class="content-name">{{shoplist.data.name}}</span>
          <i class="iconfont icon-brand"></i>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{shoplist.data.score}}分数</span>
          <span class="shop-message-detail">{{shoplist.data.ratingCount}}月售单</span>
          <span class="shop-message-detail">
            距离
            <span>{{shoplist.data.deliveryTime}}约分钟</span>
          </span>
          <span class="shop-message-detail">{{shoplist.data.distance}}距离</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoptitle",
  data() {
    return {
      shoplist: []
    };
  },
  mounted() {
    this.axios.get("http://info.com").then(res => {
    //   console.log(res.data);
      this.shoplist = res.data;
    });
  }
};
</script>

<style>
.shop-nav {
  background-size: cover;
  background-repeat: no-repeat;
  height:100px;
  /* padding: 5px 10px; */
  position: relative;
}

.shop-content {
  padding-top:5px ;
  position: relative;
  display: flex;
  background: #fff;
  text-align: center;
}
/* .shop-content image {
  box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 50%;
  width: 66px;
  height: 66px;
  border-radius: 2px;
  margin-left: -33px;
  margin-top: -40px;
} */
.header-content {
  flex: 1;
  width: 72%;
}
.content-title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  white-space: nowrap;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}
.shop-message-detail {
  padding-top: 2px;
   padding-left: 2px;
}
.content-tag {
  border-radius: 2px;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  width: 36px;
  height: 18px;
  margin-right: 10px;
  color: #6a3709;
  font-style: normal;
  font-weight: 700;
  position: relative;
}
.mini-tag {
  position: absolute;
  left: 0;
  top: 0;
  right: -100%;
  bottom: -100%;
  font-size: 24px;
  font-weight: 600;
  transform: scale(0.5);
  transform-origin: 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shop-message {
  white-space: nowrap;
  height: 12px;
  margin-top: 2px;
  font-size: 11px;
  color: #333;
}
.shop-notice {
  width: 63%;
  font-size: 11px;
  font-weight: 300;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 8px auto 10px;
  white-space: nowrap;
}
</style>
