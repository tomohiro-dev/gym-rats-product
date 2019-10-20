<template>
  <div>
    <the-header />
    <!-- プロフィール画像アップロード -->
    <div :class="{'hover-style': !isSelected}" class="dropbox">
      <input
        v-if="!isSelected && !mustReset"
        :name="uploadFieldName"
        :accept="acceptType"
        type="file"
        class="input-file"
        @change="changeFile($event.target)"
      />
      <p v-if="!isSelected">Drag image or click</p>
      <div v-else>
        <div class="preview">
          <img v-if="imageUrl" :src="imageUrl" alt="preview" />
        </div>
        <div class="buttons">
          <a class="button" @click="reset">cancel</a>
          <a class="button" @click="upload">upload</a>
        </div>
      </div>
    </div>
    <!-- プロフィール画像アップロード fin -->

    <!-- テキストデータ -->
    <div class="userdata">
      <P>
        NAME
        <input type="text" v-model="name" id="name" />
      </P>

      <!-- イントロダクション画像1 -->

      <!-- イントロダクション画像2 -->

      <!-- イントロダクション画像3 -->

      <p>「なぜ筋トレをするのか？」</p>
      <div>
        <textarea v-model="whyme" id="text" cols="40" rows="10"></textarea>
        <button @click="sendItem">保存</button>
      </div>

      <p>「目標」</p>
      <div>
        <textarea v-model="goal" id="text" cols="40" rows="10" />
      </div>

      <p>「自己紹介タグワード」</p>
      <div>
        <textarea v-model="introtag" class="introduction" cols="40" rows="10"></textarea>
      </div>
      <div>
        <router-link to="/">login</router-link>
        <router-link to="output">output</router-link>
      </div>
    </div>
    <!-- テキストデータ fin -->
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import db from '~/plugins/firebase'

export default {
  //header反映
  components: {
    TheHeader
  },
  //プロフィール画像のアップロード
  props: {
    acceptType: {
      type: String,
      default: 'image/*'
    },
    uploadFieldName: {
      type: String,
      default: 'image'
    }
  },
  name: 'userdata',
  data() {
    return {
      //strage
      mustReset: false,
      imageUrl: '',
      file: null,
      //firestore
      name: '',
      whyme: '',
      goal: '',
      introtag: '',
      items: [],
      showMessage: false
    }
  },
  //プロフィール画像
  computed: {
    isSelected() {
      return !!this.file
    }
  },
  mounted() {
    this.reset()
  },
  methods: {
    reset() {
      this.file = null
      this.imageUrl = ''
      // remove file by rerender input element
      this.mustReset = true
      this.$nextTick(() => {
        this.mustReset = false
      })
    },
    changeFile({ name, files }) {
      if (!files.length) {
        return
      }
      this.file = files[0]
      this.readUrl()
    },
    readUrl() {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.imageUrl = e.target.result
      }
      reader.readAsDataURL(this.file)
    },
    upload() {
      const formData = new FormData()
      formData.append(this.uploadFieldName, this.file, this.file.name)
      this.$emit('upload', formData)
    },
    //プロフィール画像fin

    //firestore テキスト書き込み
    sendItem() {
      const colref = db.firestore().collection('usercontent')
      // "usercontent"という名前のコレクションへの参照をfirestoreに作成

      // 保存用JSONデータを作成
      const saveData = {
        name: this.name,
        whyme: this.whyme,
        goal: this.goal,
        introtag: this.introtag
      }

      console.log(saveData)

      // addの入れ値に保存したいデータを渡す
      colref
        .add(saveData)
        .then(function(docRef) {
          // 正常にデータ保存できた時の処理
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          // エラー発生時の処理
          console.error('Error adding document: ', error)
        })
    }
  },
  name: 'name'
}
</script>

<style>
/* * {
  border: solid blue 1px;
} */

.dropbox {
  outline: 2px dashed grey;
  outline-offset: -10px;
  color: dimgray;
  min-height: 150px;
  max-height: 150px;
  min-width: 150px;
  max-width: 150px;
  position: relative;
}

.hover-style:hover {
  background-color: #f3fffc;
}

.input-file {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.preview {
  max-height: 250px;
  max-width: 250px;
  padding-top: 30px;
  margin: 0 auto;
}

.preview img {
  height: 100%;
  width: 100%;
}

.buttons {
  text-align: center;
  margin-top: 30px;
}

.button {
  width: 50px;
  padding: 5px 30px;
  cursor: pointer;
  border-radius: 5px;
  -webkit-transition: background 0.5s;
  transition: background 0.5s;
}

.button:hover {
  background: #ececec;
}
</style>