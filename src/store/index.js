import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: [
      {
        name: "Coby Yates",
      },
    ],
    shadow: "3",
    cardMargin: "mx-3 my-2",
    mainCard: "ma-5",
    sensors: [
      {
        name: "Button - 123154",
        icon: "mdi-pulse",
        numbers: "0",
        color: "green",
        status: "unavailable",
        type: "sensor"
      },
      {
        name: "Temperature - 123154",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red",
        status: "unavailable",
        type: "sensor"
      },
      {
        name: "Motion - 123154",
        icon: "mdi-router-wireless",
        numbers: "1",
        color: "blue",
        status: "unavailable",
        type: "sensor"
      },
      {
        name: "Button",
        icon: "mdi-bell-outline",
        numbers: "1",
        color: "purple",
        status: "unavailable",
        type: "sensor"
      },
      {
        name: "Temperature",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red",
        status: "unavailable",
        type: "sensor"
      },
      {
        name: "Motion - 123154",
        icon: "mdi-router-wireless",
        numbers: "1",
        color: "blue",
        status: "unavailable",
        type: "sensor"
      },
      {
        name: "Button - 123154",
        icon: "mdi-bell-outline",
        numbers: "1",
        color: "purple",
        status: "unavailable",
        type: "sensor"
      },
    ],
    gateways: [
      {
        name: "Button - 123154",
        icon: "mdi-pulse",
        numbers: "0",
        color: "green",
        status: "unavailable",
        type: "gateway"
      },
      {
        name: "Temperature - 123154",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red",
        status: "unavailable",
        type: "gateway"
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
