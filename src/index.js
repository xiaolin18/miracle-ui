import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";
import { LineChart } from "./linechart";

const components = [
  Breadcrumb, BreadcrumbItem, LineChart
];
const install = function(Vue, opts = {}) {
  if (install.installed) return;
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
  BreadcrumbItem,
  LineChart
}
