import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
import routes from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter)
console.log(routes);

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')