<template>
  <div>
    <comheader title="我的个人中心"></comheader>
    <div class="contain">
      <router-link class="longin" :to="this.$store.state.userid=='' ? '/login':'/userinfo'">
        <div class="profile_image">
          <i class="iconfont icon-gerensvg"></i>
        </div>
        <p
          class="user-info-top"
        >{{this.$store.state.userid=="" ? "登入|注册" : this.$store.state.userid}}</p>
        <p>
          <span class="user-icon">
            <i class="iconfont icon-webicon205"></i>
          </span>
          <span class="icon-mobile-number">暂无绑定手机号</span>
        </p>
      </router-link>

      <!-- 我的钱包 -->
      <div class="profile_info_data">
        <ul class="info_data_list">
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0.00</span>元
            </span>
            <span class="info_data_bottom">我的余额</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0</span>个
            </span>
            <span class="info_data_bottom">我的优惠</span>
          </a>
          <a href="javascript:" class="info_data_link">
            <span class="info_data_top">
              <span>0</span>分
            </span>
            <span class="info_data_bottom">我的积分</span>
          </a>
        </ul>
      </div>

      <!-- 我的订单 -->
      <div class="profile_my_order">
        <!-- 我的订单 -->
        <div class="my_order_div">
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-dingdan"></i>
            </span>
            <span>我的订单</span>
          </a>
          <span class="my_order_icon">
            <i class="iconfont icon-youjiantou"></i>
          </span>
        </div>
      </div>

      <!-- 积分商城 -->
      <div class="profile_my_order">
        <div class="my_order_div">
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-qianbao"></i>
            </span>
            <span>积分商城</span>
          </a>
          <span class="my_order_icon">
            <i class="iconfont icon-youjiantou"></i>
          </span>
        </div>
      </div>

      <!-- Vip -->
      <div class="profile_my_order">
        <div class="my_order_div">
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-brand"></i>
            </span>
            <span>硅谷外卖会员卡</span>
          </a>
          <span class="my_order_icon">
            <i class="iconfont icon-youjiantou"></i>
          </span>
        </div>
      </div>
      <!-- 服务中心 -->
      <div class="profile_my_order">
        <div class="my_order_div">
          <a href="javascript:" class="my_order">
            <span>
              <i class="iconfont icon-fuwuzhongxin"></i>
            </span>
            <span>服务中心</span>
          </a>
          <span class="my_order_icon">
            <i class="iconfont icon-youjiantou"></i>
          </span>
        </div>
      </div>
      <div class="button">
        <button
          type="button"
          class="btn btn-danger"
          style="width: 100%;background-color:red;color: white"
          @click="loginOut"
          v-show="this.$store.state.userid"
        >退出登陆</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import comheader from "../../components/Header";
import { MessageBox } from "element-ui";
export default {
  name: "mycenter",
  components: { comheader },
  methods: {
   loginOut() {
     
      this.$store.commit("UserLogin","");
    }
  }
};
</script>

<style>
.profile_my_order {
  background-color: #ccc;
  width: 100%;
  height: 40px;
  padding: 1px;
  margin-bottom: 1px;
}
.longin {
  margin-top: 1px;
  background-color: green;
  height: 120px;
}
.profile_info_data {
  width: 100%;
  height: 100px;
}
.profile_info_data {
  margin: 2px 0px;
  background-color: sandybrown;
}
.profile_info_data a span {
  color: white;
  padding: 2px;
}
.button {
  margin-top: 10px;
}
</style>
