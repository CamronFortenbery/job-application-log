<template>
  <div id="app">
    <v-app>
      <!-- Nav Bar -->
      <v-app-bar app dark color="#114b5f">
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text v-if="!loggedIn" to="/signin">
            Sign In
          </v-btn>
          <v-btn v-if="loggedIn" text>
            Logout
          </v-btn>
          <v-btn v-if="loggedIn" text>
            Jobs
          </v-btn>
          <v-btn v-if="loggedIn" text>
            <v-icon left>mdi-account-circle</v-icon>
            Profile
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <!-- Nav Drawer -->
      <v-navigation-drawer app temporary>
      </v-navigation-drawer>

      <!-- Content -->
      <v-content>
          <router-view/>       
      </v-content>

       <!-- Footer -->
        <v-footer>

        </v-footer>
    </v-app>
   
  </div>
</template>

<script>
export default {
  computed: {
    title() {
      return this.$store.state.title;
    },
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  }
}
</script>

<style>

</style>
