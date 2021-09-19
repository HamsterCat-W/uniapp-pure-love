import App from "./App";

// #ifndef VUE3
import Vue from "vue";

// 防抖节流
import debounce from "./common/js/debounce";
Vue.prototype.$debounce = debounce;
Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
import { createSSRApp } from "vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
