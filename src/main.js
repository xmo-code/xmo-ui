import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import xmoUI from "./components/index";
import "@babel/polyfill";

createApp(App)
  .use(store)
  .use(router)
  .use(xmoUI)
  .mount("#app");
