import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZ_3ih30-GKk2djcELTQuZuUEKjQ0pB9Y",
  authDomain: "twitter-clone-d1457.firebaseapp.com",
  projectId: "twitter-clone-d1457",
  storageBucket: "twitter-clone-d1457.appspot.com",
  messagingSenderId: "121212864279",
  appId: "1:121212864279:web:eff7039cb08da927789952",
  measurementId: "G-LW0QPKTKHH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;