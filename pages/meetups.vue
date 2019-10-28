<template>
  <v-app>
    <!-- 直近の日程を表示させたい！！ -->
    <mp-header-nb />
    <div>Meet up page(最後に消す)</div>

    <v-layout row wrap>
      <v-flex xs12>
        <v-container class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs-5>
                <v-col cols="12">
                  <v-card color="#385F73" dark>
                    <v-card-title class="headline">Unlimited music now</v-card-title>
                    <v-content>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-content>
                    <v-card-actions>
                      <v-btn text>Listen Now</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>

                <v-col v-for="(item, i) in items" :key="i" cols="12">
                  <v-card :color="item.color" dark>
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="headline" v-text="item.title"></v-card-title>

                        <v-content v-text="item.artist"></v-content>
                      </div>

                      <v-avatar class="ma-3" size="125" tile>
                        <v-img :src="item.src"></v-img>
                      </v-avatar>
                    </div>
                    <v-card-actions>
                      <v-btn text>Listen Now</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-flex>
            </v-layout>
          </v-container>
        </v-container>
      </v-flex>
    </v-layout>
  </v-app>
</template>


<script>
import MpHeaderNb from '~/components/MpHeaderNb.vue'

export default {
  components: {
    MpHeaderNb
  },
  data: () => ({
    items: [
      {
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'Supermodel',
        artist: 'Foster the People'
      }
    ]
  })
}
</script>