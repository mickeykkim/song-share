<template>
  <panel title ="Songs">
    <v-btn
      v-if="isUserLoggedIn"
      slot="action"
      :to="{
        name: 'songs-create'
      }"
      class="light-blue darken-1"
      medium
      dark
      absolute
      right>
      <v-icon
        small
        light
      >add</v-icon>
      Share Song
    </v-btn>

    <div
      v-for="song in songs"
      class="song"
      :key="song.id">

      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-album">
            {{song.album}}
          </div>
          <br>
          <div class="song-sharer">
            Shared by:
            {{song.sharedBy}}
            <br>
          </div>

        <v-btn
          dark
          class="light-blue darken-1"
          :to="{
            name: 'song',
            params: {
              songId: song.id
            }
          }">
          <v-icon dark left>visibility</v-icon>
          View
        </v-btn>

        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl" />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      songs: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 260px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-album {
  font-size: 18px;
}

.song-sharer {
  font-size: 16px;
}

.album-image {
  width: 55%;
  margin: 0 auto;
}
</style>
