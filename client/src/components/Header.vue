<template>
  <v-toolbar fixed class="deep-orange lighten-1" dark>
    <v-toolbar-title class="mr-4">
      <router-link
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        <v-icon>queue_music</v-icon>
        Song Collection
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat dark
          v-if="!$store.state.isUserLoggedIn"
          :to="{
            name: 'login'
          }">
          Login
        </v-btn>
        <v-btn flat dark
          v-if="!$store.state.isUserLoggedIn"
          :to="{
            name: 'register'
          }">
          Sign Up
        </v-btn>
        <v-btn flat dark
          v-if="$store.state.isUserLoggedIn"
          @click="logout">
          LogOut
        </v-btn>
      </v-toolbar-items>
    <!-- </v-toolbar-items> -->
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
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
