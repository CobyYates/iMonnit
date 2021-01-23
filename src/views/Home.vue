<template>
  <div class="home">
    <v-row class="mt-3 mx-5">
      <v-col>
        <HomeAlerts msg="Welcome to Your Vue.js App" />
      </v-col>
    </v-row>
    <v-row class="mt-8 mx-5">
      <v-col>
        <HomeSensorList msg="Welcome to Your Vue.js App" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeAlerts from "@/components/HomeAlerts.vue";
import HomeSensorList from "@/components/HomeSensorList.vue";

export default {
  name: "Home",
  components: {
    HomeAlerts,
    HomeSensorList,
  },
};
</script>
