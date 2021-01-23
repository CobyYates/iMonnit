import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const SensorCharts = (resolve) => {
  require.ensure(["../components/SensorPages/SensorCharts.vue"], () => {
    resolve(require("../components/SensorPages/SensorCharts.vue"));
  });
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sensors",
    name: "Sensors",
    // route level code-splitting
    // this generates a separate chunk (Sensors.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sensors" */ "../views/Sensors.vue"),
  },
  {
    path: "/SensorChart/:id",
    component: () =>
      import(/* webpackChunkName: "sensorchart" */ "../views/SensorChart.vue"),
    children: [{ path: "/", component: SensorCharts }],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
