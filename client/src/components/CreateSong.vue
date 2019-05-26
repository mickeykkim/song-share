<template>
  <v-layout>
    <v-flex>
      <panel title="Share Song">
        <v-text-field
          dark
          label="Title*"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          dark
          label="Artist*"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          dark
          label="Album*"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          dark
          label="Genre*"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          dark
          label="Album Image URL*"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          dark
          label="Youtube ID*"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>

        <v-text-field
          dark
          label="Name of Sharer*"
          required
          :rules="[required]"
          v-model="song.sharedBy"
        ></v-text-field>

        <div class="danger-alert" v-if="error">
          {{error}}
        </div>

        <div>
          <v-btn
            dark
            class="light-blue darken-1"
            @click="create">
            <v-icon dark left>check_circle</v-icon>
            Share Song
          </v-btn>
          <v-btn
            dark
            class="red darken-1"
            @click="$router.go(-1)">
            <v-icon dark left>cancel</v-icon>
            Cancel
          </v-btn>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        sharedBy: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all required fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
