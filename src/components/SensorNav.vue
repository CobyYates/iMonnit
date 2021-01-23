<template>
  <v-row>
    <v-col>
      <v-card :elevation="$store.state.shadow" dense class="d-flex justify-space-between mt-4 px-12 py-1">
        <v-btn
          icon
          v-for="item in navs"
          :key="item.i"
          :to="item.to"
        >
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SensorCharts",

  data: () => ({
    navs: [
      {
        icon: "mdi-arrow-left",
        to: ""
      },
      {
        icon: "mdi-chart-areaspline-variant",
        to: ""
      },
      {
        icon: "mdi-format-list-bulleted",
        to: ""
      },
      {
        icon: "mdi-rocket",
        to: ""
      },
      {
        icon: "mdi-cog",
        to: ""
      },
      {
        icon: "mdi-wrench",
        to: ""
      },
      {
        icon: "mdi-scale-balance",
        to: ""
      },
    ],
  }),
};
</script>

<style scoped>
.alerts {
  overflow-x: scroll;
}
</style>