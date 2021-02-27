import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SensorDetails from "../views/Sensors/SensorDetails.vue";
import SensorHome from "../views/Sensors/SensorHome.vue";
import SensorChart from "../views/Sensors/SensorChart.vue";

Vue.use(VueRouter);

// const SensorCharts = (resolve) => {
//   require.ensure(["../components/SensorPages/SensorCharts.vue"], () => {
//     resolve(require("../components/SensorPages/SensorCharts.vue"));
//   });
// };

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Sensors",
    name: "Sensors",
    component: () =>
      import(/* webpackChunkName: "sensors" */ "../views/Sensors/Sensors.vue"),
  },
  {
    path: "/gateways",
    name: "Gateways",
    component: () =>
      import(
        /* webpackChunkName: "gateways" */ "../views/Gateways/Gateways.vue"
      ),
  },
  {
    path: "/Sensor/:id",
    component: () =>
      import(
        /* webpackChunkName: "sensorchart" */ "../views/Sensors/Sensor.vue"
      ),
    children: [
      { path: "", component: SensorChart },
      { path: "SensorDetails", component: SensorDetails },
      { path: "/SensorHome/:id", component: SensorHome },
      // { path: "/", component: SensorHome },
      // { path: "/", component: SensorHome },
    ],
  },
  {
    path: "/GatewayHome/:id",
    component: () =>
      import(
        /* webpackChunkName: "gatewayhome" */ "../views/Gateways/GatewayHome.vue"
      ),
    // children: [
    //   { path: "Details", component: GatewayDetails }
    // ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
