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
    theme: [
      {
        primaryColor: "blue",
        secondaryColor: "",
        buttonColor: "",
        detailsColor: "",
        Color: "",
      },
    ],
    shadow: "3",
    cardMargin: "mx-3 my-2",
    mainCard: "ma-5",
    sensors: [
      {
        name: "Button - 123154",
        reading: "110° F",
        icon: "mdi-pulse",
        numbers: "0",
        color: "green",
        status: "unavailable",
        type: "sensor",
        battery: 50,
      },
      {
        name: "Temperature - 123154",
        reading: "110° F",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red",
        status: "unavailable",
        type: "sensor",
        battery: 75,
      },
      {
        name: "Motion - 123154",
        reading: "110° F",
        icon: "mdi-router-wireless",
        numbers: "1",
        color: "blue",
        status: "unavailable",
        type: "sensor",
        battery: 80,
      },
      {
        name: "Button",
        reading: "110° F",
        icon: "mdi-bell-outline",
        numbers: "1",
        color: "purple",
        status: "unavailable",
        type: "sensor",
        battery: 10,
      },
      {
        name: "Temperature",
        reading: "110° F",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red",
        status: "unavailable",
        type: "sensor",
        battery: 100,
      },
      {
        name: "Motion - 123154",
        reading: "110° F",
        icon: "mdi-router-wireless",
        numbers: "1",
        color: "blue",
        status: "unavailable",
        type: "sensor",
        battery: 20,
      },
      {
        name: "Button - 123154",
        reading: "110° F",
        icon: "mdi-bell-outline",
        numbers: "1",
        color: "purple",
        status: "unavailable",
        type: "sensor",
        battery: 70,
      },
    ],
    gateways: [
      {
        name: "Button - 123154",
        reading: "110° F",
        icon: "mdi-pulse",
        numbers: "0",
        color: "green",
        status: "unavailable",
        type: "gateway",
      },
      {
        name: "Temperature - 123154",
        reading: "110° F",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red",
        status: "unavailable",
        type: "gateway",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
