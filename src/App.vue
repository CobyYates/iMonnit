<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-icon large>mdi-bell</v-icon>
      <v-img
        contain
        height="40"
        src="https://www.imonnit.com/Themes/Default/Content/images/Logo_TopBar.png"
      />
      <v-icon large>mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      color="blue"
      app
      :disable-route-watcher="true"
      clipped
      :mini-variant="mini"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="subtitle">
            Overview
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item :to="item.to" v-for="item in navTop" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="subtitle">
            Account
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item :to="item.to" v-for="item in navBottom" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view class="mx-auto" />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    mini: false,
    drawer: null,
    navTop: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "Sensors", icon: "mdi-pulse", to: "/Sensors" },
      { title: "Gateways", icon: "mdi-router-wireless", to: "/Gateways" },
      { title: "Actions", icon: "mdi-rocket", to: "" },
      { title: "Maps", icon: "mdi-navigation", to: "" },
      { title: "Charts", icon: "mdi-chart-line-variant", to: "" },
    ],
    navBottom: [
      { title: "Reports", icon: "mdi-file-document", to: "" },
      { title: "Users", icon: "mdi-account-group", to: "" },
      { title: "Networks", icon: "mdi-signal-variant", to: "" },
      { title: "Credits", icon: "mdi-circle-multiple", to: "" },
      { title: "Settings", icon: "mdi-account-cog", to: "" },
      { title: "Log Out", icon: "mdi-logout", to: "" },
    ],
  }),
};
</script>
