import { createRouter, createWebHistory } from "vue-router";
import Home from "@views/Home";
import Button from "@views/basic/Button";
let routes;
routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/button",
    name: "button",
    component: Button
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
