<template>
  <v-app>
    <mp-header-nb />
    <div>Home page</div>
    <div v-if="isAuthenticated">
      <div>{{ user.email }}でログイン中です</div>
      <!-- <a href="/member-page">メンバーページへ</a> -->
    </div>

    <v-btn @click="log">DO THE WORK!!</v-btn>
  </v-app>
</template>

<script>
import MpHeaderNb from '~/components/MpHeaderNb.vue'
import firebase from '~/plugins/firebase'

import db from '~/plugins/firebase'
import { mapState, mapGetters } from 'vuex'

export default {
  //header反映
  components: {
    MpHeaderNb
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    log() {
      const user = firebase.auth().currentUser
      console.log(user.uid)
    }
  }
}
</script>

<style>
/* * {
  border: solid blue 1px;
} */
</style>