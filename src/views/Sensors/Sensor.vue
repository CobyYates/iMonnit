<template>
  <v-row>
    <v-col>
      <SensorNav />
      <SensorCharts />
      <router-view class="mx-0 px-0">
      </router-view>
      
    </v-col>
  </v-row>
</template>

<script>
import SensorNav from "../../components/SensorNav";
import SensorCharts from "../../components/SensorPages/SensorCharts";

export default {
  name: "SensorChart",
  components: {
    SensorNav,
    SensorCharts
  },

  data: () => ({
    //
  }),
};
</script>
