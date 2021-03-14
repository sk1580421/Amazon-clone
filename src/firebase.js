import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVomhbSpQCEXwojwZ4jAVDx9PrhQA1jwQ",
    authDomain: "clone-sk-6ff3d.firebaseapp.com",
    projectId: "clone-sk-6ff3d",
    storageBucket: "clone-sk-6ff3d.appspot.com",
    messagingSenderId: "549238691991",
    appId: "1:549238691991:web:71eb3a0154d766447a31d2",
    measurementId: "G-SZJ9Q1SBLK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };