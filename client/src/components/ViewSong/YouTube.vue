<template>
  <panel title="YouTube Video">
    <div class="container">
      <youtube
        :video-id="youtubeId"
        :resize="true"
        :fit-parent="true"
      />
    </div>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
.container {
  position: relative;
  top: -25px;
  left: -20px;
  width: 100%;
  height: 0;
  padding-bottom: 52%;
}
</style>
