<template>
  <v-app class="orange lighten-4">
    <the-header />
    <div v-if="isAuthenticated"></div>

    <div v-else>
      <v-card-text>
        <v-text-field label="Login" name="login" prepend-icon="person" type="text" v-model="email"></v-text-field>
        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          type="password"
          v-model="password"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="hidden-sm-only" v-on:click="login">LOGIN</v-btn>
        </v-card-actions>
      </v-card-text>
    </div>

    <!-- Sign up -->
    <v-card-text>
      <v-text-field
        label="Signup"
        name="signUp"
        prepend-icon="person"
        type="text"
        v-model="signUpemail"
      ></v-text-field>
      <v-text-field
        id="signUppassword"
        label="Password"
        name="signUppassword"
        prepend-icon="lock"
        type="password"
        v-model="signUppassword"
      ></v-text-field>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="hidden-sm-only" v-on:click="signUp">SIGNUP</v-btn>
      </v-card-actions>
    </v-card-text>
    <!-- Sign up fin -->
  </v-app>
</template>





<script>
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  },
  data() {
    return {
      email: '',
      password: '',
      signUpemail: '',
      signUppassword: ''
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user)
    })
  },
  methods: {
    //ログイン・ログアウト
    ...mapActions(['setUser']),
    login() {
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user)
      })

      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // ログインしたら飛ぶページを指定
          console.log(user)
          this.$router.push('/home')
        })
        .catch((error) => {
          alert(error)
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null)
        })
        .catch((error) => {
          alert(error)
        })
    },
    //Signup methodsはここから
    ...mapActions(['setUser']),
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.signUpemail, this.signUppassword)
        .then((user) => {
          alert('登録が完了しました', user.signUpemail)
          // ログインしたら飛ぶページを指定
          this.$router.push('/home')
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}
</script>

<style>
/* * {
  border: solid blue 1px;
} */
</style>
