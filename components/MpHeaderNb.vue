<template>
  <nav>
    <v-toolbar>
      <!-- MemberpageHeaderNavbar -->
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">GYM</span>
        <span>-RATS-</span>
      </v-toolbar-title>
    </v-toolbar>

    <!-- ドロップダウンメニュー -->
    <!-- ドロップダウン終わり いらなかったら消す -->

    <v-navigation-drawer v-model="drawer" app class="orange">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src alt />
            <!-- 写真追加する -->
          </v-avatar>
          <p class="white--text subheading mt-1">GYM-RATS-</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, //trueにしたら最初から映ったまま
      links: [
        { icon: 'account_balance', text: 'Home', route: '/home' },

        { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
        { icon: 'account_box', text: 'My Profile', route: '/profile' },
        { icon: 'calendar_today', text: 'Schedule', route: '/schedule' },
        // { icon: 'folder', text: 'My Projects', route: '/projects' }, //ぶっちゃけこれいらないかも
        { icon: 'group', text: 'Members', route: '/members' },
        { icon: 'exit_to_app', text: 'SIGNOUT', route: '/' } //v-on clickでボタンとして埋め込めばいいのかも。
      ],
      snackbar: false
    }
  }
}
</script>