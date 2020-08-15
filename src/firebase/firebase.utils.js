import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCjfndAq40ms6-7GYAS2PEmvpN2PybGb-M",
  authDomain: "crown-clothing-2933b.firebaseapp.com",
  databaseURL: "https://crown-clothing-2933b.firebaseio.com",
  projectId: "crown-clothing-2933b",
  storageBucket: "crown-clothing-2933b.appspot.com",
  messagingSenderId: "1049610174104",
  appId: "1:1049610174104:web:0ccd94b0bc016298eb1aed",
  measurementId: "G-1M5G60JZ9M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
