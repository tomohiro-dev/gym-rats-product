//機能してない
//消しちゃってOK

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = () => {
  return new Vuex.store({
    state: {
      loadedMeetups: [
        {
          imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: null,
          title: 'Meetup in hakata',
          date: '2019-10-30'
        },
        {
          imageUrl: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: null,
          title: 'Meetup in tokyo',
          date: '2019-10-18'
        }
      ],
      user: {
        id: null,
        registeredMeetups: ['null']
      }
    },
    mutations: {},
    actions: {},
    getters: {
      loadedMeetups(state) {
        return state.loadedMeetups.sort((meetupA, meetupB) => {
          return meetupA.date > meetupB.date
        })
      },
      featuredMeetups(state, getters) {
        return getters.loadedMeetups.slice(0, 5)
      },
      loadedMeetup(state) {
        return (meetupId) => {
          return state.loadedMeetups.find((meetup) => {
            return meetup.id == meetupId
          })
        }
      }
    }
  })
}

export default store
