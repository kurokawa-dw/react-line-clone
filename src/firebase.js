import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBnIS3BMkDjBdcwn8DG1LKR_xwTOf5rXfQ",
  authDomain: "line-clone-1ed67.firebaseapp.com",
  projectId: "line-clone-1ed67",
  storageBucket: "line-clone-1ed67.appspot.com",
  messagingSenderId: "393921459489",
  appId: "1:393921459489:web:4ca2387504c3dbd1383a60"
});


const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db , auth };