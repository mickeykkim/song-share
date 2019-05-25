<template>
  <v-layout>
    <v-flex>
      <you-tube :youtubeId="song.youtubeId"/>
      <song-metadata :song="song" class="mt-3" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    SongMetadata,
    YouTube
  }
}
</script>

<style scoped>

</style>
