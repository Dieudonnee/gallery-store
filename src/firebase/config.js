import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAHuGIV8eSYeOlvyGWBZfQt8G9ysfXBqLo",
    authDomain: "gallery-db-store.firebaseapp.com",
    projectId: "gallery-db-store",
    storageBucket: "gallery-db-store.appspot.com",
    messagingSenderId: "466709711915",
    appId: "1:466709711915:web:f2f0d77a0a7a9e06d3ae6e"
  };
  
  // Initialize Firebase
firebase.default.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectStorage, projectFirestore, timestamp}