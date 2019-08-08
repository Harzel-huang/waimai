<template>
  <div class="cart">
    <transition name="fade">
     <div class="jianhao" @click.stop="updataCount(true)" v-show="food.count">
      <i class="iconfont icon-jianhao"></i>
    </div>
    </transition>
    <div class="text" v-show="food.count">{{food.count}}</div>
    <div class="jiahao" @click.stop="updataCount(false)">
      <i class="iconfont icon-jiahao"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    food: Object,
  },
  methods: {
    updataCount(status) {
      if (status === true) {//减少数量
        // console.log("减少");
        this.$store.commit('descreatedCount',this.food)
      } else {//增加数量
       this.$store.commit("increatedcount",this.food)
        // console.log("增加");
      } 
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(15px),rotate(180deg)

}
.cart {
  display: flex;
  width: 50px;
  margin-left: 80px;
}
.jianhao {
  color: blue;
  width: 30px;
  text-align: center;
}
.jiahao {
  color: red;
  width: 30px;
  text-align: center;
}
.text {
  width: 20px;
  text-align: center;
}
</style>
