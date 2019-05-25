<template>
  <div class="dark-gray">
    <v-toolbar flat dense class="bar-gradient" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
.dark-gray {
  background: #22252b;
}
.bar-gradient {
  color: #141414;
  background: rgb(70,70,70);
  background: linear-gradient(90deg, rgba(100,100,100,1) 0%, rgba(34,37,43,1) 100%);
}
</style>
