<template>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>

    <v-flex xs6 class="ml-3">
      <you-tube :youtubeId="song.youtubeId" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
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
    Panel,
    SongMetadata,
    SongsService,
    YouTube
  }
}
</script>

<style scoped>

</style>
