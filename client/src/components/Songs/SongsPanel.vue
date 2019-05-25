<template>
  <panel title ="Songs">
    <v-btn
      v-if="isUserLoggedIn"
      slot="action"
      :to="{
        name: 'songs-create'
      }"
      class="deep-orange accent-1"
      small
      dark
      fab
      absolute
      right>
      <v-icon
        x-large>
        add
      </v-icon>
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
          class="deep-orange lighten-1"
          :to="{
            name: 'song',
            params: {
              songId: song.id
            }
          }"
          >View</v-btn>

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
  height: 330px;
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

.album-image {
  width: 50%;
  margin: 0 auto;
}
</style>
