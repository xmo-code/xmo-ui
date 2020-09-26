import "@style/index.scss";

const components = {};

const install = function(Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  });

  // Vue.prototype.$modal = "";
  // Vue.prototype.$toast = "";
};

if (typeof window === "undefined" && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  ...components
};

export default API;
