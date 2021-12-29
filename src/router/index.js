
import Vue from 'vue';
import home from '@/views/Home.vue'
import VueRouter from 'vue-router';
const routes = [
    {
        path: '/qiankun_base/dist/',
        component: home
    }
]
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes,
});
