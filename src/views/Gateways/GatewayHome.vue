<template>
  <v-row>
    <v-col>
      <SensorNav />
      <router-view>
      </router-view>
    </v-col>
  </v-row>
</template>

<script>
import SensorNav from "../../components/SensorNav";

export default {
  name: "SensorChart",
  components: {
    SensorNav,
  },

  data: () => ({
    //
  }),
};
</script>
