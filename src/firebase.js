import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXeOYxjVOv_MSo-0djZN5qAEfqwye9Gm0",
    authDomain: "project-37bd6.firebaseapp.com",
    projectId: "project-37bd6",
    storageBucket: "project-37bd6.appspot.com",
    messagingSenderId: "628850756515",
    appId: "1:628850756515:web:d33805ea9629d0b64ee816",
    measurementId: "G-1CX214R7DL"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage};