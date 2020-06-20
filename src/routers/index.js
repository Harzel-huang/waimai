import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import start from '../views/Start';//测试上上传是否成功
import search from '../views/Search'
import order from '../views/Order';
import mine from '../views/Mine';
import login from '../views/Login';
import UserInfo from '../views/UserInfo';
import detail from '../components/detail';
import food from '../components/detail/food'
import issue from '../components/detail/issue'
import shopInfo from '../components/detail/shopInfo'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect:'/start',meta:{showfooter:true}},
    {path:'/start',component:start,meta:{showfooter:true}},
    {path:'/search',component:search,meta:{showfooter:true}},
    {path:'/order',component:order,meta:{showfooter:true}},
    {path:'/mine',component:mine,meta:{showfooter:true}},
    {path:'/login',component:login,meta:{showfooter:false}},
    {path:'/userinfo',component:UserInfo,meta:{showfooter:false}},
    {
      path:'/detail',
      component:detail,
      meta:{showfooter:true},
      children:[
        {path:'/',redirect:'food',meta:{showfooter:false}},
        {path:'food',component:food,meta:{showfooter:false}},
        {path:'issue',component:issue,meta:{showfooter:false}},
        {path:'shopInfo',component:shopInfo,meta:{showfooter:false}}
      ]
  },
   

  ]
})
