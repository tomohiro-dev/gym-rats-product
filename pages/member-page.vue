<template>
  <members-only>
    <h1 class="shadow">Make time for workout with partners!!!</h1>
    <a href="/profile">Let's enjoy!!</a>
    <!-- <a href="/account">Let's enjoy!!</a> -->
  </members-only>
</template>

<script>
import MembersOnly from '~/components/members-only.vue'

export default {
  components: {
    MembersOnly
  }
}
</script>

<style>
.shadow {
  color: #fff;
  font-family: Arvo;
  font-weight: bold;
  text-shadow: -3px -3px 0 #222, 3px -3px 0 #222, -3px 3px 0 #222,
    3px 3px 0 #222, 4px 4px 0 #fff, 5px 5px 0 #fff, 6px 6px 0 #fff,
    7px 7px 0 #fff;
  line-height: 0.8em;
  letter-spacing: 0.1em;
  transform: scaleY(0.7);
  -webkit-transform: scaleY(0.7);
  -moz-transform: scaleY(0.7);
  margin: 0;
  text-align: center;
}
</style>