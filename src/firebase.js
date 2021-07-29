import * as firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA_YKFDIJMTL1o-z5QIZIMU_ESkDoVggpQ",
  authDomain: "appmenu-41d4b.firebaseapp.com",
  projectId: "appmenu-41d4b",
  storageBucket: "appmenu-41d4b.appspot.com",
  messagingSenderId: "627956380482",
  appId: "1:627956380482:web:610a4325a7e42854340edb",
  measurementId: "G-NX94RF8XRK"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };