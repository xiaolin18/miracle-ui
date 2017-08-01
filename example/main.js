import Vue from "vue";
import VueRouter from "vue-router";
// import Miracle from "../src/";
import Miracle from "../dist/miracle/miracle";
import App from "./App";

Vue.use(VueRouter);
Vue.use(Miracle);

const router = new VueRouter({
  routers: [
    { path: "/breadcrumb", component: require("./Breadcrumb") },
    { path: "/button", component: require("./Button") },
  ]
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
