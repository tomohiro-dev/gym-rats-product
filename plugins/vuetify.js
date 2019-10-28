import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader version "^2.1.1" ,
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(Vuetify)
Vue.use(VueTextareaAutosize)

export default (ctx) => {
  const vuetify = new Vuetify({
    theme: {
      dark: false // From 2.0 You have to select the theme dark or light here
    },
    icons: {
      iconfont: 'md'
    }
  })

  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}
