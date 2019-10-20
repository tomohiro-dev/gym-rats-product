<template>
  <!-- ユーザーページ -->
  <div>
    <div>
      <!-- ケバブケース使う -->
      <the-header />
      <p>test</p>
      <!-- <p>{{ user.email }}</p> -->
    </div>
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