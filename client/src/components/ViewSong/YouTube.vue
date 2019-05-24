<template>
  <panel title="YouTube Video">
    <youtube
      :video-id="youtubeId"
    />
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
