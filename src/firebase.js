import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYGUgprhQYNxPv8UsEaMJA0jXUZanhsHg",
  authDomain: "agtest-e4cd8.firebaseapp.com",
  projectId: "agtest-e4cd8",
  storageBucket: "agtest-e4cd8.appspot.com",
  messagingSenderId: "735725571830",
  appId: "1:735725571830:web:f603c22dc4eafcd1e926d7",
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
