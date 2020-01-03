import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from 'vuex'
import {store} from "./store"
import App from "./App.vue";
import { routes } from "./router";


Vue.use(VueRouter);
Vue.use(Vuex)

const router = new VueRouter({
  mode: "history",
  routes
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
