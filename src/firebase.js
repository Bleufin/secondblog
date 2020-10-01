import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyCtSkK9QgDujz3tCnEcC1DOqcJweyHXY4E",
  authDomain: "secondblog-5cf75.firebaseapp.com",
  databaseURL: "https://secondblog-5cf75.firebaseio.com",
  projectId: "secondblog-5cf75",
  storageBucket: "secondblog-5cf75.appspot.com",
  messagingSenderId: "320493990751",
  appId: "1:320493990751:web:7c15581862fb5786e9bcea"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
