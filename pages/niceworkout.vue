<template>
  <v-app>
    <mp-header-nb />
    <h1 class="subheading blue--text text-center">YOU ARE THE BEST!!</h1>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <img v-bind:src="item.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import MpHeaderNb from '~/components/MpHeaderNb.vue'

export default {
  //header反映
  components: {
    MpHeaderNb
  },
  data: () => ({
    items: [
      { header: 'Message from members' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'お疲れ様！！次も頑張って！！'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'その調子！！'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: '世界を変えるGEEKになれる！'
      }
    ]
  })
}
</script>