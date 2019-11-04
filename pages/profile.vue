<template>
  <v-app>
    <mp-header-nb />
    <h1 class="subheading grey--text">PROFILE</h1>

    <v-card class="mx-auto" max-width="344">
      <v-avatar size="344">
        <img src="@/assets/profile/tomo.png" height="200px" alt />
        <!-- <v-img src="assets/profile/tomo.png" height="200px"/> -->
      </v-avatar>

      <v-card-title>TOMOHIRO</v-card-title>

      <v-content>G's Academy Fukuoka Dev3</v-content>

      <!-- タグをつける -->
      <v-btn>筋トレ</v-btn>
      <v-btn>プログラミング</v-btn>
      <v-btn>学生</v-btn>
      <v-btn>メンズフィジーク</v-btn>
      <v-btn>野球</v-btn>

      <v-card-actions>
        <div class="purple--text">Introduction</div>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>コードの書きすぎで運動不足です。。まずは週1からでも一緒に出来る人探しています！</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-app>
</template>


<script>
import MpHeaderNb from '~/components/MpHeaderNb.vue'

export default {
  components: {
    MpHeaderNb
  },
  data: () => ({
    show: false
  })
}
</script>