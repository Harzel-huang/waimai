import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userid: "",
    userPhone: "",
    foodlist: [],//店铺菜单
    shopInfo:{},//店铺基本信息
    cartFoods:[],//购物车食物名单
    issue:[],//评论信息

  },
  mutations: {
    UserLogin(state, userPhone) {
      state.userid = userPhone;
    },
    pushfoodlist(state, foods) {
      state.foodlist = foods;
    },
    increatedcount(state, food) {
      if (!food.count) {
        Vue.set(food,"count",1);
        state.cartFoods.push(food);
      }
      else {
        food.count++;
      }
    },
    descreatedCount(state, food) {
      if (food.count) {
        food.count--;
        if(food.count===0){
          state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        }
      }
    },
    cleanShopCart(state){
      state.cartFoods=[];
    },

  },
  actions: {
    


  },
  getters:{
    totalCount(state){//reduce 为累加方法，第一个形参为之前值，第二个形参为本次的值 ES6写法
      return state.cartFoods.reduce((preTotal,food)=> preTotal+food.count,0 )
    },
    totalPrice(state){
      return state.cartFoods.reduce((preTotal,food)=> preTotal+food.count*food.price,0 )
    }
  }
})
