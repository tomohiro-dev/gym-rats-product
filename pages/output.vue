<template>
  <div>
    <div>
      <h1>output page</h1>
      <!-- <div id="userdata">
      <div v-bind="userdata"></div>-->
    </div>
    <div>
      <router-link to="/">top page</router-link>
    </div>
  </div>
</template>

<script>
import db from '~/plugins/firebase'

export default {
  methods: {
    move() {
      firebase.then((user) => {
        this.$router.push('/index')
      })
    }
  }
}
</script>