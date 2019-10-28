<template>
  <v-app>
    <mp-header-nb />
    <div>Home</div>
    <v-btn>DO THE WORK!!</v-btn>
  </v-app>
</template>

<script>
import MpHeaderNb from '~/components/MpHeaderNb.vue'
import db from '~/plugins/firebase'

export default {
  //header反映
  components: {
    MpHeaderNb
  }
}
</script>

<style>
/* * {
  border: solid blue 1px;
} */
</style>