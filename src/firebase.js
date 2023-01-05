import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAM6dzDpe3hlhWWDFXJflkaFFH762_89oM",
  authDomain: "management-b0b79.firebaseapp.com",
  projectId: "management-b0b79",
  storageBucket: "management-b0b79.appspot.com",
  messagingSenderId: "192927296274",
  appId: "1:192927296274:web:ef107621ca90c71e40e1cb",
  measurementId: "G-6M0M92WVY4"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db};