<template>
  <div id="app">
    <v-app>
      <!-- Nav Bar -->
      <v-app-bar app>
        <v-toolbar-items>
          <v-btn to="/signin">
          Sign In
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <!-- Nav Drawer -->
      <v-navigation-drawer app temporary>
        <v-btn>button</v-btn>        
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

<style>

</style>
