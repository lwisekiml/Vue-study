import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/", // 8080으로 접속하면  Home 화면 출력
      component: Home,
    },
    {
      path: "/about", // /about으로 접속하면 About 화면 출력
      component: About,
    },
  ],
});

export default router;
