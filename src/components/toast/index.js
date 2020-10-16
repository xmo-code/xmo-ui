import Toast from "./toast";
import Vue from "vue";

function open(propsData) {
  const ToastComponent = Vue.extend(Toast);
  return new ToastComponent({
    el: document.createElement("div"),
    propsData
  });
}

export default {
  text(opts) {
    const defaultOpts = {
      content: "",
      mask: false,
      direction: "",
      callBack() {}
    };
    const propsOpts = Object.assign(defaultOpts, opts);
    return open(propsOpts);
  },
  loading(opts) {
    const defaultOpts = {
      content: "",
      mask: true,
      direction: "",
      callBack() {}
    };
    const propsOpts = Object.assign(defaultOpts, opts);
    return open(propsOpts);
  }
};
