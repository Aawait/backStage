import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

// 全局都可以使用axios了
Vue.prototype.$axios = axios

// 全局注册事件列车，所有组件都能访问
Vue.prototype.eventBus = new Vue()

Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
