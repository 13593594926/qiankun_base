import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index';
import { registerMicroApps, start } from 'qiankun'
const apps = [
  {
    name: 'vueApp',
    entry: 'https://13593594926.github.io/qiankun_vue/dist/index',
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'reactApp',
    entry: 'https://13593594926.github.io/qiankun_react/build/index',
    container: '#react',
    activeRule: '/react'
  },
]
registerMicroApps(apps) // 注册应用
start({
  prefetch: false
}) // 开启
Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  router
}).$mount('#qianKun')
