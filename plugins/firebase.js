import firebase from 'firebase'
import { directive } from '@babel/types'
//firebaseからimport

//firebaseとやり取りする準備
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBCACWpSrMGbkc_XqETIrqJZFapYU0qbcA',
  authDomain: 'gym-rats-project.firebaseapp.com',
  databaseURL: 'https://gym-rats-project.firebaseio.com',
  projectId: 'gym-rats-project',
  storageBucket: 'gym-rats-project.appspot.com',
  messagingSenderId: '681342537854'
})

export default firebaseApp
//firebaseとやり取りする準備fin

//インスタンス（物体）初期化
//メッセージ送受信の準備
export const db = firebaseApp.firestore()

//firestoreのオブジェクト取得
