<template>
  <v-toolbar fixed class="deep-orange lighten-1" dark>
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        <v-icon>queue_music</v-icon>
        Playlist Manager
      </span>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn> -->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat dark
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'login'})">
          Login
        </v-btn>
        <v-btn flat dark
          v-if="!$store.state.isUserLoggedIn"
          @click="navigateTo({name: 'register'})">
          Sign Up
        </v-btn>
      </v-toolbar-items>
    <!-- </v-toolbar-items> -->
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}
.home:hover {
  color: #BBDEFB;
}
</style>
