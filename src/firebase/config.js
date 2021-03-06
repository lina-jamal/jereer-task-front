import firebase from "firebase";
import "firebase/firestore"; //for database
// import "firebase/firebase-auth"; //for auth
const firebaseConfig = {
  apiKey: "AIzaSyATwMuci0vuJvzcS6Tc05q2sYahgrf2-k8",
  authDomain: "task-7720e.firebaseapp.com",
  projectId: "task-7720e",
  storageBucket: "task-7720e.appspot.com",
  messagingSenderId: "790759250113",
  appId: "1:790759250113:web:f7fb87b0b9fa5128195c40",
  measurementId: "G-WCRWMHW9PP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
