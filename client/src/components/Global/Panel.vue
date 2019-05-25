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
  background: rgb(101,95,115);
  background: linear-gradient(93deg, rgba(101,95,115,1) 0%, rgba(43,43,59,1) 100%);
}
</style>
