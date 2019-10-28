<template>
  <v-app>
    <mp-header-nb />
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm16 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img v-bind:src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.intro}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import MpHeaderNb from '~/components/MpHeaderNb.vue'

export default {
  components: {
    MpHeaderNb
  },
  data() {
    return {
      team: [
        {
          name: 'KOTARO',
          intro: '結構走ってます！',
          avatar: ''
        },
        {
          name: 'ABI',
          intro: 'ガジェット大好きっ！^^',
          avatar: ''
        },
        {
          name: 'TSURU-D',
          intro: 'ラガーマンエンジニア',
          avatar: ''
        },
        {
          name: 'SHIMO-D',
          intro: '最近運動不足。。',
          avatar: ''
        },
        {
          name: 'TOMO',
          intro: '',
          avatar: ''
        }
      ]
    }
  }
}
</script>