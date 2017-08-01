import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";

const components = [
  Breadcrumb, BreadcrumbItem
];
const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.vue) {
  install(window.vue);
}

export default {
  install,
  Breadcrumb,
  BreadcrumbItem
}
