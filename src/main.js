import Vue from 'vue'
import App from './App';
import 'ant-design-vue/dist/antd.css';
import router from './router'
import Antd from 'ant-design-vue';
import FrontLayout from "@/layout/FrontLayout.vue";
import '@/assets/css/app.css'
import AdminLayout from "@/layout/AdminLayout.vue";
import EmptyLayout from "@/layout/EmptyLayout.vue";


Vue.config.productionTip = false
Vue.use(Antd)
Vue.component("layout-front", FrontLayout);
Vue.component("layout-admin", AdminLayout);
Vue.component("layout-empty", EmptyLayout);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
