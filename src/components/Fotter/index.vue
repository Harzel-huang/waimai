<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="外卖">
        <router-link to="/start">
          <i class="iconfont icon-shouye"></i>
          首页
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="搜索">
        <router-link to="/search">
          <i class="iconfont icon-sousuo"></i>
          搜索
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="订单">
        <router-link to="/order">
        <i class="iconfont icon-dingdan"></i>
        订单
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <router-link to="/mine">
        <i class="iconfont icon-gerenzhongxin"></i>
        我的
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
  <!-- <div id="TabBar" class="container tab-bar row">
    <router-link class="col-sm-3 tab-bar-item" to="/start">
      <div class="row">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div class="row ">
        <span>首页</span>
      </div>
    </router-link>
    <router-link class="col-sm-3 tab-bar-item" to="/search">
      <div class="row ">
        <i class="iconfont icon-sousuo"></i>
      </div>
      <div class="row">
        <span>搜索</span>
      </div>
    </router-link >
    <router-link class="col-sm-3 tab-bar-item" to="/order">
      <div class="row">
        <i class="iconfont icon-dingdan"></i>
      </div>
      <div class="row ">
        <span>订单</span>
      </div>
    </router-link>
    <router-link class="col-sm-3 tab-bar-item" to="/mine">
      <div class="row">
        <i class="iconfont icon-gerenzhongxin"></i>
      </div>
      <div class="row mypadding">
        <span>我的</span>
      </div>
    </router-link>
  </div>-->
</template>

<script>
export default {
  data() {
    return {
      selected: true
    };
  }
};
</script>

<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  color: blue;
}
.router-link-active{
    color:blue;
}
a{
    color: black;
}
a:hover{
     text-decoration: none;
} 
</style>
