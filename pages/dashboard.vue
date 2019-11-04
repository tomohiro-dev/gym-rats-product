<template>
  <v-app>
    <mp-header-nb />
    <h1 class="subheading grey--text">DASHBOARD</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" dark v-on="on" @click="sortBy('title')">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">EVENT NAME</span>
            </v-btn>
          </template>
          <span>Sort Projects by EVENT NAME</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" dark v-on="on" @click="sortBy('person')">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">Person</span>
            </v-btn>
          </template>
          <span>Sort Projects by project name</span>
        </v-tooltip>
      </v-layout>

      <v-card text class="pa-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs5 sm4 md3>
            <v-img height="130px" width="200px" v-bind:src="project.avatar"></v-img>
          </v-flex>

          <v-flex xs12 md6>
            <div class="caption grey--text">EVENT NAME</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">PERSON</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">DUE</div>
            <div>{{project.due}}</div>
          </v-flex>
        </v-layout>
      </v-card>
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
      projects: [
        {
          avatar: require('@/assets/profile/kotaro.png'),
          title: 'ランニング',
          person: 'KOTARO',
          due: '2019-10-03',
          status: 'ongoing',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          avatar: require('@/assets/profile/tsuruchan.png'),
          title: 'チェストデイ',
          person: 'TSURU-D',
          due: '2019-08-03',
          status: 'stay',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          avatar: require('@/assets/profile/shimod.png'),
          title: 'スタジオレッスン',
          person: 'SHIMO-D',
          due: '2019-06-05',
          status: 'complete',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          avatar: require('@/assets/profile/abisan.png'),
          title: 'レッグデイ',
          person: 'ABI',
          due: '2019-12-18',
          status: 'overdue',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        }
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1))
    }
  }
}
</script>

<style>
.project.complete {
  border-left: 4px solid #04f8e073;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.project.stay {
  border-left: 4px solid blue;
}

/* なぜか適用されない */
.v-chip.complete {
  background: #04f8e073;
}
.v-chip.ongoing {
  background: #ffaa2c;
}
.v-chip.overdue {
  background: #f83e70;
}
</style>