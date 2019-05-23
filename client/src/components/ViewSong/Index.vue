<template>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song" />
    </v-flex>
  </v-layout>
</template>

<script>
import SongMetadata from '@/components/ViewSong/SongMetadata'
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
    SongMetadata
  }
}
</script>

<style scoped>

textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: auto;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 40px;
}
</style>
