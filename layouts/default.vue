<template>
  <v-app dark>
    <v-content>
      <nuxt />
    </v-content>
    <!-- フッター開始 -->
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 GYM-RATS-</span>
    </v-footer>
    <!-- フッター終わり -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'GYM-RATS-'
    }
  }
}
</script>
