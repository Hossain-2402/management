import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1-DFijRglEKHUKHY-XJi8p4jXxxgAuYM",
  authDomain: "social-media-cdf51.firebaseapp.com",
  projectId: "social-media-cdf51",
  storageBucket: "social-media-cdf51.appspot.com",
  messagingSenderId: "140301873836",
  appId: "1:140301873836:web:1c85d62f83fc6e6be06509",
  measurementId: "G-BMTJZ26CGE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };