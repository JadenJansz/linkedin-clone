import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBR6I9f1O3Sndf8Obzixvfs6W4J2oZSOKo",
    authDomain: "linkedin-clone-yt-c3d54.firebaseapp.com",
    projectId: "linkedin-clone-yt-c3d54",
    storageBucket: "linkedin-clone-yt-c3d54.appspot.com",
    messagingSenderId: "450303758873",
    appId: "1:450303758873:web:dbb99ca01d93f050b59088",
    measurementId: "G-7RSMWEQ2DR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };