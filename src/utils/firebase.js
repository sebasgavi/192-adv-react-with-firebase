import * as firebase from "firebase/app";

import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyANNdClv7YUFVYmvGVYP3PpFLONI0Ujf4c",
  authDomain: "club-jueg-tron.firebaseapp.com",
  databaseURL: "https://club-jueg-tron.firebaseio.com",
  projectId: "club-jueg-tron",
  storageBucket: "club-jueg-tron.appspot.com",
  messagingSenderId: "400626979223",
  appId: "1:400626979223:web:0be13e3ee5acb5ad0e34d2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fb = firebase;