import Vue from 'vue'
import Vant from 'vant' // 引入已安装好的 Vant ui 这个插件
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import {axios} from "axios"
import { Icon } from 'vant';

Vue.use(Icon);

Vue.prototype.$ajax = axios
Vue.use(Vant);

Vue.config.productionTip = false

import { Row, Col } from 'vant';
Vue.use(Row).use(Col);
const eventBus = new Vue();
Vue.config.productionTip = false;
Vue.prototype.$eventBus = eventBus;
// import Vant from 'vant'
// import 'vant/lib/index.css'
// // Vue.config.productionTip = false
// Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
