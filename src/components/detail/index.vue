<template>
  <div>
    <shoptitle />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/detail/food" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/detail/issue" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/detail/shopInfo" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import shoptitle from "./shoptitle";
import food from "./food";
import issue from "./issue";
import shopInfo from "./shopInfo";

export default {
  name: "detail",
  components: {
    shoptitle,
    food,
    issue,
    shopInfo
  }
};
</script>

<style scoped>
.title {
  margin-top: 15px;
  margin-left: 55px;
}
.tab {
  height: 40px;
  line-height: 40px;
  background: #fff;
}
.tab-item {
  float: left;
  width: 33.33333%;
  text-align: center;
  font-size: 14px;
  color: rgb(77, 85, 93);
}
a {
  display: block;
  position: relative;
}
.router-link-active{
 color: #02a774;
}
         
</style>
