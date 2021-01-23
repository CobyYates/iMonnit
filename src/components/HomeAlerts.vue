<template>
  <v-row class="alerts">
    <v-col
      v-for="item in alerts"
      :key="item.i"
      cols="3"
    >
      <v-card class="card" :color="item.color" dark>
        <v-card-title>{{item.title}}</v-card-title>
        <v-card-text class="d-flex justify-space-between">
          <p>{{item.numbers}}</p>
          <v-icon x-large>{{item.icon}}</v-icon>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    alerts: [
      {
        title: "Active Sensors",
        icon: "mdi-pulse",
        numbers: "0",
        color: "green lighten-1",
      },
      {
        title: "Alerting Sensors",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red lighten-1",
      },
      {
        title: "Active Gateways",
        icon: "mdi-router-wireless",
        numbers: "1",
        color: "blue lighten-1",
      },
      {
        title: "Alerting Gateways",
        icon: "mdi-bell-outline",
        numbers: "1",
        color: "purple lighten-1",
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