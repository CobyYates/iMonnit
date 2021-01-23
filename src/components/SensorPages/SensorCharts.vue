<template>
  <v-row>
    <v-col>
      <v-card v-if="device != null">
        <v-card-title class="py-0">{{ device.name }}</v-card-title>
        <v-divider />
        <v-card-text>
          Gateway: <a href="">{{ $store.state.gateways[0].name }}</a>
        </v-card-text>
        <v-card-actions>
          <v-chip label>Last Message: Unavailable</v-chip>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SensorCharts",
  mounted() {
    this.device = this.$store.state.sensors[this.$route.params.id];
  },
  data: () => ({
    device: null,
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

<style>
a {
  text-decoration: none;
}
</style>
