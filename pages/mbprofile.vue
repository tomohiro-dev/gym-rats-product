<template>
  <v-app>
    <mp-header-nb />
    <!-- プロフィール詳細 -->

    <h1 class="subheading grey--text">PROFILE</h1>

    <v-card class="mx-auto" max-width="344">
      <v-avatar size="344">
        <img src="@/assets/profile/abisan.png" height="200px" alt />
        <!-- <v-img src="assets/profile/tomo.png" height="200px"/> -->
      </v-avatar>

      <v-card-title>ABI</v-card-title>

      <v-content>G's Academy Fukuoka Dev3 Homeroom teacher</v-content>

      <!-- タグをつける -->
      <v-btn>ガジェット</v-btn>
      <v-btn>プログラミング</v-btn>
      <v-btn>ダーツ</v-btn>
      <v-btn>カラオケ</v-btn>
      <v-btn>筋トレ</v-btn>

      <v-card-actions>
        <div class="purple--text">Introduction</div>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>1年以上ジムの幽霊会員でした！また頑張りたいので、週2~3回一緒に追い込める人是非一緒にやりましょう！</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <!-- date pickersはここから -->
    <v-row>
      <v-card class="mx-auto" max-width="344">
        <v-col cols="12" sm="6" md="6">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="dates"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-combobox
                v-model="dates"
                multiple
                chips
                small-chips
                label="Sending before multiple picker in menu!"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-combobox>
            </template>
            <v-date-picker v-model="dates" multiple no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(dates)">OK</v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="hidden-sm-only" @click="home">SEND</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-app>
</template>


<script>
import MpHeaderNb from '~/components/MpHeaderNb.vue'

export default {
  components: {
    MpHeaderNb
  },
  data: () => ({
    dates: ['2019-10-15', '2019-10-20'],
    menu: false,
    show: false
  }),
  methods: {
    home() {
      this.$router.push('/home')
    }
  }
}
</script>

