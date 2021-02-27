<template>
  <v-row>
    <v-col v-for="(item, i) in items" :key="i" xl="3" lg="3" md="4" sm="12">
      <v-card
        @click="openSensor(item, i)"
        :class="$store.state.cardMargin"
        :elevation="$store.state.shadow"
      >
        <v-list-item class="pb-0" three-line>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-chip label small>{{ item.status }}</v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            ><v-icon large>{{ item.icon }}</v-icon></v-list-item-avatar
          >
        </v-list-item>

        <v-card-actions class="pt-0">
          <v-icon small>mdi-signal</v-icon>
          <v-icon small :color="batteryColor(item.battery)"
            >mdi-battery-60</v-icon
          >
          <v-icon small>mdi-fingerprint</v-icon>
          <v-spacer />
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item
                class="my-0"
                dense
                v-for="(item, index) in menuItems"
                :key="index"
              >
                <v-list-item-title class="my-0">{{
                  item.title
                }}</v-list-item-title>
                <v-list-item-avatar class="my-0"
                  ><v-icon>{{ item.icon }}</v-icon></v-list-item-avatar
                >
              </v-list-item>
              <v-divider />
              <v-list-item dense>
                <v-list-item-title class="my-0">{{
                  deleteIcon.title
                }}</v-list-item-title>
                <v-list-item-avatar class="my-0"
                  ><v-icon>{{ deleteIcon.icon }}</v-icon></v-list-item-avatar
                >
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["items"],
  components: {},
  data: () => ({
    menuItems: [
      {
        title: "Details",
        to: "",
        color: "blue",
        icon: "mdi-chart-areaspline-variant",
      },
      {
        title: "Readings",
        to: "",
        color: "green",
        icon: "mdi-format-list-bulleted",
      },
      { title: "Actions", to: "", color: "red", icon: "mdi-rocket" },
      { title: "Settings", to: "", color: "grey lighten-2", icon: "mdi-cog" },
    ],
    deleteIcon: {
      title: "Delete",
      to: "",
      color: "red",
      icon: "mdi-trash-can-outline",
    },
    chartOptions: {
      xaxis: {
        type: "datetime",
        categories: [
          "2019-01-01",
          "2019-02-01",
          "2019-03-01",
          "2019-04-01",
          "2019-05-01",
          "2019-06-01",
          "2019-07-01",
        ],
      },
    },
    series: [
      {
        name: "WebsiteHits",
        data: [15, 20, 21, 25, 60, 120, 93],
      },
    ],
  }),
  methods: {
    openSensor(item, i) {
      let urlString = null;
      item.type == "sensor"
        ? (urlString = `/Sensor/${i}`)
        : (urlString = `/GatewayInfo/${i}`);
      this.$router.push(urlString);
    },
    batteryColor(bat) {
      if (bat > 0 && bat <= 33) return "red";

      if (bat > 33 && bat < 66) return "orange";
      else return "green";
    },
  },
};
</script>

<style lang="scss" scoped></style>
