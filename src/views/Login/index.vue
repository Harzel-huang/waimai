<template>
  <div>
    <span>
      <i class="iconfont icon-jiantou_zuo" @click="back_mine"></i>
    </span>
    <div class="container">
      <h3>硅谷外卖</h3>
      <div class="login_header_title">
        <a href="javascript:;" :class="{loginwaycss:loginway}" @click="loginway=true">短信登录</a>
        <a href="javascript:;" :class="{loginwaycss:!loginway}" @click="loginway=false">密码登录</a>
      </div>
      <div v-if="loginway">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="手机号" v-model="phone" />
          <button
            :disabled="!phoneReg"
            class="btn btn-default"
            type="button"
            :class="{buttoncss:phoneReg}"
            @click="sendcode()"
          >{{countdown>0?`倒计时(${countdown})s`:'发送验证码'}}</button>
        </div>
        <div class="input-group" style="margin-top:10px">
          <input type="text" class="form-control" placeholder="验证码" />
        </div>
      </div>

      <div v-else>
        <div style="margin-top:10px">
          <input
            type="text"
            maxlength="11"
            class="form-control"
            placeholder="手机/邮箱/用户名"
            v-model="phone"
          />
        </div>
        <div class="input-group" style="margin-top:10px">
          <input
            :type="showpassword"
            maxlength="8"
            class="form-control"
            placeholder="密码"
            v-model="password"
          />
          <el-switch class="swithcss" v-model="swith" active-text="显示"></el-switch>
        </div>
        <div class="input-group" style="margin-top:10px">
          <input
            type="text"
            maxlength="11"
            class="form-control"
            placeholder="验证码"
            v-model="captcha"
          />
          <img src="./image/captcha.svg" alt="captcha" ref="captcha" />
        </div>
      </div>

      <div class="login_hint">
        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
        <a href="javascript:;">《用户服务协议》</a>
      </div>
      <div class="button">
        <button type="button" class="btn btn-success" style="width:100%" @click="Loginup">登入</button>
        <button
          type="button"
          class="btn btn-info"
          style="width:100%;margin-top: 10px;"
          v-show="!loginway"
          @click="regiest()"
        >注册</button>
      </div>
      <div class="about_us">
        <a href="javascript:;" style="color:#ccc">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  name: "login",
  data() {
    return {
      loginway: false,
      phone: "",
      password: "",
      countdown: 0,
      swith: false,
      showtext: "text",
      captcha: ""
    };
  },
  methods: {
    back_mine() {
      this.$router.back("/login");
    },
    sendcode() {
      if (this.countdown > 0) return;
      this.countdown = 30;
      const settime = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(settime);
        }
      }, 1000);
    },
    Loginup() {
      if (this.loginway) {
        //验证短信登入是否正确
        alert("验证短信登入不正确");
      } else {
        //验证密码登入
        let custoners = JSON.parse(window.localStorage.getItem("regiest"));
        if (custoners == null) {
          alert("请先注册账号");
          return;
        }
        if (this.captcha.toLowerCase() != "wk3v") {
          alert("验证码错误");
          return;
        }
        console.log(custoners);
        let length = custoners.length;
        console.log(length);
        let nameArry = [];
        for (let i = 0; i < length; i++) {
          nameArry.push(custoners[i].name);
        }
        let index = nameArry.indexOf(this.phone);
        if ((index == -1)) {
          alert("该账号不存在");
          return;
        } else {
          if (custoners[index].password != this.password) {
            alert("密码错误");
            return;
          }
        }
        alert("登录成功");
        this.$store.commit("UserLogin", this.phone);
        this.$router.replace("/mine");
      }
    },
    regiest() {
      let listPone = [];
      let yanzhengphone = this.phone;

      if (!this.phoneReg) {
        alert("请输入正确的手机号");
        return;
      }
      if (this.password.length < 6) {
        alert("密码长度不能小于6位");
        return;
      }
      if (this.captcha.toLowerCase() != "wk3v") {
        alert("验证码错误");
        return;
      }
      let list = 
        {
          name: yanzhengphone,
          password: this.password,
          captcha: this.captcha
        }
      ;
      if (window.localStorage.getItem("regiest") == null) {
        listPone.push(list);
        window.localStorage.setItem("regiest", JSON.stringify(listPone));
        // listPone=[];
      } else {
        listPone  = JSON.parse(window.localStorage.getItem("regiest"));
        let length = listPone.length;
        for (var i = 0; i < length; i++) {
          if (listPone[i].name === yanzhengphone) {
            this.phone = "";
            alert("该账户已注册，请申请其他账户");
            return;
          } else {
            listPone.push(list);
            window.localStorage.setItem("regiest", JSON.stringify(listPone));
          }
        }
      }
      this.phone = "";
      this.password = "";
      this.captcha = "";
      alert("注册成功，请登入");
    }
  },

  computed: {
    phoneReg() {
      return /^1\d{10}$/.test(this.phone);
    },
    showpassword() {
      if (this.swith) {
        this.showtext = "text";
      } else {
        this.showtext = "password";
      }
      return this.showtext;
    }
  }
};
</script>

<style scoped>
h3 {
  width: 100%;
  text-align: center;
  margin-bottom: 45px;
  margin-top: 30px;
  color: green;
  font-size: 40px;
}
.login_header_title {
  text-align: center;
  margin-bottom: 10px;
}
.login_header_title a {
  text-align: center;
  margin: 10px;
}
.login_hint {
  color: silver;
}
.about_us {
  margin-top: 25px;
  text-align: center;
}
.loginwaycss {
  color: red;
}
.buttoncss {
  color: blue;
}
.swithcss {
  margin-top: 10px;
}
</style>
