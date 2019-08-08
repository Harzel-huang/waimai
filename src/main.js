import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import './assets/iconfont/iconfont.css'
import './assets/iconfont1/iconfont.css'
import axios from 'axios'
import '../src/mockjs/mock.js'
import { Switch } from 'element-ui';
import'mint-ui/lib/style.css'
import { Tabbar, TabItem} from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.component(Switch.name, Switch);



Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
