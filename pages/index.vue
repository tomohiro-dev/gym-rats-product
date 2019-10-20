<template>
  <!-- ルールとして、template全体の次はdivで囲むこと忘れずに -->
  <v-app>
    <the-header />
    <!-- ログイン中に表示される画面 -->
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です
      <br />
      <button v-on:click="logout">ログアウト</button>
      <br />
      <!-- <a href="/member-page">メンバーページへ</a> -->
      <router-link to="profile">profile</router-link>
    </div>
    <!-- ログイン中に表示される画面 fin -->

    <!-- ログインしていない時に表示される画面 -->
    <div v-else>
      メール
      <br />
      <input type="text" v-model="email" />
      <br />パスワード
      <br />
      <input type="password" v-model="password" />
      <br />
      <button v-on:click="login">ログイン</button>
    </div>
    <!-- ログインしていない時に表示される画面 fin -->

    <!-- <div v-else>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Login"
            name="login"
            prepend-icon="person"
            type="text"
            v-model="email"
          ></v-text-field>
          <br />
          <br />パスワード
          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="lock"
            type="password"
            v-model="password"
          ></v-text-field>
          <br />
          <button v-on:click="login">ログイン</button>
        </v-form>
      </v-card-text>
    </div>-->

    <!-- Sign up -->
    <div>
      <input type="text" v-model="email" placeholder="メールアドレス" />
      <br />
      <input type="password" v-model="password" placeholder="パスワード" />
      <br />
      <button v-on:click="signUp">新規登録</button>
    </div>
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
      password: ''
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
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // ログインしたら飛ぶページを指定
          //this.$router.push('/member-page')
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
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          alert('登録が完了しました', user.email)
          // ログインしたら飛ぶページを指定
          //this.$router.push('/member-page')
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
