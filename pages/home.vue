<template>
  <v-app>
    <mp-header-nb />
    <h1 class="subheading grey--text">HOME</h1>

    <div v-if="isAuthenticated">
      <div class="font-weight-black">ACCOUNT:{{ user.email }}</div>
    </div>

    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">ON time</div>
          <v-list-item-title class="headline mb-1">TSURU-D</v-list-item-title>
          <v-list-item-subtitle>12:20</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80">
          <img src="@/assets/profile/tsuruchan.png" />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>

    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">ON time</div>
          <v-list-item-title class="headline mb-1">SHIMO-D</v-list-item-title>
          <v-list-item-subtitle>14:30</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80">
          <img src="@/assets/profile/shimod.png" />
        </v-list-item-avatar>
      </v-list-item>
    </v-card>
    <!-- <v-layout row wrap class="mt-2"> -->
    <p class="text-center font-weight-bold orange--text display-1">LET'S GO ENJOY HITTING THE GYM!!</p>

    <div class="homebtn">
      <v-btn x-large @click="log" color="red">DO THE WORK!!</v-btn>
    </div>

    <!-- チェックアウト前のメッセージ -->
    <div>
      <v-col cols="12" sm="6">
        <v-textarea prepend-inner-icon="comment" class="mx-2" label="cheer up someone" rows="1"></v-textarea>
      </v-col>

      <div>
        <div class="niceworkout">
          <v-btn x-large @click="awesome" color="blue white--text">NICE WORKOUT!!</v-btn>
        </div>
      </div>
    </div>
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
      //これはUIDでOK!!
      console.log(user.uid)
    },
    awesome() {
      this.$router.push('/niceworkout')
    }
  },
  data() {
    return {
      meetups: [
        {
          name: 'TSURU-D',
          avatar: require('@/assets/profile/tsuruchan.png'),
          id: null,
          title: '13:00'
        },
        {
          name: 'SHIMO-D',
          avatar: require('@/assets/profile/shimod.png'),
          id: null,
          title: '14:30'
        }
        // {
        //   imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        //   id: test123test,
        //   title: Meetup in hakata
        // },
        // {
        //   imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        //   id: test123test,
        //   title: Meetup in hakata
        // }
      ]
    }
  }
}
</script>

<style scoped>
/* * {
  border: solid blue 1px;
} */

.title {
  position: absolute;
  bottom: 50px;
  color: white;
  font-size: 2em;
  padding: 20px;
}

.homebtn {
  text-align: center;
}

.niceworkout {
  text-align: center;
}
</style>