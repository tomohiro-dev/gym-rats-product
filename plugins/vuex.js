import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    console.log(this.user) // ここだと取得できない
    setTimeout(() => {
      console.log(this.user) // ここだと取得できる
      // なにかしらの処理を追加していく↓
    })
  }
}
