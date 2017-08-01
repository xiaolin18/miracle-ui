import Vue from "vue";
import VueRouter from "vue-router";
import Miracle from "../src/";
import echarts from "echarts";
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip'
// import Miracle from "../dist/miracle/miracle";
import App from "./App";
import Echarts from "vue-echarts";
import Breadcrumb from "./Breadcrumb";
import Linechart from "./linechart";
import Button from "./Button";
import Hljs from "highlightjs";

Vue.use(Hljs);
Vue.use(VueRouter);
Vue.use(Miracle);
Vue.component('chart', Echarts);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/breadcrumb', component: Breadcrumb },
    { path: '/button', component: Button },
    { path: '/linechart', component: Linechart }
  ]
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
