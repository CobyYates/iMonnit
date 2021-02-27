<template>
  <v-container>
    <v-row class="px-0">
      <v-col class="px-0">
        <v-card :class="$store.state.mainCard" class="mx-3">
          <v-card-title>
            <v-icon color="blue" class="mr-3">mdi-pulse</v-icon>
            Readings Chart
          </v-card-title>
          <v-card-text>
            <apexchart
              height="400"
              type="line"
              :options="chartOptions"
              :series="series"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- docs -->
    <v-row>
      <v-col cols="6">
        <v-card height="auto">
          <v-card-title>
            Support
          </v-card-title>
          <v-card-text>
            <v-list dense>
              <v-list-item v-for="item in support" :key="item.i" dense>
                <v-list-item-icon>
                  <v-icon :color="item.color">{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>{{ item.text }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- applications -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
      support: [
        {
          icon: "mdi-help-circle",
          text: "Frequently Asked Questions",
          color: "blue",
        },
        {
          icon: "mdi-book-open-outline",
          text: "Knowlodgebase",
          color: "grey",
        },
        {
          icon: "mdi-file-pdf",
          text: "Documentation",
          color: "red",
        },
      ],
      /*applications: [
        [
          [
            {text: "Remote Temperature Monitoring"},
            {text: "Frozen or Burst Pipe Monitoring"},
            {text: "Warehouse Temperature Monitoring"},
            {text: "HVAC System Monitoring"},
            {text: "Server Room Temperature Monitoring"},
            {text: "Ovens And Cooking Device Monitoring"},
            {text: "Environmental Monitoring"}
          ],
          [
            {text: "K9 Unit Temperature Monitoring"},
            {text: "Vacant Property Monitoring"},
            {text: "Non-combustible Liquid Storage Tank Temperature Monitoring"},
            {text: "Coolers & Freezer Temperature Monitoring"},
            {text: "Greenhouse Temperature Monitoring"},
            {text: "Laboratory Fridge Monitoring"},
            {text: "Morgue Storage Monitoring"},
          ],
        ],
      ],*/
    };
  },
};
</script>

<style lang="scss" scoped></style>
