<template>
  <div>
    <comheader title="深圳龙岗深坑小区">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo1"></i>
      </span>
      <router-link
        class="header_login"
        slot="right"
        :to="this.$store.state.userid=='' ? '/login':'/userinfo'"
      >
        <span
          class="header_login_text"
        >{{this.$store.state.userid==''?'登入|注册':this.$store.state.userid}}</span>
      </router-link>
    </comheader>
    <div class="swiper-container" ref="detail_player">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../public/image/nav/1.jpg" />

          <span>甜品美食</span>
        </div>
        <div class="swiper-slide">
          <!-- 便签1 -->
          <img src="../../../public/image/nav/2.jpg" />
          <span>商超便利</span>
        </div>
        <div class="swiper-slide">
          <!-- 便签2 -->
          <img src="../../../public/image/nav/3.jpg" />
          <span>美食</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/4.jpg" />
          <span>简餐</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/5.jpg" />
          <span>新店特惠</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/6.jpg" />
          <span>准时达</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/7.jpg" />
          <span>预定早餐</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/8.jpg" />
          <span>商品折扣</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/9.jpg" />
          <span>准时送达</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/10.jpg" />
          <span>新品上市</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/11.jpg" />
          <span>热门菜系</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/12.jpg" />
          <span>任君选择</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/13.jpg" />
          <span>口味独特</span>
        </div>
        <div class="swiper-slide">
          <img src="../../../public/image/nav/14.jpg" />
          <span>长沙特色</span>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>

    <!-- 附件商家 -->
    <div style=" margin: 5px;">
      <span>
        <i class="iconfont icon-liebiao"></i>
      </span>
      <span>附近商家</span>
    </div>

    <div>
      <router-link  to="/detail">
        <div class="itemshop">
          <div class="item_image">
            <img src="../../../public/image/shop/1.jpg" />
          </div>
          <div class="item_text">
            <ul>
              <li>嘉禾一品（温都水城）</li>
              <li>
                <i class="iconfont icon-brand"></i>
              </li>
              <li>5.0 好评</li>
              <li>月销量205单</li>
            </ul>
          </div>
        </div>
      </router-link>

      <div class="itemshop">
        <div class="item_image">
          <img src="../../../public/image/shop/2.jpg" />
        </div>
        <div class="item_text">
          <ul>
            <li>美食街</li>
            <li>
              <i class="iconfont icon-pinpaizhuanxiang"></i>
            </li>
            <li>4.5 好评</li>
            <li>月销量105单</li>
          </ul>
        </div>
      </div>
      <div class="itemshop">
        <div class="item_image">
          <img src="../../../public/image/shop/3.jpg" />
        </div>
        <div class="item_text">
          <ul>
            <li>你来我往</li>
            <li>
              <i class="iconfont icon-pinpai"></i>
            </li>
            <li>4.2 好评</li>
            <li>月销量100单</li>
          </ul>
        </div>
      </div>
      <div class="itemshop">
        <div class="item_image">
          <img src="../../../public/image/shop/4.jpg" />
        </div>
        <div class="item_text">
          <ul>
            <li>最嗨麻辣烫</li>
            <li>
              <i class="iconfont icon-goodevaluation"></i>
            </li>
            <li>4.0 好评</li>
            <li>月销量85单</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comheader from "../../components/Header";

export default {
  name: "start",
  components: { comheader },
  mounted() {
    new Swiper(this.$refs.detail_player, {
      slidesPerView: "auto",
      freeMode: true,
      freeModeSticky: true,
      observeParents: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // }
    });
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100px;
}
.swiper-slide {
  margin: 0;
  padding: 0;
  width: 180px;
}
.swiper-slide span {
  margin: 0;
  padding-left: 25px;
  font-size: 5rpx;
  color: #cccccc;
}
.swiper-wrapper {
  white-space: normal;
}
img {
  display: block;
  width: 50px;
  height: 50px;
  margin-bottom: 1rpx;
}
.header_login_text {
  color: white;
}
.itemshop {
  height: 100px;
  margin: 10px;
  border: 2px solid #cccccc;
}
.item_image {
  display: inline-block;
  padding-top: 10px;
  padding-left: 10px;
}
.item_image image{
  width: 100px;
  height: 100%;
}
.item_text {
  display: inline-block;
  font-size: 15px;
  width: 250px;
}
</style>
