import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB0I0ib4_DVtuGbt2aQc4FuxPllJL9dIoE",
  authDomain: "management-bde00.firebaseapp.com",
  projectId: "management-bde00",
  storageBucket: "management-bde00.appspot.com",
  messagingSenderId: "327237214355",
  appId: "1:327237214355:web:e2d34b08845094dee12d66",
  measurementId: "G-TSM7N9GGJ4"
};

const db = firebaseApp.firestore();

export {db};