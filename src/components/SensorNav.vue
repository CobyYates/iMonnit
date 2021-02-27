<template>
  <v-row>
    <v-col>
      <v-card
        :elevation="$store.state.shadow"
        dense
        class="d-flex justify-space-between mt-4 px-12 py-1"
      >
        <v-btn
          icon
          v-for="(item) in navs"
          :key="item.i"
          :to="`${item.to}/${i != 0 ? $route.params.id : ''}`"
        >
          <!-- :to="item.to" -->
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SensorCharts",

  data: () => ({
    sensorLink: "",
    navs: [
      {
        icon: "mdi-arrow-left",
        to: "/Sensors",
      },
      {
        icon: "mdi-chart-areaspline-variant",
        to: "Sensor",
      },
      {
        icon: "mdi-format-list-bulleted",
        to: "/SensorHome",
      },
      {
        icon: "mdi-rocket",
        to: "SensorNotification",
      },
      {
        icon: "mdi-cog",
        to: "SensorEdit",
      },
      {
        icon: "mdi-wrench",
        to: "",
      },
      {
        icon: "mdi-scale-balance",
        to: "",
      },
    ],
  }),
  mounted() {
    // this.navs[1].to = `/SensorChart/${this.$route.params.id}`
  },
};
</script>

<style scoped>
.alerts {
  overflow-x: scroll;
}
</style>
