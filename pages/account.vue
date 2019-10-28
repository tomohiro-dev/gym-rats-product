<template>
  <div>
    <div>
      <the-header />
      <p>You must be login.</p>
      <!-- <p>{{ user.email }}</p> -->
    </div>
    <router-link to="index">
      <v-btn class="hidden-sm-only">LOGIN</v-btn>
    </router-link>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>


<style>
/* * {
  border: solid blue 1px;
} */
</style>