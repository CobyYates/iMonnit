<template>
  <v-card>
    <v-card-title class="py-1">
      <v-icon color="blue">mdi-pulse</v-icon>
      Sensors
    </v-card-title>
    <v-divider />
    <v-list dense>
      <v-list-item
        v-for="(item,i) in sensors"
        :key="item.i"
        :class="i % 2 == 1 ? 'grey lighten-3' : ''"
        class="d-flex justify-space-between"
      >
        <a href="">{{item.name}}</a>
        <v-spacer />
        <span>
          <v-chip label>12/31/2020 3:00 PM</v-chip>
          <v-btn class="ml-4" color="blue" small dark>View Sensor</v-btn>
        </span>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "HomeSensorList",

  data: () => ({
    sensors: [
      {
        name: "Button",
        icon: "mdi-pulse",
        numbers: "0",
        color: "green",
      },
      {
        name: "Temperature",
        icon: "mdi-bell-outline",
        numbers: "0",
        color: "red",
      },
      {
        name: "Motion",
        icon: "mdi-router-wireless",
        numbers: "1",
        color: "blue",
      },
      {
        name: "Button",
        icon: "mdi-bell-outline",
        numbers: "1",
        color: "purple",
      },
    ],
  }),
};
</script>
