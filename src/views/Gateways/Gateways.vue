<template>
  <v-row>
    <v-col>
      <v-card :class="$store.state.mainCard">
        <v-card-title>
          <v-icon color="blue" class="mr-3">mdi-pulse</v-icon>
          Gateways
        </v-card-title>
        <v-card-text>
          <Sensor :items="$store.state.gateways" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Sensor from "../../components/Sensor";
export default {
  name: "Sensors",
  components: {
    Sensor,
  },

  data: () => ({
    //
  }),
};
</script>
