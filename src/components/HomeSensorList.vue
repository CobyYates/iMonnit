<template>
  <v-container fluid>
    <!-- sensors -->
    <v-row>
      <v-col>
        <v-card elevation="4">
          <v-card-title class="py-1">
            <v-icon color="red" class="mr-3">mdi-bell-outline</v-icon>
            Sensors
          </v-card-title>
          <v-divider />
          <v-list dense>
            <v-list-item
              v-for="(item, i) in $store.state.sensors"
              :key="item.i"
              :class="i % 2 == 1 ? 'grey lighten-3' : ''"
              class="d-flex justify-space-between"
            >
              <v-row>
              <v-col class="d-flex align-center">
                <a :href="`/SensorChart/${i}`" class="links">{{ item.name }}</a>
              </v-col>
              <v-col class="d-flex align-center">
                {{item.reading}}
              </v-col>
              <v-col class="d-flex justify-end">
                <v-chip label>12/31/2020 3:00 PM</v-chip>
                <v-btn
                  class="ml-4"
                  color="blue"
                  small
                  dark
                  :to="`/SensorChart/${i}`"
                  >View Sensor</v-btn
                >
              </v-col>
            </v-row>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- gateways -->
    <v-row>
      <v-col>
        <v-card elevation="4">
          <v-card-title class="py-1">
            <v-icon color="blue">mdi-pulse</v-icon>
            Gateways
          </v-card-title>
          <v-divider />
          <v-list dense>
            <v-list-item
              v-for="(item, i) in $store.state.gateways"
              :key="item.i"
              :class="i % 2 == 1 ? 'grey lighten-3' : ''"
              class="d-flex justify-space-between"
            >
            <v-row class="justify-space-between">
              <v-col cols="4" class="d-flex align-center">
                <a :href="`/GatewayHome/${i}`" class="links">{{ item.name }}</a>
              </v-col>
              <v-col cols="4" class="d-flex align-center">
                {{item.reading}}
              </v-col>
              <v-col cols="4" class="d-flex justify-end">
                <v-chip label>12/31/2020 3:00 PM</v-chip>
                <v-btn
                  class="ml-4"
                  color="blue"
                  small
                  dark
                  :to="`/GatewayHome/${i}`"
                  >View Sensor</v-btn
                >
              </v-col>
            </v-row>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeSensorList",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.links {
  text-decoration: none;
}
</style>