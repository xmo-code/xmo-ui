import "../styles/index.scss";
import Button from "../components/button/index";
import Toast from "../components/toast/index";

const components = {
  Button,
  ButtonGroup: Button.group
};

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    console.log(components[key]);
    Vue.component(components[key].name, components[key]);
  });

  // Vue.prototype.$modal = "";
  Vue.prototype.$toast = Toast;
};

if (typeof window === "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components
};

export default API;
